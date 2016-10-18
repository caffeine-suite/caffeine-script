Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject, inspect, isString} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

Rules = require './Rules'
SemanticTree = require "./SemanticTree"

CafParseNodeBaseClass = require './CafParseNodeBaseClass'

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
    @nodeBaseClass: CafParseNodeBaseClass

    for modName, mod of Rules.modules
      if isFunction mod
        mod.call @
      else
        @rule mod
