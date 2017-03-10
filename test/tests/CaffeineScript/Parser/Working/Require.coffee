{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../../Helper'

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
    &ArtFoundation
    """:
      "
      let
      BabelBridge = require('babel-bridge'),
      ArtFoundation = require('art-foundation');
      BabelBridge;
      ArtFoundation;
      "

    "foo &BabelBridge": "let BabelBridge = require('babel-bridge'); foo(BabelBridge);"

  requireLocal:
    "&Lib": "let Lib = require('./Lib'); Lib;"
    "&Source": "let Source = require('../../source'); Source;"

    "-> &Lib": "(function() {let Lib = require('./Lib'); return Lib;});"

  regressions:
    """
    import &ArtFoundation
    &BabelBridge
    """: "let ArtFoundation = require('art-foundation'), BabelBridge = require('babel-bridge'); BabelBridge;"

