{log, formattedInspect} = Neptune.Art.StandardLib

{semanticTestSuite} = require '../Helper'

module.exports = suite: semanticTestSuite
  array:
    "array from null":                          []
    "array from-array null":                    []
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

  each:
    "each from null":                           null
    "each from undefined":                      undefined
    "each from-array null":                     null
    "each from-array undefined":                undefined
    "each from-object null":                    null
    "each from-object undefined":               undefined

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
    "object til 4":                             value: 0: 0, 1: 1, 2: 2, 3: 3
    "find til 4":                               1
    "each til 4":                               4

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

  movedOverFromParsing:
    fromObject:
      each: # TODO -- 'k' should only be 'let' once, inside the for-control block; it was wrong before, but benignly; now its broken-wrong
        "each from-object a:1 b:2": basicEach = value: a:1, b:2
        "each in-object a:1 b:2": basicEach

      find:
        "find from-object a:123 b:456":   123
        "find from-object a:false b:456": 456

      array:
        "array from-object a:1 b:2": [1, 2]

      object:
        "object from-object a:1 b:2":           commonResult = value: a:1, b:2
        "object a from-object a:1 b:2":         commonResult
        "object a from-object a:1 b:2 with a":  commonResult

        "object myV, myK from-object a:1 b:2 with myK + myV": value: a: "a1", b: "b2"

    fromArray:
      each:
        "each from-array 1 2":  commonResult = [1, 2]
        "each in-array 1 2":    commonResult

        # expression: # NOTE - JavaScript REQUIRES the function-wrap around while if it's in a comma-list
        "out = each in-array 1 2": commonResult

      break:
        "each a in-array 1 2 with break 123": 123
        "out = each a in-array 1 2 with break 123": 123
        """
        each a in-array 1 2
          if a == 2
            break a + 100
        """: 102

      find:
        basic:
          "find from-array 123 456": 123
          "find from-array false 456": 456

        withClause:
          "find myValue from-array false 456 with myValue && 10": 10

        whenClause:
          "find myValue from-array false 456 when myValue && 10": 456

        whenAndWithClause:
          "find myValue from-array 15 5 when myValue < 10 with myValue + 7": 12

      array:
        basic:
          "array from-array 123 456": [123, 456]

          """
          count = 0
          myFunction = ->
            count++
            1 2
          result = array from-array myFunction()
          {} count, result
          """: value: count: 1, result: [1, 2]

        with:
          "array myValue from-array 1 2 with myValue + 1": [2, 3]

        into:
          "array from-array 2 3 into [] 1": [1,2,3]

        when:
          "array myValue from-array 0 1 2 3 when myValue > 1": [2, 3]

        destructuring:
          object:
            "array {a} from-array [{a:1, b:2}, {a:10, b:20}]": [{a:1}, {a:10}]

          defaults:
            "array {a = 123} from-array [{a:111, b:222}, {c:333}]": [{a:111}, {a:123}]

          subObject:
            "array {a: {b}} from-array [{a: b:123}, {a: c:456}]": [{a: b:123}, {a: b: undefined}]

          array:
            "array [myProp] from-array [[1,2,3], [4,5,6], [7,8,9]] ": [[1], [4], [7]]

      object:
        basic:
          "object from-array 1 2 3": value: 1: 1, 2: 2, 3: 3

        customNames:
          "object myValue, myKey from-array 1 2 3": value: 1: 1, 2: 2, 3: 3

        withKey:
          "object myValue, myKey from-array 1 2 3 with-key myKey + '1'": value: "01": 1, 11: 2, 21: 3

    forcedFromArray:
      by:
        "array from 1 2 3 by 2":                [1, 3]
        "array 1 2 3 by -1":                    [3, 2, 1]

      skip:
        "array from 1 2 3 skip 1":              [2, 3]
        "b = 1;array from 1 2 3 skip b":        [2, 3]
        "array from 1 2 3 skip 1 by -1":        [2, 1]
        "b = 1;array from 1 2 3 skip b by -1":  [2, 1]

      short:
        "array from 1 2 3 short 1":             [1, 2]
        "b = 2;array from 1 2 3 short b":       [1]
        "array 1 2 3 short 1 by -1":            [3, 2]
        "b = 2;array 1 2 3 short b by -1":      [3]

    til:
      each:
        "each til 10":            10
        "each a til 10":          10
        "each til 10 with 1":     10
        "each to 10":             10
        "each from 2 to 10 by 2": 10
        "each to 10 by -1":       10
        "each to 10 by 0":        10

        "each from 2 til 10":     10
        "each from 10 til 2":     2
        "each til 10 by 2":       10

      array:
        "array til 10":           [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        "array til 10 by 2":      [0, 2, 4, 6, 8]
        "c = 3;array til 10 by c":[0, 3, 6, 9]
        # "array til 10 skip 2":    [2, 3, 4, 5, 6, 7, 8, 9]
        # "array til 10 short 2":   [0, 1, 2, 3, 4, 5, 6, 7]

        "array til 10 with 1":    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        "array to 1 by .25":      [0, 0.25, 0.5, 0.75, 1]

        "array a til 10 when a %% 2 == 0":      [0, 2, 4, 6, 8]
        "array myV, myK til 10 with myV * myK": [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

      object:
        "object til 5": 0: 0, 1: 1, 2: 2, 3: 3, 4: 4

      find:
        "find v til 10 when v > 4": 5
