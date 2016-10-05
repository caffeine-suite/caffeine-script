{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{BinaryOperatorStn, ControlOperatorStn, DodAccessorStn} = require '../SemanticTree'

module.exports =

  # statementOrBlankLine: w "multilineStatement blankLine"

  statement: "multilineStatement"

  multilineStatement:
    pattern: "statementWithoutEnd newLineBinOps? end"
    getStn: ->
      out = @statementWithoutEnd.getStn()
      @newLineBinOps?.getStn(out) || out

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

  newLineBinOps:
    pattern: "newLineBinOp+"
    getStn: (previousLineStn)->
      out = previousLineStn
      out = nlbo.getStn out for nlbo in @newLineBinOps
      out

  newLineStart: /( *\n)+/
  newLineBinOp: a
    pattern: "newLineStart binaryOperator _? complexExpression"

    getStn: (previousLineStn)->
      BinaryOperatorStn operand: @binaryOperator.toString(), previousLineStn, @complexExpression.getStn()

    # m pattern: "/( *\n)+\./ simpleAssignable assignableExtension* assignmentExtension"
    # m
    #   pattern: "/( *\n)+/ dotAccessor+"
    #   getStn: (previousLineStn)->
    #     stn = previousLineStn
    #     stn = r.getStn stn for r in @dotAccessors
    #     stn

    m
      pattern: "newLineStart &newLineBinOpStart valueExtension*"
      getStn: (left) ->
        stn = left
        for right in @valueExtensions || []
          stn = right.getStn stn
        stn

  newLineBinOpStart: w "dot_ binaryOperator"
