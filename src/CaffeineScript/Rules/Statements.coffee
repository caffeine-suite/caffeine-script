{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

  statementOrBlankLine: w "multiLineStatement blankLine"

  multiLineStatement:
    pattern: "statementWithoutEnd newLineBinOp* end"
    toJs: (returnJsStatement = true) ->
      if @newLineBinOp
        out = @statementWithoutEnd.toJs false
        out = nlbo.toJs out for nlbo in @newLineBinOps
        out
      else
        @statementWithoutEnd.toJs returnJsStatement

  statement: "statementWithoutEnd end"

  statementWithoutEnd: a
    pattern: 'complexExpression'
    toJs: (returnJsStatement = true) -> @complexExpression.toJs returnJsStatement
    m
      pattern: 'complexExpression / +(if|while|until|unless) +/ complexExpression',
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
    pattern: "/( *\n)+/ binaryOperator _? statementWithoutEnd"
    toJs: (previousStatement) ->
      "(#{previousStatement}) #{@binaryOperator} #{@statementWithoutEnd.toJs false}"
    m
      pattern: "/( *\n)+/ accessor+"
      toJs: (previousStatement) ->
        "(#{previousStatement})#{(a.toJs() for a in @accessors).join ''}"