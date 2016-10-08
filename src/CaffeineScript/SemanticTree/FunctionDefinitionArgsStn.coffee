Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

FunctionDefinitionArgsStn = require './FunctionDefinitionArgsStn'

defineModule module, class FunctionDefinitionArgsStn extends require './BaseStn'

  @getter
    argumentNames: ->
      c.argumentName for c in @children || []

  toJs: ->
    "(#{(c.toJs() for c in @children).join(', ')})"
