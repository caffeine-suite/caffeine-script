Foundation = require 'art-foundation'

{log, formattedInspect, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ComprehensionStn extends require './BaseStn'

  toJs: ->
    {
      outputType
      iterationType
      variableDefinition
      body
      iterable
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

    bodyStr = if body
      body.toFunctionBodyJs()
    else
      "return #{varDefString}"

    switch iterationType
      when "array" then func+="FromA"
      when "object" then func+="FromO"
      when "iter" then func+="FromI"
    "
    Caf.#{func}(#{iterable.toJsExpression()},
      (#{varDefString}) =>
      {#{bodyStr};})
    "
