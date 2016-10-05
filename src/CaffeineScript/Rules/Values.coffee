{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

{BracketAccessorStn, ValueStn, DotAccessorStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    value: "simpleValue valueExtension* assignmentExtension?"
  ,
    getStn: ->
      [left, rest...] = @matches
      stn = left.getStn()
      for r in rest when r.getStn
        stn = r.getStn stn
      stn

  @rule
    valueExtension: w "dotAccessor bracketAccessor functionInvocation"
    simpleValue: w "this thisProperty literal unqualifiedIdentifier"

  @rule
    unqualifiedIdentifier: "!reservedWord identifier"

  @rule
    this:         "/@/ !identifier"
    thisProperty: "/@/ identifier"
  ,
    stnFactory: "ThisStn"

  @rule
    dotAccessor:
      pattern: "dot_ identifier"
      stnFactory: "DotAccessorStn"

    bracketAccessor:
      pattern: "openBracket_ expression _closeBracket"
      stnFactory: "BracketAccessorStn"

  @rule
    functionInvocation: a
      pattern: "openParen_ valueList? _closeParen"
      m pattern: "_? complexExpression"
      m pattern: "commentOrSpace* valueListBlock"
  ,
    stnFactory: "FunctionInvocationStn"

  @rule
    assignmentExtension: a
      pattern: "_assignmentOperator_ complexExpression"
      m pattern: "_assignmentOperator_ rValueBlock"
  ,
    stnFactory: "AssignmentStn"
