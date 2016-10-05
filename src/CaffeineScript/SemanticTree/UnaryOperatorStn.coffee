Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class UnaryOperatorStn extends require './BaseStn'

  toJs: ->
    if @props.operand == "?"
      "#{@applyParens @children[0].toJsExpression()} != null"
    else
      "#{@normalizedOperand}#{@applyParens @children[0].toJsExpression()}"
