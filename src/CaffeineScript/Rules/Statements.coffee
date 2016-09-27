{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

  statementOrBlankLine: a "statement", /\n/

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
