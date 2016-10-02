{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseAstToJs} = require './Helper'

module.exports = suite:
  literals:
    numbers: ->
      parseAstToJs
        "1":      "1"

    strings: ->
      parseAstToJs
        "'abc'":  '"abc"'
        '"" abc': '"abc"'

    interpolatedStrings: ->
      parseAstToJs
        '"a#{1}"': '`a${1}`'
        '"#{1}a"': '`${1}a`'
        '"#{1}#{2}"': '`${1}${2}`'
        '"#{1}#{"hi"}"': '`${1}hi`' # isn't that awesome! It's just a string!

    arrays: ->
      parseAstToJs
        "[1]":          "[1]"
        "[1, 2]":       "[1, 2]"
        "[1, 2,]":      "[1, 2]"
        "1 2":          "[1, 2]"
        "1, 2,":        "[1, 2]"
        "[]\n 1\n 2":   "[1, 2]"
        """
        1 2 3,
        4 5 6
        """: "[1, 2, 3, 4, 5, 6]"

        """
        []
          1 2 3,
          4 5 6
        """: "[1, 2, 3, 4, 5, 6]"
