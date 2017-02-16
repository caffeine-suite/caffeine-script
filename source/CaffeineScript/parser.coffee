{log, defineModule, isFunction} = require 'art-foundation'
{Parser} = require 'babel-bridge'
Rules = require './Rules'
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
