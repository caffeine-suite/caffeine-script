{compactFlatten, log, min, arrayWithout} = require "art-foundation"

{resolveOperatorPrecidence, getNormalizedOperator} = require "../OperatorHelper"
{BinaryOperatorStn, UnaryOperatorStn} = require '../SemanticTree'

module.exports =
  binOpExpression:
    pattern: "unaryOpExpression binaryOperatorSequenceExtension?"

  binaryOperatorSequenceExtension:
    pattern: "binaryOperatorAndExpression+"
    stnExtension: true
    getStn: (left)->
      throw new Error "expecting left" unless left
      operators = (getNormalizedOperator operator.binaryOperator for operator in @binaryOperatorAndExpressions)
      operands = compactFlatten [left, (operand.unaryOpExpression.getStn() for operand in @binaryOperatorAndExpressions)]

      resolveOperatorPrecidence operators, operands, (operandA, operandB, operator) ->
        BinaryOperatorStn operator: operator, operandA, operandB

  binaryOperatorAndExpression:
    pattern: "_? binaryOperator _? unaryOpExpression"

  lineStartBinaryOperatorAndExpression:
    pattern: "binaryOperator _? binOpExpression"
    stnProps: -> operator: getNormalizedOperator @binaryOperator
    stnFactory: "BinaryOperatorStn"
    stnExtension: true

  unaryOpExpression:
    pattern: "unaryOperator_* expressionWithoutBinOps unaryTailOperator*"

    getStn: ->
      stn = @expressionWithoutBinOps.getStn()
      for operand in @unaryTailOperators || []
        stn = UnaryOperatorStn
          operand: operand.toString().trim()
          stn
      for operand in (@unaryOperator_s || []).slice().reverse()
        stn = UnaryOperatorStn
          operand: operand.toString().trim()
          stn
      stn
