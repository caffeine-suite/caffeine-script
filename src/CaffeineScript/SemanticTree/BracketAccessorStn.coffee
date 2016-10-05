Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class BracketAccessorStn extends require './BaseStn'

  constructor: (props, [@value, @expression]) ->
    super

  toJs: -> "#{@value.toJsExpression()}[#{@expression.toJsExpression()}]"