{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{BinaryOperatorStn, ControlOperatorStn, DodAccessorStn} = require '../SemanticTree'

module.exports =

  statement: "statementWithoutEnd newLineBinOp* end"

  tailControlOperator: / +(if|while|until|unless) +/
  tailControlOperatorComplexExpression: "tailControlOperator complexExpression"

  statementWithoutEnd: a
    pattern: '/ *\n/* lineCommentEnd* complexExpression !tailControlOperator'
    m
      pattern: 'complexExpression tailControlOperatorComplexExpression+',
      getStn: ->
        stn = @complexExpression.getStn()
        for tco in @tailControlOperatorComplexExpressions
          stn = ControlOperatorStn
            operand: tco.tailControlOperator.toString().trim()
            tco.complexExpression.getStn()
            stn
        stn

  newLineStart:
    pattern: /( *\n)+/
    getPresent: -> false

  newLineBinOp: a
    pattern: "newLineStart binaryOperator _? complexExpression"

    stnProps: -> operand: @binaryOperator.toString()
    stnFactory: "BinaryOperatorStn"
    stnExtension: true

    m
      pattern: "newLineStart &newLineBinOpStart valueExtension*"
      # getStn: (left) ->
      #   stn = left
      #   for right in @valueExtensions || []
      #     stn = right.getStn stn
      #   stn

  newLineBinOpStart: w "dot_ binaryOperator"
