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
      "&BabelBridge": "require('babel-bridge');"
      "&babelBridge": "require('babel-bridge');"

    pathed:
      "&ArtStandardLib/Types":  "require('art-standard-lib/Types');"

    asValue:
      "foo &BabelBridge":       "foo(require('babel-bridge'));"
      "&BabelBridge.Parser":    "require('babel-bridge').Parser;"

  local:
    basic:
      "&Lib":                   "require('./Lib');"
      "&Source":                "require('../../source');"

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
    &BabelBridge
    """: "require('babel-bridge');"

    """
    import &ArtStandardLib
    &BabelBridge
    foo
    """: "
      let foo;
      ({foo} = Caf.import([\"foo\"], [require('art-standard-lib'), global]));require('babel-bridge');
      foo;
      "

    "-> &Lib": "(function() {return require('./Lib');});"

    """
    &BabelBridge
    ->
      &BabelBridge
    """: "require('babel-bridge'); (function() {return require('babel-bridge');});"

    """
    &BabelBridge
    &ArtStandardLib
    """:
      "
      require('babel-bridge');
      require('art-standard-lib');
      "
