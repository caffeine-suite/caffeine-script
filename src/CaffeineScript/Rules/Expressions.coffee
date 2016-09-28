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
    value
    functionDefinition
    "


  structuredLiteral: w "array object"

  assign: a
    pattern: "assignable / *= */ complexExpression", toJs: -> "#{@assignable.toJs()} = #{@complexExpression.toJs()}"
    m pattern: "assignable / *= */ block", toJs: -> "#{@assignable.toJs()} = #{@block.toImplicitArrayOrValueJs()}"
