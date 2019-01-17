{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite
  explicit:
    basic:
      "[]"      : "[];"
      "[1]"     : "[1];"
      "[1, 2]"  : "[1, 2];"
    multiline:
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
      foo [
        1, 2,
        3, 4
      ]
      """: "foo([1, 2, 3, 4]);"

      """
      [
      1, 2,
      3, 4
      ]
      """: "[1, 2, 3, 4];"

      """
      [1, 2, 3, 4,]
      """: "[1, 2, 3, 4];"

    optionalCommas:
      "[1 2]"       : "[1, 2];"
      "[b 2]"       : "[b(2)];"
      "[b.c 2]"     : "[b.c(2)];"
      "[{a} 2]"     : "[{a}, 2];"
      "[[a] 2]"     : "[[a], 2];"
      "[1 + 2 3]"   : "[1 + 2, 3];"
      "[1 + :2 3]"  : '[1 + "2", 3];'
      "[1 + a 3]"   : "[1 + a(3)];"
      "[/hi/ 3]"   : "[/hi/, 3];"

  implicit:
    basic:
      "1, 2"      : "[1, 2];"
      "1 2"       : "[1, 2];"
      "1 + 2, 3"  : "[1 + 2, 3];"

    mixed:
      "1 2 if bar": "if (bar) {[1, 2];};"

  withObjects:
    "{a: 1}, {b: 2}": "[{a: 1}, {b: 2}];"
    "{a: 1} {b: 2}":  "[{a: 1}, {b: 2}];"
    "{a: 1} b: 2":    "[{a: 1}, {b: 2}];"
    "a: 1 {b: 2}":    "({a: [1, {b: 2}]});" # this is correctly and object, not an implicit array

  withExplicitSubArrays:
    "[1], [2]": "[[1], [2]];"
    "[1] [2]":  "[[1], [2]];"
    "[1] [] 2": "[[1], [2]];"
    "1 [2]":    "[1, [2]];"

  matchless:
    "[] 1"    : "[1];"
    "[] 1, 2" : "[1, 2];"
    "[] 1 2"  : "[1, 2];"

  longArrays:
    """
    1 2 3,
    4 5 6
    """: "[1, 2, 3, 4, 5, 6];"

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

    """
    1 2 3,
    4 5 6,
    """: "[1, 2, 3, 4, 5, 6];"

    """
    1, 2, 3,
    4, 5, 6,
    """: "[1, 2, 3, 4, 5, 6];"

  block:
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
    []
      1, 2
    """: "[1, 2];"

    """
    [] # this == a block array
      1
      2
    """: "[1, 2];"

    """
    [] a
      b
    """: "[a(b)];"

    """
    []
      b if c
    """: "[c ? b : undefined];"

  implicitCombos:
    """
    singleArray =
      1, 0, 1,
      0, 0, 1,
      1, 1, 0
    """: "let singleArray; singleArray = [1, 0, 1, 0, 0, 1, 1, 1, 0];"

    """
    arrayOfArrays =
      1, 0, 1
      0, 0, 1
      1, 1, 0
    """: "let arrayOfArrays; arrayOfArrays = [[1, 0, 1], [0, 0, 1], [1, 1, 0]];"

  explicitImplicitCombos:
    """
    singleArray = []
      1, 0, 1,
      0, 0, 1,
      1, 1, 0
    """: "let singleArray; singleArray = [1, 0, 1, 0, 0, 1, 1, 1, 0];"

    """
    singleArray = []
      [1, 0, 1,
      0, 0, 1,
      1, 1, 0]
    """: "let singleArray; singleArray = [[1, 0, 1, 0, 0, 1, 1, 1, 0]];"

    """
    doubleArray = [] []
      1, 0, 1,
      0, 0, 1,
      1, 1, 0
    """: "let doubleArray; doubleArray = [[1, 0, 1, 0, 0, 1, 1, 1, 0]];"

    """
    doubleArray = []
      []
        1, 0, 1,
        0, 0, 1,
        1, 1, 0
    """: "let doubleArray; doubleArray = [[1, 0, 1, 0, 0, 1, 1, 1, 0]];"

    """
    arrayOfArrays = []
      1, 0, 1
      0, 0, 1
      1, 1, 0
    """: "let arrayOfArrays; arrayOfArrays = [[1, 0, 1], [0, 0, 1], [1, 1, 0]];"

  optionalCommas:
    "[1 2 3] [4 5 6]": "[[1, 2, 3], [4, 5, 6]];"
    "a [1] [2]":       "a([1], [2]);"

  splatsSpread:
    "[a...]":             "[...a];"
    "[a.b...]":           "[...a.b];"
    "[a, b...]":          "[a, ...b];"
    "[a, b..., c]":       "[a, ...b, c];"
    "[a, b..., c, d...]": "[a, ...b, c, ...d];"
    "[a, [1,2]...]":          "[a, ...[1, 2]];"
    """
    []
      a...
    """: "[...a];"

  regressions:
    """
    []
      -3
      -3
    """: "[-3, -3];"

    """
    [
      -5         - 10  + 5
      -5         - 10  + 7
      110        + 20
      110        + 20
    ]
    """: "[-5 - 10 + 5, -5 - 10 + 7, 110 + 20, 110 + 20];"
