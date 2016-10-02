Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ArrayStn extends require './BaseStn'

  toJs: ->  "[#{(c.toJs() for c in @children).join ', '}]"