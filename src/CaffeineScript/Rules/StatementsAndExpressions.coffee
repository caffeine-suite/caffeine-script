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

  blocks: 'block+'
  block: Extensions.IndentBlocks.ruleProps

  complexExpression: a
    pattern: "implicitArray"
    isImplicitArray: -> true

    m
      pattern: "expression"
      isImplicitArray: -> false

  expression: w "binOpExpression unaryOpExpression expressionWithoutBinOps"

  expressionWithoutBinOps: w "
    assign
    controlStatement
    structuredLiteral
    invocation
    value
    functionDefinition
    "

  assign: a
    pattern: "assignable / *= */ complexExpression", toJs: -> "#{@assignable.toJs()} = #{@complexExpression.toJs()}"
    m pattern: "assignable / *= */ block", toJs: -> "#{@assignable.toJs()} = #{@block.toImplicitArrayOrValueJs()}"

  invocation: a
    pattern: "value _ arguments", toJs: -> "#{@value.toJs()}(#{@arguments.toJs()})"
    m pattern: "value openParen_ arguments? _closeParen", toJs: -> "#{@value.toJs()}(#{@arguments?.toJs()|| ""})"

  arguments:
    pattern: "expression _commaExpression*"
    toJs: ->
      args = for arg in a = compactFlatten [@expression, @_commaExpressions]
        arg.toJs()

      args.join ', '

  _commaExpression:
    pattern: "_comma_ expression"
    toJs: -> @expression.toJs()

  value: w "existanceTest literal assignable"

  functionDefinition: a
    pattern: "argDefinition? _arrow_ complexExpression"
    toJs: -> "(function(#{@argDefinition?.toJs() || ""}) {return #{@complexExpression.toJs()};})"
    m
      pattern: "argDefinition? _arrow_ block"
      toJs: -> "(function() {#{@block.toFunctionBodyJs()}})"

  argDefinition:
    pattern: "openParen_ argList? _closeParen"
    toJs: -> @argList.toString()

  argList: a
    pattern: "identifier _comma_ argList", toJs: -> "#{@identifier.toJs()}, #{@argList.toJs()}"
    m pattern: "identifier _ argList", toJs: -> "#{@identifier.toJs()}, #{@argList.toJs()}"
    m pattern: "identifier", toJs: -> @identifier.toJs()

  assignable:
    pattern: "simpleAssignable accessor*"
    toJs: -> "#{@simpleAssignable.toJs()}#{(a.toJs() for a in @accessors || []).join ''}"

  simpleAssignable: "!reservedWord identifier"

  accessor: a
    pattern: "'.' simpleAssignable",                  toJs: -> ".#{@simpleAssignable.toJs()}"
    m pattern: "openBracket_ expression _closeBracket", toJs: -> "[#{@expression.toJs()}]"
