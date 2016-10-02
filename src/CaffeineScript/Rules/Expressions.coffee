{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{ArrayStn} = require "../SemanticTree"
module.exports = ->
  @rule

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
      stnFactory: "AssignmentStn"

    assignmentExtension: a
      pattern: "_equals_ complexExpression",    toJs: (assignableJs) -> "#{assignableJs} = #{@complexExpression.toJs()}"
      m pattern: "_equals_ rValueBlock",  toJs: (assignableJs) -> "#{assignableJs} = #{@rValueBlock.toImplicitArrayOrValueJs()}"

  @rule
    rValueBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "rValueBlockSubParse"
    rValueBlockSubParse:
      pattern: "statement*"
      getStn: ->
        if @statements.length == 1
          @statements[0].getStn()
        else
          ArrayStn @getMatchStns()
