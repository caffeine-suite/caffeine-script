Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ObjectPropValueStn extends require './BaseStn'

  toJs: ->
    [prop, value] = @children
    "#{prop.toJs()}: #{value.toJsExpression()}"

