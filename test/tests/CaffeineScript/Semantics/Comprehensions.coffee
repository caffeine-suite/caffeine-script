{log, formattedInspect} = Neptune.Art.StandardLib

{semanticTestSuite} = require '../Helper'

module.exports = suite: semanticTestSuite
  array:
    "array 1 2 3":                              [1,2,3]
    "array 1 2 3 skip 1":                       [2,3]
    "array 1 2 3 short 1":                      [1,2]

    "s = 1; array 1 2 3 skip s":                [2,3]
    "s = 1; array 1 2 3 short s":               [1,2]

    "array 1 2 3 skip 1 short 1":               [2]
    "array 1 2 3 by -1":                        [3,2,1]
    "array 1 2 3 by -1 skip 1":                 [2,1]
    "array 1 2 3 by -1 short 1":                [3,2]
    "array 1 2 3 by -1 skip 1 short 1":         [2]
    "array a in [1,2,3] with a * 2":            [2,4,6]
    "array a in [1,2,3,4,5] when a %% 2 == 0":  [2,4]

  object:
    "object a in ['a','b','c'] with true":      value: a: true, b: true, c: true
    "object a in ['a','b','c'] with-key a + a": value: aa: "a", bb: "b", cc: "c"

  arrayRange:
    "array to 5":                               [0,1,2,3,4,5]
    "array til 5":                              [0,1,2,3,4]
    "array to 4":                               [0,1,2,3,4]
    "array to 10 by 3":                         [0,3,6,9]
    "array from 1 to 10 by 3":                  [1,4,7,10]

    "array to 1 by .25":                        [0, 0.25, 0.5, 0.75, 1]
    "array a to 4 with Math.sqrt(a) * 100 | 0": [0, 100, 141, 173, 200]

    "(f = -> -3); array til f()":               [0, -1, -2]

  reduce:
    "reduce 1 2 3":                             1
    "reduce a, b from [1]   with a + b":        1
    "reduce a, b from 1 2   with a + b":        3
    "reduce a, b from 1 2 3 with a + b":        6
    """
    kids =
      {} age: 4
      {} age: 6
      {} age: 3
      {} age: 5
    reduce total, {age} from kids with total + age inject 0
    / kids.length
    """: 4.5

    """
    obj =
      no1: .5
      yes1: 2
      yes2: 200
      yes3: 20
      no2: .25
    reduce a, v, k from obj with a + v when /yes/.test k
    """: 222