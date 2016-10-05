{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

{BracketAccessorStn, ValueStn, DotAccessorStn, ThisStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    value: "simpleValue valueExtension*"
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
    unqualifiedIdentifier:
      pattern: "!reservedWord identifier assignmentExtension?"
      getStn: ->
        stn = @identifier.getStn()
        if @assignmentExtension
          @assignmentExtension.getStn stn
        else stn

  @rule
    this:         "/@/ !identifier"
  ,
    stnFactory: "ThisStn"

  @rule
    thisProperty: "/@/ identifier assignmentExtension?"
  ,
    getStn: ->
      stn = ThisStn @identifier.getStn()
      if @assignmentExtension
        @assignmentExtension.getStn stn
      else stn

  @rule
    dotAccessor:
      pattern: "dot_ identifier assignmentExtension?"
      getStn: (left) ->
        stn = DotAccessorStn left, @identifier.getStn()
        if @assignmentExtension
          @assignmentExtension.getStn stn
        else stn

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
