Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class DoStn extends require './BaseStn'

  toJs: ->
    {functionDefinition} = @labeledChildren
    "(#{functionDefinition.toJs()})(#{functionDefinition.argumentNames.join ', '})"
