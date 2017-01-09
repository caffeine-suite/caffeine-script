{CaffeineScript} = Neptune
{log, formattedInspect, isPlainObject, object, stringCount, isString} = Neptune.Art.Foundation
{Parser} = CaffeineScript
require "colors"

module.exports =
  parseToAst: (map) ->
    for k, v of map
      do (k, v) ->
        test "ast: " + k.replace(/\n/g, "\\n"), ->
          p = Parser.parse k, verbose: true
          assert.eq p.getStn(), v

  parseTests: parseTests = (a, b) ->
    map = if b
      {compileModule} = a
      b
    else
      a

    object map, (source, expectedJs) ->
      test name = "#{source} >> #{expectedJs}".replace(/\n/g, "\\n"), ->
        js = try
          stn = (p = Parser.parse(source, verbose: true)).getStn()
          transformedStn = stn.transform()
          if compileModule
            transformedStn.toJsModule()
          else
            transformedStn.toJs()
        catch error
          logPrettyError error
          null

        if js != expectedJs
          log "\nFAIL: #{name}".red
          log info:
            js:js
            expectedJs: expectedJs
            parseTree: p
            semanticTree: stn
            transformedSemanticTree: if transformedStn != stn then transformedStn else "no change"
          log "\n"
        throw error if error
        assert.eq js, expectedJs

  parseTestSuite: parseTestSuite = (a, b) ->
    map = if b
      options = a
      b
    else
      options = {}
      a

    hasStrings = hasOther = false
    for k, v of map
      if isString v
        hasStrings = true
      else
        hasOther = true

    throw new Error "either strings or others!" if hasStrings && hasOther
    if hasStrings
      -> parseTests options, map
    else
      object map, (v) -> parseTestSuite options, v


  illegalSyntaxTests: (array) ->
    for source in array
      do (source) ->
        test "illegal: #{source.replace(/\n/g, "\\n")}", ->
          assert.throws -> Parse.parse source, verbose: true