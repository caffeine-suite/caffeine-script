Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SwitchWhenStn extends require './BaseStn'

  toJs: (options)->
    {thenDo} = @labeledChildren
    "#{@getCasesJs(options)}: #{thenDo.toJs()};"

  getCasesJs: ({falsifyCases})->
    {whenValue} = @labeledChildren
    cases = if whenValue.implicitArray
      m.toJsExpression() for m in whenValue.children
    else
      [whenValue.toJsExpression()]

    if falsifyCases
      "case !(#{cases.join '): case !('})"
    else
      "case #{cases.join ': case '}"


  toFunctionBodyJs: (options)->
    {thenDo} = @labeledChildren
    "#{@getCasesJs(options)}: #{thenDo.toFunctionBodyJs()};"
