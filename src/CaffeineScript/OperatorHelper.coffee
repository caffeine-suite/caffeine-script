{a, m, w, compactFlatten, log, min, arrayWithout} = require "art-foundation"

module.exports = class OperatorHelper
  @CoffeeScriptGlobal: CoffeeScriptGlobal = "Caf"

  @operatorMap:
    "**": (a, b) -> "Math.pow(#{a}, #{b})"
    "//": (a, b) -> "Math.floor(#{a} / #{b})"
    "%%": (a, b) -> "#{CoffeeScriptGlobal}.mod(#{a}, #{b})"
    in:   (a, b) -> "#{CoffeeScriptGlobal}.in(#{a}, #{b})"

  @infix: (a, b, op) -> "#{a} #{op} #{b}"
  @precidence: [
    a "right", w "**"
    a "left" , w "* / % // %%"
    a "left" , w "+ -"
    a "left" , w "<< >> >>>"
    a "left" , w "< <= > >= instanceof in"
    a "left" , w "=== !=="
    a "left" , w "&"
    a "left" , w "^"
    a "left" , w "|"
    a "left" , w "&&"
    a "left" , w "||"
  ]

  @opsToPrecidence: {}

  for [direction, ops], i in @precidence
    @opsToPrecidence[op] = i for op in ops

  @resolveOperatorSequence: (ops, operands, infix = @infix) =>
    throw new Error unless operands.length == ops.length + 1
    while ops.length > 0

      lowestPrecidence = @opsToPrecidence[ops[0]]
      firstOccurance = lastOccurance = 0
      for op, i in ops
        if lowestPrecidence > p = @opsToPrecidence[op]
          firstOccurance = lastOccurance = i
          lowestPrecidence = p
        else if lowestPrecidence == p
          lastOccurance = i

      [direction] = @precidence[lowestPrecidence]
      opIndexToResolve = if direction == "left" then firstOccurance else lastOccurance

      opsBefore = ops
      operandsBefore = operands

      op = ops[opIndexToResolve]
      operandA = operands[opIndexToResolve]
      operandB = operands[opIndexToResolve + 1]
      ops = arrayWithout ops, opIndexToResolve

      operands = arrayWithout operands, opIndexToResolve
      combiner = @operatorMap[op] || infix
      operands[opIndexToResolve] = combiner operandA, operandB, op

    throw new Error unless operands.length == 1
    operands[0]
