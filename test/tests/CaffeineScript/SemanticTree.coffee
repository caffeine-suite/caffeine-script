{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseAstToJs} = require './Helper'

module.exports = suite:
  literals:
    Numbers: ->
      parseAstToJs
        "1":      "1;"

    Strings: ->
      parseAstToJs
        "'abc'":  '"abc";'
        '"" abc': '"abc";'

    InterpolatedStrings: ->
      parseAstToJs
        '"a#{1}"': '`a${1}`;'
        '"#{1}a"': '`${1}a`;'
        '"#{1}#{2}"': '`${1}${2}`;'
        '"#{1}#{"hi"}"': '`${1}hi`;' # isn't that awesome! It's just a string!

    Arrays: ->
      parseAstToJs
        # "[1]":          "[1];"
        # "[1, 2]":       "[1, 2];"
        # "[1, 2,]":      "[1, 2];"
        # "1 2":          "[1, 2];"
        # "1, 2,":        "[1, 2];"
        # "[]\n 1\n 2":   "[1, 2];"
        # """
        # 1 2 3,
        # 4 5 6
        # """: "[1, 2, 3, 4, 5, 6];"

        """
        []
          1 2 3,
          4 5 6
        """: "[1, 2, 3, 4, 5, 6];"

        """
        []
          1 2 3
          4 5 6
        """: "[[1, 2, 3], [4, 5, 6]];"

    Objects: ->
      parseAstToJs
        "{a:1}":        "({a: 1});"
        "{a:1, b:2}":   "({a: 1, b: 2});"
        "{[1]:1, b:2}": "({[1]: 1, b: 2});"
        "a: 1":         "({a: 1});"
        "{} a: 1":      "({a: 1});"
        "{}\n a: 1":    "({a: 1});"

        # this almost works, disabling so it doesn't distract right now
        """
        a: 1
        a: 2
        """:         "[{a: 1}, {a: 2}];"