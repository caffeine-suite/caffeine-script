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
        js = for match in compactFlatten @matches when match.toJs
          match.toJs returnJsStatement

        if js.length > 0
          js.join ''
        else
          @toString()

    @rule mod for modName, mod of Rules.modules
