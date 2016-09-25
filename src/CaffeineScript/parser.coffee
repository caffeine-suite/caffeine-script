Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, a, w, m, defineModule, compactFlatten, present} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

Rules = require './Rules'

defineModule module, ->

  class CaffeineScriptParser extends Parser
    @nodeBaseClass: class CafScriptNode extends Nodes.Node

      isImplicitArray: ->
        for match in @matches when match.isImplicitArray
          return match.isImplicitArray()
        false

      toJs: (returnJsStatement)->
        for match in @matches when match.toJs
          return match.toJs returnJsStatement

        @toString()

    @rule mod for modName, mod of Rules.modules
