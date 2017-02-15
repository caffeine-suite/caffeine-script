Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class NewInstanceStn extends require './BaseStn'

  toJs: ->  "throw #{@childrenToJs()}"