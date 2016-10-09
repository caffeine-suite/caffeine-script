{a, m, w, log} = require "art-foundation"
{Extensions} = require 'babel-bridge'
{matchBlock} = Extensions.IndentBlocks

upToButNotEol = /[^\n]*/y
module.exports = ->
  @rule
    controlStatement: a
      pattern: "ifUnlessWhileUntil _ expressionWithOneLessBlock block elseClause?"
      m
        pattern: "ifUnlessWhileUntil _ expression _ thenDo _ complexExpression elseClause?"
  ,
    stnFactory: "ControlOperatorStn"
    stnProps: ->
      operand: @ifUnlessWhileUntil.toString()
      joiner: @thenDo?.toString()

  @rule
    controlStatement: a
      pattern: "/try/ _ body:complexExpression _? optionalCatch:catchClause?"
      m pattern: "/try/ body:block"
  , stnFactory: "TryStn"

  @rule
    catchClause: "/catch(?=[ \n])/ _? identifier? body:block?"
  , stnFactory: "CatchStn"

  @rule
    controlStatement:
      pattern: "/do/ _ functionDefinition"
      stnFactory: "DoStn"

  @rule
    controlStatement:
      pattern: "/switch/ _ condition:expressionWithOneLessBlock switchBody"
      stnFactory: "SwitchStn"

    switchBody: "end switchWhenClause+ elseClause?"
    switchWhenClause:
      pattern: "/when/ _ whenValue:expression thenDo:thenClause"
      stnFactory: "SwitchWhenStn"

    thenClause: a
      pattern:    "_ /then/ _ complexExpression"
      # m pattern:  "block"

  @rule
    ifUnlessWhileUntil: /if|unless|while|until/
    thenDo: /then|do/

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
            rule:                 "complexExpression"
            originalOffset:       originalOffset
            originalMatchLength:  endOffset - originalOffset

    elseClause: a
      pattern: "_else block"
      m pattern: "_else _ complexExpression"
