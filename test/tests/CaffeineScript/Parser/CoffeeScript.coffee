{parseTests} = require '../Helper'

module.exports = suite:
  demos: ->
    parseTests
      "number = 42":      "number = 42;"
      "number = -42":     "number = -42;"
      "opposite = true":  "opposite = true;"

      """
      if opposite
        number = -42
      """: "if (opposite) {number = -42;};"

      "number = -42 if opposite": "if (opposite) {number = -42};"

      "square = (x) -> x * x": "square = (function(x) {return x * x;});"

      "list = [1, 2, 3, 4, 5]": "list = [1, 2, 3, 4, 5];"

      """
      math =
        root:   Math.sqrt
        square: square
        cube:   (x) -> x * square x
      """: "math = {root: Math.sqrt, square: square, cube: (function(x) {return x * square(x);})};"

      # """
      # race = (winner, runners...) ->
      #   print winner, runners
      # """: ""

      'alert "I knew it!" if elvis?' : "if ((elvis != null)) {alert(\"I knew it!\")};"
      # "cubes = (math.cube num for num in list)" : ""

  functions: ->
    parseTests
      "square = (x) -> x * x": "square = (function(x) {return x * x;});"
      "cube   = (x) -> square(x) * x": "cube = (function(x) {return square(x) * x;});"