{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

module.exports =
  parseToAst: (map) ->
    for k, v of map
      do (k, v) ->
        test "ast: " + k.replace(/\n/g, "\\n"), ->
          p = Parser.parse(k)
          assert.eq p.getStn(), v

  parseAstToJs: astParseTest = (map) ->
    for source, expectedJs of map
      do (source, expectedJs) ->
        test "#{source} >> #{expectedJs}".replace(/\n/g, "\\n"), ->
          js = try
            stn = (p = Parser.parse(source)).getStn()
            transformedStn = stn.transform()
            transformedStn.toJs()
          catch error
            logPrettyError error
            null
          if js != expectedJs
            log
              semanticTree: stn
              transformedSemanticTree: transformedStn if transformedStn != stn
              js:js
              expectedJs: expectedJs
          throw error if error
          assert.eq js, expectedJs

  parseTests: astParseTest

  illegalSyntaxTests: (array) ->
    for source in array
      do (source) ->
        test "illegal: #{source.replace(/\n/g, "\\n")}", ->
          assert.throws -> Parse.parse source