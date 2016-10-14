Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SwitchStn extends require './BaseStn'

  toJs: ->
    {condition, switchWhens, switchElse} = @labeledChildren
    falsifyCases = !condition
    options = falsifyCases: falsifyCases
    cases = (clause.toJs options for clause in switchWhens || [])
    cases.push "default: #{switchElse.toJs()}" if switchElse
    "switch (#{@getConditionJs()}) {#{cases.join ' break; '}}"

  toJsExpression: ->
    {condition, switchWhens, switchElse} = @labeledChildren
    falsifyCases = !condition
    options = falsifyCases: falsifyCases
    cases = (clause.toFunctionBodyJs options for clause in switchWhens || [])
    cases.push "default: #{switchElse.toFunctionBodyJs()}" if switchElse
    "(function() {switch (#{@getConditionJs()}) {#{cases.join ' '}};})()"

  getConditionJs: ->
    {condition} = @labeledChildren
    if condition
      condition.toJsExpression()
    else
      "false"