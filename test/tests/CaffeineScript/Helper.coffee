{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

module.exports =
  parseTests: (map) ->
    for k, v of map
      do (k, v) ->
        test k.replace(/\n/g, "\\n"), -> assert.eq (p = Parser.parse(k)).toJs(), v#, formattedInspect p
