{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite {
  sourceFiles:["source/CaffeineScript/foo"]
  # sourceRoot: "."
  },

  require:
    "&BabelBridge": "let BabelBridge = require('babel-bridge'); BabelBridge;"
    "&babelBridge": "let babelBridge = require('babel-bridge'); babelBridge;"

    """
    &BabelBridge
    ->
      &BabelBridge
    """: "let BabelBridge = require('babel-bridge'); BabelBridge; (function() {return BabelBridge;});"

    """
    &BabelBridge
    &ArtStandardLib
    """:
      "
      let
      BabelBridge = require('babel-bridge'),
      ArtStandardLib = require('art-standard-lib');
      BabelBridge;
      ArtStandardLib;
      "

    "&ArtStandardLib/Types":  "let Types = require('art-standard-lib/Types'); Types;"
    "&Perf/Perfs":            "let Perfs = require('../../perf/Perfs'); Perfs;"
    "&Perf/Perfs.foo":        "let Perfs = require('../../perf/Perfs'); Perfs.foo;"
    "foo &BabelBridge":       "let BabelBridge = require('babel-bridge'); foo(BabelBridge);"

  requireLocal:
    "&Lib": "let Lib = require('./Lib'); Lib;"
    "&Source": "let Source = require('../../source'); Source;"

    "-> &Lib": "(function() {let Lib = require('./Lib'); return Lib;});"

  regressions:
    """
    import &ArtStandardLib
    &BabelBridge
    """: "let ArtStandardLib = require('art-standard-lib'), BabelBridge = require('babel-bridge'); BabelBridge;"

