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
    classDefinition
    structuredLiteral
    value
    functionDefinition
    "

  structuredLiteral: w "array object"

  assign:
    pattern: "assignable assignmentExtension"
    toJs: -> @assignmentExtension.toJs @assignable.toJs()

  assignmentExtension: a
    pattern: "/ *= */ complexExpression", toJs: (assignableJs) -> "#{assignableJs} = #{@complexExpression.toJs()}"
    m pattern: "/ *= */ block",           toJs: (assignableJs) -> "#{assignableJs} = #{@block.toImplicitArrayOrValueJs()}"
