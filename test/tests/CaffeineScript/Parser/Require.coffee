{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite {
  sourceFiles:["source/CaffeineScript/foo"]
  # sourceRoot: "."
  },

  npm:
    basic:
      "&CaffeineEight":   "require('caffeine-eight');"
      "&caffeineEight":   "require('caffeine-eight');"
      "&caffeine_eight":  "require('caffeine-eight');"
      "&caffeine-eight":  "require('caffeine-eight');"

    pathed:
      "&ArtStandardLib/Types":  "require('art-standard-lib/Types');"

    asValue:
      "foo &CaffeineEight":       "foo(require('caffeine-eight'));"
      "&CaffeineEight.Parser":    "require('caffeine-eight').Parser;"

  local:
    basic:
      "&Lib":                   "require('./Lib');"
      "&Source":                "require('../');"

    reservedWords:
      "&package":               "require('../../package');"

    pathed:
      "&Perf/Perfs":            "require('../../perf/Perfs');"

    asValue:
      "foo &Perf/Perfs":        "foo(require('../../perf/Perfs'));"
      "&Perf/Perfs.foo":        "require('../../perf/Perfs').foo;"

  regressions:
    """
    import &ArtStandardLib
    &CaffeineEight
    """: "(() => {return require('caffeine-eight');})();"

    """
    import &ArtStandardLib
    &CaffeineEight
    foo
    """: "
      Caf.importInvoke([\"foo\"], [global, require('art-standard-lib')],
      (foo) => {require('caffeine-eight'); return foo;});
      "

    """
    &CaffeineEight
    ->
      &CaffeineEight
    """: "require('caffeine-eight'); (function() {return require('caffeine-eight');});"

    """
    &CaffeineEight
    &ArtStandardLib
    """:
      "
      require('caffeine-eight');
      require('art-standard-lib');
      "
