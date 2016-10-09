Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SwitchStn extends require './BaseStn'

  toJs: ->
    {condition, switchWhenClauses} = @labeledChildren
    "switch (#{condition.toJsExpression()}) {#{(clause.toJs() for clause in switchWhenClauses || [])}}"
