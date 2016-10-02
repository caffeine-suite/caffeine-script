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

  parseAstToJs: (map) ->
    for source, expectedJs of map
      do (source, expectedJs) ->
        test "ast: " + source.replace(/\n/g, "\\n"), ->
          stn = Parser.parse(source).getStn()
          js = stn.toJs()
          log stn: stn, js:js, expectedJs: expectedJs if js != expectedJs
          assert.eq js, expectedJs

  parseTests: (map) ->
    for k, v of map
      do (k, v) ->
        test k.replace(/\n/g, "\\n"), -> assert.eq (p = Parser.parse(k)).toJs(), v#, formattedInspect p

  illegalSyntaxTests: (array) ->
    for source in array
      do (source) ->
        test "illegal: #{source.replace(/\n/g, "\\n")}", ->
          assert.throws -> Parse.parse source