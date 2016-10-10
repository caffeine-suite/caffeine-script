Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SwitchStn extends require './BaseStn'

  toJs: ->
    {condition, switchWhens, switchElse} = @labeledChildren
    cases = (clause.toJs() for clause in switchWhens || [])
    cases.push "default: #{switchElse.toJs()}" if switchElse
    "switch (#{condition.toJsExpression()}) {#{cases.join ' break; '}}"
