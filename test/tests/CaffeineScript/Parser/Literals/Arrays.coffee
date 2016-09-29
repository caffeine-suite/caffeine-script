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

  implicit: ->
    parseTests
      "1, 2"      : "[1, 2];"
      "1 2"       : "[1, 2];"
      "1 + 2, 3"  : "[1 + 2, 3];"

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
