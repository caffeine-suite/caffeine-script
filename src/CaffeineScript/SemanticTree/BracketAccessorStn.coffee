Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class BracketAccessorStn extends require './BaseStn'

  toJs: -> "[#{@children[0].toJsExpression()}]"