{compile} = Neptune.CaffeineScript

benchmarkCompile = (source) ->
  benchmark source, -> compile source

module.exports = suite: ->

  benchmarkCompile "1 + 2"
  benchmarkCompile "number = 42 if opposite"
  benchmarkCompile "math =\n  root:   Math.sqrt\n  square: square\n  cube:   (x) -> x * square x"