{a, m, w, compactFlatten, log, min, arrayWithout} = require "art-foundation"

{resolveOperatorSequence} = require "../OperatorHelper"

module.exports =
  binOpExpression:
    pattern: "expressionWithoutBinOps operatorAndExpression+"
    toJs: ->
      ops = (ope.getNormalizedOp() for ope in @operatorAndExpressions)
      operands = compactFlatten [@expressionWithoutBinOps.toJs(), (operand.getJsExpression() for operand in @operatorAndExpressions)]

      resolveOperatorSequence ops, operands

  operatorAndExpression:
    pattern: "_? operator _? expressionWithoutBinOps"
    getNormalizedOp: ->
      switch op = @operator.toString()
        when "and" then "&&"
        when "or"  then "||"
        when "==", "is"   then "==="
        when "!=", "isnt" then "!=="
        else op

    getJsExpression: -> @expressionWithoutBinOps.toJs()

  existanceTest:
    pattern: "assignable '?'"
    toJs: -> "(#{@assignable.toJs()} != null)"

  operator: w "logicOperator shiftOperator compareOperator mathOperator"
