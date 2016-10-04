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

defineModule module, ->

  class CaffeineScriptParser extends Parser
    @nodeBaseClass: class CafScriptNode extends Nodes.Node

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

      getStnChildren: ->
        if @stnChildren
          if isFunction @stnChildren
            @stnChildren()
          else
            @stnChildren
        else
          v for m in @matches when v = m.getStn?()

      getStn: ->
        if factory = @getStnFactory()
          return factory
            parseTreeNode: @
            @stnProps?() || @stnProps
            @getStnChildren()

        x = @getStnChildren()

        if x.length == 1 then x[0] else if x.length == 0 then null else x

      toJs: (returnJsStatement)->
        js = for match in compactFlatten @matches when match.toJs
          match.toJs returnJsStatement

        if js.length > 0
          js.join ''
        else
          @toString()

    for modName, mod of Rules.modules
      if isFunction mod
        mod.call @
      else
        @rule mod
