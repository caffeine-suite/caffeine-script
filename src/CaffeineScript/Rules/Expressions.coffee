{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

  complexExpression: a
    pattern: "implicitArray"

    m
      pattern: "expression"

  expression: w "binOpExpression unaryOpExpression expressionWithoutBinOps"

  expressionWithoutBinOps: w "
    assign
    controlStatement
    classDefinition
    structuredLiteral
    value
    functionDefinition
    "

  structuredLiteral: w "object array"

  assign:
    pattern: "assignable assignmentExtension"
    toJs: -> @assignmentExtension.toJs @assignable.toJs()

  assignmentExtension: a
    pattern: "_equals_ complexExpression", toJs: (assignableJs) -> "#{assignableJs} = #{@complexExpression.toJs()}"
    m pattern: "_equals_ block",           toJs: (assignableJs) -> "#{assignableJs} = #{@block.toImplicitArrayOrValueJs()}"
