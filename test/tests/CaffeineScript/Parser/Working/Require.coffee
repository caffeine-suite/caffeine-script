{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite

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
