{log, formattedInspect} = Neptune.Art.StandardLib

{semanticTestSuite} = require '../Helper'

module.exports = suite: semanticTestSuite
  array:
    "array [1,2,3]": "[1,2,3]"
    "array a in [1,2,3] with a * 2": "[2,4,6]"
    "array a in [1,2,3,4,5] when a %% 2 == 0": "[2,4]"

  object:
    "object a in ['a','b','c'] with true": "({a: true, b: true, c: true})"

  arrayRange:
    "array to 5": "[0,1,2,3,4,5]"
    "array til 5": "[0,1,2,3,4]"
    "array to 4": "[0,1,2,3,4]"
    "array to 10 by 3": "[0,3,6,9]"
    "array from 1 to 10 by 3": "[1,4,7,10]"

    "array to 1 by .25": "[0, 0.25, 0.5, 0.75, 1]"
    "array a to 4 with Math.sqrt(a) * 100 | 0": "[0, 100, 141, 173, 200]"

    "(f = -> -3); array til f()": "[0, -1, -2]"
