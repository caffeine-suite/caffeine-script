{CaffeineScript} = Neptune
{log, formattedInspect, isPlainObject, newObjectFromEach, stringCount, isString} = Neptune.Art.Foundation
{Parser} = CaffeineScript
require "colors"

module.exports =
  parseToAst: (map) ->
    for k, v of map
      do (k, v) ->
        test "ast: " + k.replace(/\n/g, "\\n"), ->
          p = Parser.parse(k)
          assert.eq p.getStn(), v



  parseTests: parseTests = (map) ->
    newObjectFromEach map, (source, expectedJs) ->
      test name = "#{source} >> #{expectedJs}".replace(/\n/g, "\\n"), ->
        js = try
          stn = (p = Parser.parse(source)).getStn()
          transformedStn = stn.transform()
          transformedStn.toJs()
        catch error
          logPrettyError error
          null

        if js != expectedJs
          log "\nFAIL: #{name}".red
          log info:
            js:js
            expectedJs: expectedJs
            semanticTree: stn
            transformedSemanticTree: transformedStn if transformedStn != stn
          log "\n"
        throw error if error
        assert.eq js, expectedJs

  parseTestSuite: parseTestSuite = (map) ->
    hasStrings = hasOther = false
    for k, v of map
      if isString v
        hasStrings = true
      else
        hasOther = true

    throw new Error "either strings or others!" if hasStrings && hasOther
    if hasStrings
      -> parseTests map
    else
      newObjectFromEach map, (v) -> parseTestSuite v


  illegalSyntaxTests: (array) ->
    for source in array
      do (source) ->
        test "illegal: #{source.replace(/\n/g, "\\n")}", ->
          assert.throws -> Parse.parse source