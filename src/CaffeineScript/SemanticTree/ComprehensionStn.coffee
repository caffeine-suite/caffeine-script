Foundation = require 'art-foundation'

{peek, log, formattedInspect, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ComprehensionStn extends require './BaseStn'

  toJs: ->
    {
      outputType
      iterationType
      variableDefinition
      body
      iterable
      whenClause
    } = @labeledChildren
    outputType = outputType?.props.token
    if iterationType = iterationType?.props.token.match /object|array|iter/
      [iterationType] = iterationType

    func = switch outputType
      when "object" then "o"
      when "map" then "m"
      when "each" then "e"
      else "a"

    varDefString = if variableDefinition
      variableDefinition.toJs()
    else
      "v"

    withFunctionStr = if body
      "(#{varDefString}) =>
      {#{body.toFunctionBodyJs()};}"

    whenFunctionString = if whenClause
      "(#{varDefString}) =>
      {#{whenClause.toFunctionBodyJs()};}"

    switch iterationType
      when "array" then func+="FromA"
      when "object" then func+="FromO"
      when "iter" then func+="FromI"

    params = [
      iterable.toJsExpression()
      withFunctionStr
      whenFunctionString
    ]
    params.pop() while (!peek params)
    params = for p in params
      p || "null"

    "Caf.#{func}(#{params.join ', '})"
