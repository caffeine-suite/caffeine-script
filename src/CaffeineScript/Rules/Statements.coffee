{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{BinaryOperatorStn, ControlOperatorStn, DodAccessorStn} = require '../SemanticTree'

module.exports =

  statement: "statementWithoutEnd newLineStatementExtension* end"

  tailControlOperator: / +(if|while|until|unless) +/
  tailControlOperatorComplexExpression: "tailControlOperator complexExpression"

  statementWithoutEnd: a
    pattern: 'complexExpression !tailControlOperator'
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

  newLineStatementExtension: a
    pattern: "end lineStartBinaryOperatorAndExpression"
    m pattern: "end &dot_ valueExtension+ binaryOperatorSequenceExtension?"
