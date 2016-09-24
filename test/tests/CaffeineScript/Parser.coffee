{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require './Helper'

module.exports = suite:
  literals: ->
    parseTests
      "true":   "true;"
      "false":  "false;"
      "0123":   "0123;"
      '"hi"':   '"hi";'
      "'hi'":   "'hi';"
      ":hi":    "'hi';"

  operators: ->
    parseTests
      "1 + 2":    "1 + 2;"
      "a 1 + 2":  "a(1 + 2);"

  values: ->
    parseTests
      "foo"     : "foo;"
      "foo.bar" : "foo.bar;"
      "foo[bar]": "foo[bar];"

  invocation: ->
    parseTests
      "foo 1"    : "foo(1);"
      "foo 1, 2" : "foo(1, 2);"
      "foo 'bar'": "foo('bar');"
      "foo bar 2": "foo(bar(2));"

  function: ->
    parseTests
      "-> 321"             : "(function() {return 321;});"
      "->\n  321"          : "(function() {return 321;});"
      "->\n  321\n  456"   : "(function() {321;\nreturn 456;});"
      "->\n  321\n\n  456" : "(function() {321;\nreturn 456;});"

  arrayLiterals:
    basic: ->
      parseTests
        "[]"      : "[];"
        "[1]"     : "[1];"
        "[1, 2]"  : "[1, 2];"
        "[1 2]"   : "[1, 2];"

    implicit: ->
      parseTests
        "1, 2"    : "[1, 2];"
        "1 2"     : "[1, 2];"

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
        "a:1"       : "{a: 1};"
        "a:1, b:2"  : "{a: 1, b: 2};"
        "a:1\nb:2"  : "{a: 1, b: 2};"

        """
        a:1, b:2
        c:3, d:4
        """: """
          {a: 1, b: 2};
          {c: 3, d: 4};
          """

        """
        a:1
        b:3, c:4
        """: """
          {a: 1};
          {b: 3, c: 4};
          """

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


  assignment: ->
    parseTests
      "a=b":        "a = b;"
      "a   =    b": "a = b;"
      "a[1] = b":   "a[1] = b;"
      "a.b = b":    "a.b = b;"

  statements: ->
    parseTests
      """
      123
      456
      """:
        """
        123;
        456;
        """

      # on liner function followed immediately by another statement
      """
      -> 123
      456
      """:
        """
        (function() {return 123;});
        456;
        """

  controlStatements: ->
    parseTests
      """
      if foo
        bar
      """: "if (foo) {bar;};"

      """
      if foo
        bar
      else
        baz
      """: "if (foo) {bar;} else {baz;};"

      """
      unless foo
        bar
      """: "if (!(foo)) {bar;};"

      """
      unless foo + bar
        bar
      """: "if (!(foo + bar)) {bar;};"

      """
      unless foo
        bar
      else
        baz
      """: "if (!(foo)) {bar;} else {baz;};"

  math: ->
    testMath = (equation) ->
      test equation, ->
        js = Parser.parse(equation).toJs()
        assert.eq eval(js), eval(equation), "toJs: #{js}"

    testMath "1+2"
    testMath "1+2*3"
    testMath "2*3+4"
    testMath "2+4+4"
