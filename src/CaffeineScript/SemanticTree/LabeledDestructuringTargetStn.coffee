Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class LabeledDestructuringTargetStn extends require './BaseStn'

  toJs: ->
    @childrenToJs ': '
