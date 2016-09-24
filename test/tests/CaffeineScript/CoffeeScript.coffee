{parseTests} = require './Helper'

module.exports = suite:
  "same as CoffeeScript": ->
    parseTests
      "number = 42":      "number = 42;"
      "number = -42":     "number = -42;"
      "opposite = true":  "opposite = true;"

      """
      if opposite
        number = -42
      """: "if (opposite) {number = -42;};"

      "number = -42 if opposite": "if (opposite) {number = -42};"

      "square = (x) -> x * x": ""
# square = (x) -> x * x

# list = [1, 2, 3, 4, 5]

# math =
#   root:   Math.sqrt
#   square: square
#   cube:   (x) -> x * square x

# race = (winner, runners...) ->
#   print winner, runners

# alert "I knew it!" if elvis?
# cubes = (math.cube num for num in list)
