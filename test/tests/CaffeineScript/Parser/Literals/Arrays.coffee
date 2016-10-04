{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:
  basic: ->
    parseTests
      "[]"      : "[];"
      "[1]"     : "[1];"
      "[1, 2]"  : "[1, 2];"
      "[1 2]"   : "[1, 2];"
      """
      [1, 2,
      3, 4]
      """: "[1, 2, 3, 4];"
      """
      [
        1, 2,
        3, 4
      ]
      """: "[1, 2, 3, 4];"

      """
      [
      1, 2,
      3, 4
      ]
      """: "[1, 2, 3, 4];"

      """
      [1, 2, 3, 4,]
      """: "[1, 2, 3, 4];"

  implicit:
    basic: ->
      parseTests
        "1, 2"      : "[1, 2];"
        "1 2"       : "[1, 2];"
        "1 + 2, 3"  : "[(1 + 2), 3];"

    mixed: ->
      parseTests
        "1 2 if bar": "if (bar) {[1, 2]};"

  matchless: ->
    parseTests
      "[] 1"    : "[1];"
      "[] 1, 2" : "[1, 2];"
      "[] 1 2"  : "[1, 2];"

  longArrays: ->
    parseTests
      """
      1 2 3,
      4 5 6
      """: "[1, 2, 3, 4, 5, 6];"

    parseTests
      """
      []
        1 2 3,
        4 5 6
      """: "[1, 2, 3, 4, 5, 6];"

    parseTests
      """
      []
        1 2 3
        4 5 6
      """: "[[1, 2, 3], [4, 5, 6]];"

    parseTests
      """
      1 2 3,
      4 5 6,
      """: "[1, 2, 3, 4, 5, 6];"

    parseTests
      """
      1, 2, 3,
      4, 5, 6,
      """: "[1, 2, 3, 4, 5, 6];"

  block: ->
    parseTests
      """
      []
        1
      """: "[1];"

      """
      []
        1
        2
      """: "[1, 2];"

      """
      [] # this is a block array
        1
        2
      """: "[1, 2];"

      """
      [] a
        b
      """: "[a(b)];"

  implicitCombos: ->
    parseTests
      """
      singleArray =
        1, 0, 1,
        0, 0, 1,
        1, 1, 0
      """: "singleArray = [1, 0, 1, 0, 0, 1, 1, 1, 0];"

      """
      arrayOfArrays =
        1, 0, 1
        0, 0, 1
        1, 1, 0
      """: "arrayOfArrays = [[1, 0, 1], [0, 0, 1], [1, 1, 0]];"

  explicitImplicitCombos: ->
    parseTests
      """
      singleArray = []
        1, 0, 1,
        0, 0, 1,
        1, 1, 0
      """: "singleArray = [1, 0, 1, 0, 0, 1, 1, 1, 0];"

      """
      singleArray = []
        [1, 0, 1,
        0, 0, 1,
        1, 1, 0]
      """: "singleArray = [[1, 0, 1, 0, 0, 1, 1, 1, 0]];"

      """
      doubleArray = [] []
        1, 0, 1,
        0, 0, 1,
        1, 1, 0
      """: "doubleArray = [[1, 0, 1, 0, 0, 1, 1, 1, 0]];"

      """
      doubleArray = []
        []
          1, 0, 1,
          0, 0, 1,
          1, 1, 0
      """: "doubleArray = [[1, 0, 1, 0, 0, 1, 1, 1, 0]];"

      """
      arrayOfArrays = []
        1, 0, 1
        0, 0, 1
        1, 1, 0
      """: "arrayOfArrays = [[1, 0, 1], [0, 0, 1], [1, 1, 0]];"

  splatsSpread: ->
    parseTests
      "[a...]":             "[...a];"
      "[a, b...]":          "[a, ...b];"
      "[a, b..., c]":       "[a, ...b, c];"
      "[a, b..., c, d...]": "[a, ...b, c, ...d];"
