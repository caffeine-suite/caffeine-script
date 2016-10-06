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
      classDefinition
      structuredLiteral
      value
      functionDefinition
      "

    # valueWithIndentedBinOp:
    #   pattern: "value lineCommentOrBlankLine* newLineBinOpBlock"
    #   getStn: ->
    #     @newLineBinOpBlock.getStn @value.getStn()

    structuredLiteral: w "object array"

  @rule

    rValueBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "rValueBlockSubParse"
    rValueBlockSubParse:
      pattern: "statement*"
      getStn: ->
        if @statements.length == 1
          @statements[0].getStn()
        else
          ArrayStn @getMatchStns()
