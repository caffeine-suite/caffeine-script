{object} = require 'art-foundation'
module.exports = (require "art-foundation/configure_webpack")
  entries: "index"
  target: "node"
  externals: [
    # HRM - webpack's require isn't full-featured and RequireStn needs require's node-special features
    object [
      "colors"
      "detect-node"
      "bluebird/js/browser/bluebird.core"
      "coffee-script"
    ], (v) -> "require('#{v}')"
  ]
  dirname: __dirname
  package:
    description: "atomic data-types such as Color, Point, Rectangle and Matrix"
    dependencies:
      "art-foundation": "git://github.com/imikimi/art-foundation.git"
      "caffeine-mc":    "git@github.com:shanebdavis/caffeine-mc.git"
      "babel-bridge":   "git@github.com:shanebdavis/babel-bridge-js.git"
      "pretty-error":    "^2.0.1"
      "colors":          "^1.1.2"

    scripts:
      nn:       "nn -s"
      test:     "nn -s;mocha -u tdd --compilers coffee:coffee-script/register"
      perf:     "nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf"
