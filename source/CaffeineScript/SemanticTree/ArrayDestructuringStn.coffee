Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ArrayDestructuringStn extends require './BaseStn'

  toJs: ->
    "[#{@childrenToJs ', '}]"