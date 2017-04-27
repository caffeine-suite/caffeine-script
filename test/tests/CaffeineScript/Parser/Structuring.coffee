{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite
  ObjectLiterals:
    bracketed:
      "{a}":    "({a});"
      "{a, b}": "({a, b});"

    toEol:
      "{} a":    "({a});"
      "{} a, b": "({a, b});"

    block:
      "{}\n a":     "({a});"
      "{}\n a, b":  "({a, b});"
      "{}\n a\n b": "({a, b});"

    smart:
      "{a: a}":     "({a});"
      "{} a: a":    "({a});"
      "{}\n a: a":  "({a});"
