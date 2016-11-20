{a, m, w, log} = require "art-foundation"
{Extensions} = require 'babel-bridge'

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
    controlStatement: a
      pattern: "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock"
      m pattern: "/switch/ _ condition:expression? switchBody"
      m pattern: "/switch/ switchBodyBlock"
      m pattern: "/switch/ switchBody"
  , stnFactory: "SwitchStn"

  @rule
    switchBody: "switchWhen:switchWhenClause+ switchElse:elseClause?"
    thenClause: "_ /then/ _ lineOfStatements"

    switchBodyBlock:  Extensions.IndentBlocks.getPropsToSubparseBlock rule: "switchBody"

  @rule
    switchWhenClause: a
      pattern: "end? when _ whenValue:expressionWithOneLessBlock thenDo:block"
      m pattern: "end? when _ whenValue:complexExpression thenDo:thenClause"
  ,
    stnFactory: "SwitchWhenStn"

  @rule
    ifUnlessWhileUntil: /if|unless|while|until/
    thenDo: /then|do/
    when: /when/

    elseClause: a
      pattern: "_else block"
      m pattern: "_else _ complexExpression"
