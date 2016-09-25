{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:

  arrayLiterals:
    basic: ->
      parseTests
        "[]"      : "[];"
        "[1]"     : "[1];"
        "[1, 2]"  : "[1, 2];"
        "[1 2]"   : "[1, 2];"

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

  objectLiterals:
    basic: ->
      parseTests
        "{}"          : "{};"
        "{a:1}"       : "{a: 1};"
        "{a:1, b:2}"  : "{a: 1, b: 2};"

    matchless: ->
      parseTests
        "{} a:1"       : "{a: 1};"
        "{} a:1, b:2"  : "{a: 1, b: 2};"

    implicit: ->
      parseTests
        "a:1"           : "{a: 1};"
        "a:1, b:2"      : "{a: 1, b: 2};"
        "a:1 + 2, b:2"  : "{a: 1 + 2, b: 2};"
        "a:1\nb:2"      : "{a: 1, b: 2};"

        "a: 1 b: 2":
          "{a: 1, b: 2};"

        """
        a:1, b:2
        c:3, d:4
        """: "{a: 1, b: 2}; {c: 3, d: 4};"

        """
        a:1
        b:3, c:4
        """: "{a: 1}; {b: 3, c: 4};"

    withExplicitArrays: ->
      parseTests
        "a: []":      "{a: []};"
        "b: [1, 2]":  "{b: [1, 2]};"
        "c: [] 3, 4": "{c: [3, 4]};"
        """
        d: []
          5
          6
        """: "{d: [5, 6]};"

    withExpressions: ->
      parseTests
        "d: 1 + 2": "{d: 1 + 2};"
        "d: a b":   "{d: a(b)};"

    withImplicitArrays: ->
      parseTests
        "d: 5, 6": "{d: [5, 6]};"
        "d: 5 6":  "{d: [5, 6]};"

        """
        a: :shut :the :frell :up
        b: :dude :this :is :cool
        """: "{a: ['shut', 'the', 'frell', 'up'], b: ['dude', 'this', 'is', 'cool']};"

    withBlockValues: ->
      parseTests
        """
        a:
          1
        """: "{a: 1};"

        """
        a:
          1
          2
          3
        b:
          1
        """: "{a: [1, 2, 3], b: 1};"

        """
        a:
          1 2 3
          4 5 6
          7 8 9
        """: "{a: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]};"

        """
        match:
          pattern: :blah   action: -> :boring
          pattern: :zoom   action: -> :fast
        """: "
          {match:
            [{pattern: 'blah', action: (function() {return 'boring';})},
            {pattern: 'zoom', action: (function() {return 'fast';})}]};"
