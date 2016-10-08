{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports = ->
  @rule
    value: "simpleValue valueExtension*"

  @rule
    valueExtension: w "dotAccessor bracketAccessor functionInvocation blockValueExtension"
    simpleValue: w "global this thisProperty literal super unqualifiedIdentifier"

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
      pattern: "openParen_ valueList? _closeParen"
      m pattern: "_? complexExpression"
      m pattern: "_? valueListBlock"
  ,
    stnFactory: "FunctionInvocationStn"
    stnExtension: true

  @rule
    assignmentExtension: a
      pattern: "_assignmentOperator_ complexExpression"
      m pattern: "_assignmentOperator_ rValueBlock"
  ,
    stnFactory: "AssignmentStn"
    stnExtension: true

  @rule
    blockValueExtension: "_? blockValueExtensionBlock"
    blockValueExtensionBlock: Extensions.IndentBlocks.getPropsToSubparseBlock rule: "blockValueExtensionSubparse"
    blockValueExtensionSubparse: a

      pattern: "end? lineStartBinaryOperatorAndExpression newLineStatementExtension* end"
      m pattern: "end? &dot_ valueExtension+ binaryOperatorSequenceExtension? newLineStatementExtension* end"
