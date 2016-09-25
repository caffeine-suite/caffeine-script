{a, m, w, compactFlatten, log, min, arrayWithout} = require "art-foundation"

{resolveOperatorSequence} = require "../OperatorHelper"

module.exports =
  binOpExpression:
    pattern: "unaryOpExpression operatorAndExpression+"
    toJs: ->
      ops = (ope.getNormalizedOp() for ope in @operatorAndExpressions)
      operands = compactFlatten [@unaryOpExpression.toJs(), (operand.getJsExpression() for operand in @operatorAndExpressions)]

      resolveOperatorSequence ops, operands

  operatorAndExpression:
    pattern: "_? operator _? unaryOpExpression"
    getNormalizedOp: ->
      switch op = @operator.toString()
        when "and" then "&&"
        when "or"  then "||"
        when "==", "is"   then "==="
        when "!=", "isnt" then "!=="
        else op

    getJsExpression: -> @unaryOpExpression.toJs()

  unaryOpExpression: a
    pattern: "unaryOperator _? unaryOpExpression"

    getNormalizedOp: ->
      switch op = @unaryOperator.toString()
        when "not" then "!"
        else op

    toJs: ->
      "#{@getNormalizedOp()}#{@unaryOpExpression.toJs()}"

    m pattern: "expressionWithoutBinOps"

  existanceTest:
    pattern: "assignable '?'"
    toJs: -> "(#{@assignable.toJs()} != null)"

  operator: w "logicOperator shiftOperator compareOperator mathOperator"
