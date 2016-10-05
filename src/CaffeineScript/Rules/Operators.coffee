{a, m, w, compactFlatten, log, min, arrayWithout} = require "art-foundation"

{resolveOperatorPrecidence} = require "../OperatorHelper"
{BinaryOperatorStn, UnaryOperatorStn} = require '../SemanticTree'

module.exports =
  binOpExpression:
    pattern: "unaryOpExpression operatorAndExpression+"
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

  unaryOpExpression: a
    pattern: "unaryOperator_* expressionWithoutBinOps unaryTailOperator*"

    getStn: ->
      stn = @expressionWithoutBinOps.getStn()
      for operand in @unaryTailOperators || []
        stn = UnaryOperatorStn
          operand: operand.toString().trim()
          stn
      for operand in @unaryOperator_s || [] by -1
        stn = UnaryOperatorStn
          operand: operand.toString().trim()
          stn
      stn
