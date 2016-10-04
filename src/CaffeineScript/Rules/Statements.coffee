{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{BinaryOperatorStn, ControlOperatorStn} = require '../SemanticTree'

module.exports =

  statementOrBlankLine: w "multilineStatement blankLine"

  statement: "multilineStatement"

  multilineStatement:
    pattern: "statementWithoutEnd newLineBinOp* end"
    toJs: (returnJsStatement = true) ->
      if @newLineBinOp
        out = @statementWithoutEnd.toJs false
        out = nlbo.toJs out for nlbo in @newLineBinOps
        out
      else
        @statementWithoutEnd.toJs returnJsStatement
    getStn: ->
      if @newLineBinOp
        out = @statementWithoutEnd.getStn()
        out = nlbo.getStn out for nlbo in @newLineBinOps
        out
      else
        @statementWithoutEnd.getStn()

  tailControlOperator: / +(if|while|until|unless) +/
  tailControlOperatorComplexExpression: "tailControlOperator complexExpression"

  statementWithoutEnd: a
    pattern: 'complexExpression !tailControlOperator'
    toJs: (returnJsStatement = true) -> @complexExpression.toJs returnJsStatement
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

      # toJs: (returnJsStatement = true) ->
      #   isNot = false
      #   switch control = @tailControlOperator.toString().trim()
      #     when "until" then isNot = true; control = "while";
      #     when "unless" then isNot = true; control = "if";

      #   test = @complexExpressions[1].toJs()
      #   test = "!(#{test})" if isNot

      #   if returnJsStatement
      #     "#{control} (#{test}) {#{@complexExpressions[0].toJs returnJsStatement}}"
      #   else
      #     "#{test} ? #{@complexExpressions[0].toJs returnJsStatement} : null"

  newLineBinOp: a
    pattern: "/( *\n)+/ binaryOperator _? complexExpression"
    toJs: (previousStatement) ->
      "(#{previousStatement}) #{@binaryOperator} #{@complexExpression.toJs false}"

    getStn: (previousLineStn)->
      BinaryOperatorStn operand: @binaryOperator.toString(), previousLineStn, @complexExpression.getStn()

    m
      pattern: "/( *\n)+\./ simpleAssignable assignableExtension* assignmentExtension"
      toJs: (previousStatement) ->
        jsList = (a.toJs() for a in compactFlatten [@simpleAssignable, @assignableExtensions])
        @assignmentExtension.toJs "(#{previousStatement}).#{jsList.join ''}"
    m
      pattern: "/( *\n)+/ dotAccessor+"
      toJs: (previousStatement) ->
        "(#{previousStatement})#{(a.toJs() for a in @dotAccessors).join ''}"

