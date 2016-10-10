Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SwitchWhenStn extends require './BaseStn'

  toJs: ->
    {whenValue, thenDo} = @labeledChildren
    "case #{whenValue.toJsExpression()}: #{thenDo.toJs()};"
