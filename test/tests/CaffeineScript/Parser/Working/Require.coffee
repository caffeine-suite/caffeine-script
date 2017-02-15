{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite

  require:
    "&BabelBridge": "let BabelBridge = require('babel-bridge'); BabelBridge;"

    """
    &BabelBridge
    ->
      &BabelBridge
    """: "let BabelBridge = require('babel-bridge'); BabelBridge; (function() {return BabelBridge;});"

    "foo &BabelBridge": "let BabelBridge = require('babel-bridge'); foo(BabelBridge);"
