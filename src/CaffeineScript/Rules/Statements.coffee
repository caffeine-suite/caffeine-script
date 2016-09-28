{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

  statementOrBlankLine: w "multiLineStatement blankLine"

  multiLineStatement:
    pattern: "statement newLineBinOp*"
    toJs: (returnJsStatement = true) ->
      if @newLineBinOp
        out = @statement.toJs false
        out = nlbo.toJs out for nlbo in @newLineBinOps
        out
      else
        @statement.toJs returnJsStatement

  statement: a
    pattern: 'complexExpression end'
    toJs: (returnJsStatement = true) -> @complexExpression.toJs returnJsStatement
    m
      pattern: 'complexExpression / +(if|while|until|unless) +/ complexExpression end',
      toJs: (returnJsStatement = true) ->
        isNot = false
        switch control = @matches[1].toString().trim()
          when "until" then isNot = true; control = "while";
          when "unless" then isNot = true; control = "if";

        test = @complexExpressions[1].toJs()
        test = "!(#{test})" if isNot

        if returnJsStatement
          "#{control} (#{test}) {#{@complexExpressions[0].toJs returnJsStatement}}"
        else
          "#{test} ? #{@complexExpressions[0].toJs returnJsStatement} : null"

  newLineBinOp: a
    pattern: "binaryOperator _? statement"
    toJs: (previousStatement) ->
      "(#{previousStatement}) #{@binaryOperator} #{@statement.toJs false}"
    m
      pattern: "'.' simpleAssignable"
      toJs: (previousStatement) ->
        "(#{previousStatement}).#{@simpleAssignable.toJs false}"