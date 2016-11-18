{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports = ->
  @rule
    value: "simpleValue valueExtension*"

  @rule
    valueExtension: w "dotAccessor bracketAccessor functionInvocation blockValueExtension"
    simpleValue: w "global this thisProperty literal super unqualifiedIdentifier parentheticalExpression"

  @rule
    parentheticalExpression: "'(' __? expression __? ')'"

  @rule
    unqualifiedIdentifier:
      pattern: "!reservedWord identifierReference assignmentExtension?"

  @rule
    identifierReference:
      pattern: "identifier"
      stnFactory: "ReferenceStn"

  @rule
    this:         "/@/ !identifier"
    thisProperty: "/@/ identifier assignmentExtension?"
  ,
    stnFactory: "ThisStn"

  @rule
    global:
      pattern: /global/
      stnFactory: "GlobalStn"

  @rule
    super: "/super/ superFunctionInvocation"
  ,
    stnFactory: "SuperStn"

  @rule
    super: "/super/"
  ,
    stnFactory: "SuperStn"
    stnProps: passArguments: true

  @rule superFunctionInvocation: a
    pattern: "openParen_ valueList? _closeParen"
    m pattern: "_? complexExpression"
    m pattern: "_? valueListBlock"

  @rule
    dotAccessor:
      pattern: "dot_ identifier assignmentExtension?"
      stnFactory: "DotAccessorStn"
      stnExtension: true

    bracketAccessor:
      pattern: "openBracket_ expression _closeBracket"
      stnFactory: "BracketAccessorStn"
      stnExtension: true

  @rule
    functionInvocation: a
      pattern:   "conditional:'?'? openParen_ valueList? _closeParen"
      m pattern: "conditional:'?'? _? complexExpression"
      m pattern: "conditional:'?'? _? valueListBlock"
  ,
    stnFactory: "FunctionInvocationStn"
    stnExtension: true

  @rule
    assignmentExtension: a
      pattern: "assignmentOperator:_assignmentOperator_ complexExpression"
      m pattern: "assignmentOperator:_assignmentOperator_ rValueBlock"
  ,
    stnFactory: "AssignmentStn"
    stnExtension: true
    stnProps: ->
      rawOp = @assignmentOperator.toString()
      operator: (match = rawOp.match /(\S*)=/) && match[1]

  @rule
    blockValueExtension: "_? blockValueExtensionBlock"
    blockValueExtensionBlock: Extensions.IndentBlocks.getPropsToSubparseBlock rule: "blockValueExtensionSubparse"
    blockValueExtensionSubparse: a

      pattern: "end? lineStartBinaryOperatorAndExpression newLineStatementExtension* end"
      m pattern: "end? &dot_ valueExtension+ binaryOperatorSequenceExtension? newLineStatementExtension* end"
