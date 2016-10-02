{a, m, w, compactFlatten, log, min, arrayWithout} = require "art-foundation"

{resolveOperatorPrecidence} = require "../OperatorHelper"
{BinaryOperatorStn} = require '../SemanticTree'

module.exports =
  binOpExpression:
    pattern: "unaryOpExpression operatorAndExpression+"
    toJs: ->
      ops = (ope.getNormalizedOp() for ope in @operatorAndExpressions)
      operands = compactFlatten [@unaryOpExpression.toJs(), (operand.getJsExpression() for operand in @operatorAndExpressions)]

      resolveOperatorPrecidence ops, operands

    getStn: ->
      ops = (ope.getNormalizedOp() for ope in @operatorAndExpressions)
      operands = compactFlatten [@unaryOpExpression.getStn(), (operand.getStn() for operand in @operatorAndExpressions)]

      resolveOperatorPrecidence ops, operands, (operandA, operandB, op) ->
        BinaryOperatorStn operand: op, operandA, operandB


  operatorAndExpression:
    pattern: "_? binaryOperator _? unaryOpExpression"
    getNormalizedOp: ->
      switch op = @binaryOperator.toString()
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

  binaryOperator: w "logicOperator shiftOperator compareOperator mathOperator"
