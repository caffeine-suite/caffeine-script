{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:

  objectLiterals:
    basic: ->
      parseTests
        "{}"          : "{};"
        "{a:1}"       : "{a: 1};"
        "{a:1, b:2}"  : "{a: 1, b: 2};"

    computedKeys: ->
      parseTests
        "{[a]:1}"     : "{[a]: 1};"
        "[a]:1"       : "{[a]: 1};"
        "[a] : 1"     : "{[a]: 1};"
        """
        b: 1
        [a]:2
        """           : "{b: 1, [a]: 2};"
        """
        b: 1 [a]:2
        """           : "{b: 1, [a]: 2};"

    unusualKeys: ->
      parseTests
        "{0:1}"       : '{0: 1};'
        "{10:1}"      : '{10: 1};'
        "{1.0:1}"     : '{"1.0": 1};'
        "{1.1:1}"     : '{"1.1": 1};'
        "{01:1}"      : '{"01": 1};'
        "{-1:1}"      : '{"-1": 1};'
        "{0a:1}"      : '{"0a": 1};'
        "{a.b:1}"     : '{"a.b": 1};'
        "{a-b:1}"     : '{"a-b": 1};'

    toEol: ->
      parseTests
        "{} a:1"       : "{a: 1};"
        "{} a:1, b:2"  : "{a: 1, b: 2};"

    toEolNesting: ->
      parseTests
        "{} a: {} b:2"      : "{a: {b: 2}};"
        "{} a:\n {} b:2"    : "{a: {b: 2}};"
        "{} a:\n {}\n b:2"  : "{a: [{}, {b: 2}]};"

    explicitBlock: ->
      parseTests
        "{}\n a:1"        : "{a: 1};"
        "{}\n a:1\n b:2"  : "{a: 1, b: 2};"

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
