{a, m, w, compactFlatten, log, min, arrayWithout} = require "art-foundation"

module.exports = class OperatorHelper
  @CoffeeScriptGlobal: CoffeeScriptGlobal = "Caf"

  @operatorMap:
    "**": (a, b) -> "#{CoffeeScriptGlobal}.pow(#{a}, #{b})"
    "//": (a, b) -> "#{CoffeeScriptGlobal}.div(#{a}, #{b})"
    "%%": (a, b) -> "#{CoffeeScriptGlobal}.mod(#{a}, #{b})"
    in:   (a, b) -> "#{CoffeeScriptGlobal}.in(#{a}, #{b})"
    "?":  (a, b) ->
      if a.match /^@?[_a-z0-9]+$/i
        "#{a} != null ? #{a} : #{b}"
      else
        "#{CoffeeScriptGlobal}.existsOr(#{a}, (() => {return #{b}})())"

  @infix: infix = (a, b, op) -> "#{a} #{op} #{b}"
  @precidence: [
    w "left  ?"
    w "right **"
    w "left  * / % // %%"
    w "left  + -"
    w "left  << >> >>>"
    w "left  < <= > >= instanceof in"
    w "left  === !=="
    w "left  &"
    w "left  ^"
    w "left  |"
    w "left  &&"
    w "left  || ?"
  ]

  @opsToPrecidence: {}
  @direction = for [direction, operators...], i in @precidence
    @opsToPrecidence[op] = i for op in operators
    direction

  @validateOperator: validateOperator = (operator) =>
    throw new Error "OperatorHelper: operator '#{operator}' is not defined" unless @opsToPrecidence[operator]
    operator

  @getNormalizedOperator: (operator)->
    switch operator = operator.toString().trim()
      when "and" then "&&"
      when "or"  then "||"
      when "==", "is"   then "==="
      when "!=", "isnt" then "!=="
      else
        validateOperator operator

  @binaryOperatorToJs: (operand, a, b) ->
    f = OperatorHelper.operatorMap[operand] || infix
    f a, b, operand

  @getOpPrecidence: (op) =>
    unless (p = @opsToPrecidence[op])?
      throw new Error "OperatorHelper: operator '#{op}' not defined"
    p

  @resolveOperatorPrecidence: (operators, operands, combinerOverride) =>
    throw new Error "expecting: operands.length:#{operands.length} == operators.length:#{operators.length} + 1" unless operands.length == operators.length + 1
    while operators.length > 0

      lowestPrecidence = @getOpPrecidence operators[0]
      firstOccurance = lastOccurance = 0
      for op, i in operators
        if lowestPrecidence > p = @getOpPrecidence op
          firstOccurance = lastOccurance = i
          lowestPrecidence = p
        else if lowestPrecidence == p
          lastOccurance = i

      opIndexToResolve = if @direction[lowestPrecidence] == "left" then firstOccurance else lastOccurance

      opsBefore = operators
      operandsBefore = operands

      op = operators[opIndexToResolve]
      operandA = operands[opIndexToResolve]
      operandB = operands[opIndexToResolve + 1]
      operators = arrayWithout operators, opIndexToResolve

      operands = arrayWithout operands, opIndexToResolve
      combiner = combinerOverride || @operatorMap[op] || infix
      operands[opIndexToResolve] = combiner operandA, operandB, op

    throw new Error unless operands.length == 1
    operands[0]
