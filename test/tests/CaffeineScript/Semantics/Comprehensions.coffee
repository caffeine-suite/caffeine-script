{log, formattedInspect} = Neptune.Art.StandardLib

{semanticTestSuite} = require '../Helper'

module.exports = log suite: semanticTestSuite
  array:
    "array [1,2,3]": "[1,2,3]"
    "array a in [1,2,3] with a * 2": "[2,4,6]"
    "array a in [1,2,3,4,5] when a %% 2 == 0": "[2,4]"

  object:
    "object a in ['a','b','c'] with true": "({a: true, b: true, c: true})"
