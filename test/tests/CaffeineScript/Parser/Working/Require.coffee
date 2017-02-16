{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite {
  sourceFiles:["source/CaffeineScript/foo"]
  sourceRoot: "."
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
    "&Lib": "let Lib = require('./Lib.coffee'); Lib;"
    "&Source": "let Source = require('../../source'); Source;"

    "-> &Lib": "(function() {let Lib = require('./Lib.coffee'); return Lib;});"

  regressions:
    """
    import &Foo
    &Bar
    """: "let Foo = require('foo'), Bar = require('bar'); return Bar;"

