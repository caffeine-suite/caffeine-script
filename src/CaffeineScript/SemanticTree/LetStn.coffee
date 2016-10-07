Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class LetStn extends require './BaseStn'

  toJs: ->
    "let #{@props.identifier}"
