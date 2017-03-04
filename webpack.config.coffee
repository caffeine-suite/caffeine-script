{object} = require 'art-foundation'
module.exports = (require "art-foundation/configure_webpack")
  entries: "caffeine-script"
  target: "node"
  output: libraryTarget: "commonjs2"
  externals: [
    "colors"
    "detect-node"
    "bluebird/js/browser/bluebird.core"
    "coffee-script"
  ]
  dirname: __dirname
  package:
    description: "
      CaffeineScript makes programming more wonderful, code more beautiful and programmers more
      productive. It is a lean, high-level language that compiles to JavaScript."

    dependencies:
      "art-foundation":           "git://github.com/imikimi/art-foundation.git"
      "caffeine-mc":              "git@github.com:shanebdavis/caffeine-mc.git"
      "babel-bridge":             "git@github.com:shanebdavis/babel-bridge-js.git"
      "caffeine-script-runtime":  "git@github.com:shanebdavis/caffeine-script-runtime.git"
      "pretty-error":             "^2.0.1"
      "colors":                   "^1.1.2"

    scripts:
      nn:       "nn -s"
      test:     "nn -s;mocha -u tdd --compilers coffee:coffee-script/register"
      perf:     "nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf"
