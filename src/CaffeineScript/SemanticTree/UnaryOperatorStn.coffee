Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class UnaryOperatorStn extends require './BaseStn'

  toJs: -> "#{@normalizedOperand}#{@children[0].toJsExpression()}"