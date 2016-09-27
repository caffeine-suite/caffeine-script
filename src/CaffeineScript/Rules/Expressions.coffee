{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

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
    functionInvocation
    value
    functionDefinition
    "

  assign: a
    pattern: "assignable / *= */ complexExpression", toJs: -> "#{@assignable.toJs()} = #{@complexExpression.toJs()}"
    m pattern: "assignable / *= */ block", toJs: -> "#{@assignable.toJs()} = #{@block.toImplicitArrayOrValueJs()}"

  value: w "existanceTest literal this assignable"

  assignable:
    pattern: "simpleAssignable accessor*"
    toJs: -> "#{@simpleAssignable.toJs()}#{(a.toJs() for a in @accessors || []).join ''}"

  this:
    pattern: "/@/ !identifier"
    toJs: -> "this"

  thisProperty:
    pattern: "/@/ identifier"
    toJs: -> "this.#{@identifier}"

  simpleAssignable: a
    pattern: "!reservedWord identifier"
    m pattern: "thisProperty"

  accessor: a
    pattern: "'.' simpleAssignable",                  toJs: -> ".#{@simpleAssignable.toJs()}"
    m pattern: "openBracket_ expression _closeBracket", toJs: -> "[#{@expression.toJs()}]"
