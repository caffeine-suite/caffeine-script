{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{ArrayStn, BinaryOperatorStn} = require "../SemanticTree"
module.exports = ->
  @rule

    complexExpression: a
      pattern: "implicitArray"

      m
        pattern: "expression"

    expression: w "binOpExpression unaryOpExpression expressionWithoutBinOps"

    expressionWithoutBinOps: w "
      controlStatement
      comprehension
      classDefinition
      destructuringAssignment
      structuredLiteral
      newInstance
      functionDefinition
      value
      "

    structuredLiteral: w "object array"

  @rule
    newInstance: "/new/ _ expressionWithoutBinOps"
  ,
    stnFactory: "NewInstanceStn"

  @rule
    rValueBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "rValueBlockSubParse"
    rValueBlockSubParse:
      pattern: "statement*"
      getStn: ->
        if @statements.length == 1
          @statements[0].getStn()
        else
          ArrayStn @getMatchStns()
