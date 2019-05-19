{CaffeineScriptParser} = Neptune.CaffeineScript

benchmarkParse = (source) ->
  benchmark source, -> CaffeineScriptParser.parse source

module.exports = suite: ->

  benchmarkParse "1 + 2"
  benchmarkParse "number = 42 if opposite"
  benchmarkParse "math =\n  root:   Math.sqrt\n  square: square\n  cube:   (x) -> x * square x"