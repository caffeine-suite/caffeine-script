Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject, inspect, isString} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

Rules = require './Rules'
SemanticTree = require "./SemanticTree"

###
Eventualy I want all AstNodes to respond to:

initially we should do:
  toJsExpression - no need for parens because it is either inside brackets already or the end of an expression.
  toStatement - no return-value needed; generate the nicest JS you can.

eventually we should also do:
  toJsExpressionInList - add parens if a following comma would confusing things
  toJsExpression(operatorBefore, operatorAfter) - add parens if needed to ensure operator precidence

###

{RootStn} = require './SemanticTree'

defineModule module, ->
  class CafParseNodeBaseClass extends Nodes.Node

    isImplicitArray: ->
      !!@getImplicitArray()

    getImplicitArray: ->
      for match in @matches when ret = match.getImplicitArray?()
        return ret
      false

    getMatchStns: ->
      v for m in @matches when v = m.getStn?()

    getStnFactory: ->
      throw new Error "stnFactory not found: #{inspect @stnFactory}" if isString(@stnFactory) && !SemanticTree[@stnFactory]
      SemanticTree[@stnFactory] || @stnFactory

    getStnChildren: (left) ->
      if @stnChildren
        if isFunction @stnChildren
          @stnChildren()
        else
          @stnChildren
      else
        for m in @nonStnExtensionMatches when v = m.getStn left
          v

    @getter
      isStnExtension: -> @stnExtension || @presentMatches[0]?.isStnExtension
      stnExtensionMatches: -> m for m in @presentMatches when m.getStn && m.isStnExtension
      nonStnExtensionMatches: -> m for m in @presentMatches when m.getStn && !m.isStnExtension

    getStn: (left) ->
      stn = if factory = @getStnFactory()
        factory
          parseTreeNode: @
          @stnProps?() || @stnProps
          left
          @getStnChildren()
      else
        x = @getStnChildren left

        if x.length == 1 then x[0] else if x.length == 0 then left else x

      for extension in @stnExtensionMatches
        stn = extension.getStn stn

      if stn?.props
        currentStnLabel = stn.props.label
        if !currentStnLabel || @label
          {label, ruleName, pluralLabel, pluralRuleName} = @
          stn.props.label = label || ruleName
          stn.props.pluralLabel = pluralLabel || pluralRuleName

      if @isRoot
        RootStn stn
      else
        stn

    getTransformedSemanticTree: ->
      @getStn().transform()

    toJs: -> @getTransformedSemanticTree().toJs()
