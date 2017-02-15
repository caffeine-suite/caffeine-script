{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{ArrayStn, BinaryOperatorStn} = require "../SemanticTree"
{matchBlock} = Extensions.IndentBlocks

upToButNotEol = /[^\n]*/y

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
      throwExpression
      newInstance
      functionDefinition
      value
      "

    structuredLiteral: w "object array"

  @rule
    newInstance: "new _ expressionWithoutBinOps"
  ,
    stnFactory: "NewInstanceStn"

  @rule
    throwExpression: "throw _ expressionWithoutBinOps"
  ,
    stnFactory: "ThrowStn"

  @rule
    expressionWithOneLessBlock:
      parse: (parentNode) ->
        {nextOffset:offset, source} = parentNode
        originalOffset = offset
        upToButNotEol.lastIndex = offset
        if match = upToButNotEol.exec source
          [m] = match
          endOffset = offset += m.length

          while (match = matchBlock source, offset)
            endOffset = offset
            {matchLength} = match
            offset += matchLength

          expressionSource = source.slice originalOffset, endOffset
          parentNode.subparse expressionSource,
            allowPartialMatch:    true
            rule:                 "complexExpression"
            originalOffset:       originalOffset
            originalMatchLength:  endOffset - originalOffset

    rValueBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "rValueBlockSubParse"
    rValueBlockSubParse:
      pattern: "statement*"
      getStn: ->
        if @statements.length == 1
          @statements[0].getStn()
        else
          ArrayStn @getMatchStns()
