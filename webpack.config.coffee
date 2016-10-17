module.exports = (require "art-foundation/configure_webpack")
  entries: "index test"
  dirname: __dirname
  package:
    description: "atomic data-types such as Color, Point, Rectangle and Matrix"
    dependencies: [
      "art-foundation": "git://github.com/imikimi/art-foundation.git"
      "caffeine-mc":    "git@github.com:shanebdavis/caffeine-mc.git"
      "babel-bridge":   "git@github.com:shanebdavis/babel-bridge-js.git"
      "pretty-error":    "^2.0.1"
      "colors":          "^1.1.2"
    ]
    scripts:
      nn:       "neptune-namespaces --std"
      test:     "neptune-namespaces --std;mocha -u tdd --compilers coffee:coffee-script/register"
      perf:     "neptune-namespaces --std;mocha -u tdd --compilers coffee:coffee-script/register perf"
