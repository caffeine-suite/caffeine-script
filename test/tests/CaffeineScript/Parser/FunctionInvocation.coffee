{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite
  noParens:
    "foo 5"         : "foo(5);"
    "foo 1, 2"      : "foo(1, 2);"
    "foo :bar"      : 'foo("bar");'

  implicitCommas:
    "foo bar 2"     : "foo(bar(2));"
    "foo a.bar 2"   : "foo(a.bar(2));"
    "foo 1 2"       : "foo(1, 2);"
    "foo {a} 2"     : "foo({a}, 2);"
    "foo [a] 2"     : "foo([a], 2);"
    "foo 1 + 2 3"   : "foo(1 + 2, 3);"
    "foo 1 + :2 3"  : 'foo(1 + "2", 3);'
    "foo 1 + a 3"   : "foo(1 + a(3));"

  parens:
    "foo()"               : "foo();"
    "foo(bar())"          : "foo(bar());"
    "foo(1)"              : "foo(1);"
    "foo(1, 2)"           : "foo(1, 2);"
    "foo(1 2)"            : "foo(1, 2);"
    "foo(1, bar(1, 2))"   : "foo(1, bar(1, 2));"

  andTailIf:
    'foo 123 if bar': "if (bar) {foo(123);};"

  conditional:
    basic:
      "a?(b)":    "Caf.isF(a) && a(b);"
      "a? b":     "Caf.isF(a) && a(b);"
      "a?\n b":   "Caf.isF(a) && a(b);"
      "a?(b)+4":  "(Caf.isF(a) && a(b)) + 4;"

    baseExtraction:
      "a.foo.bar?(b)":  "let base; Caf.isF((base = a.foo).bar) && base.bar(b);"

  implicitObjects:
    "foo a: 1, b: 2":     "foo({a: 1, b: 2});"
    "foo a: 1, 2":        "foo({a: [1, 2]});"
    "foo 1, a: 1, 2":     "foo(1, {a: [1, 2]});"
    "foo a: 1, 2, b: 2":  "foo({a: [1, 2], b: 2});"
    "foo a: 1 2 b: 2":    "foo({a: [1, 2], b: 2});"
    "foo a: 1 b: 2 3":    "foo({a: 1, b: [2, 3]});"
    "foo a: 1 b: 2 a":    "foo({a: 1, b: [2, a]});"

  block:
    basic:
      """
      foo
        1
      """: "foo(1);"

      """
      foo

        1
      """: "foo(1);"

      """
      foo
        1
        2
      """: "foo(1, 2);"

    withImplicitArrays:
      """
      foo
        1, 2
        3
      """: "foo([1, 2], 3);"

    optionalCommas:
      """
      foo
        1,
        2
      """: "foo(1, 2);"

      """
      foo
        1
        2,
      """: "foo(1, 2);"




    multiple:
      """
      foo
          1
        2
      """: "foo(1)(2);"

    regressions:
      """
      foo bar,
      a: 1,
      b: 2
      """: "foo(bar, {a: 1, b: 2});"

      "/foo/.b c":      "/foo/.b(c);"
      "'foo'.match c":  '("foo").match(c);'

    # This == failing now, rather than generating bad code.
    # That's OK! We could decide to support it later.
    #   """
    #   foo bar,
    #     a: 1
    #     b: 2
    #     baz
    #   """: "foo(bar, {a: 1, b: 2}, baz);"

    react:
      # This == the seed of why I built CaffeineScript! -SBD
      """
      Element
        RectangleElement color:  :red
        RectangleElement colors: :red :blue :green
      """: 'Element(RectangleElement({color: "red"}), RectangleElement({colors: ["red", "blue", "green"]}));'

      """
      Element
        size: 100
        axis: "topLeft"
      """: 'Element({size: 100, axis: "topLeft"});'

      """
      Element
        RectangleElement()
        size: 100
        axis: "topLeft"
      """: 'Element(RectangleElement(), {size: 100, axis: "topLeft"});'

      """
      Element
        size: 100
        axis: "topLeft"
        RectangleElement()
      """: 'Element({size: 100, axis: "topLeft"}, RectangleElement());'

    mixed:
      """
      if foo
          1
        2
      """: "if (foo(1)) {2;};"

      """
      foo # comment 1
        not a comment
      """: "foo(!a(comment));"

    ellipsis:
      "a b...": "a(...b);"
      "a b..., c": "a(...b, c);"
      "a b..., c...": "a(...b, ...c);"
      """
      a
        b
        c...
        d
      """: "a(b, ...c, d);"


  regressions:
    "(a).c()": "a.c();"
    "(a || b).c()": "(a || b).c();"
    """
    a
      # foo
    """: "a;"

    """
    a b,
      c
    """: "a(b, c);"

    "point 0  -1": "point(0, -1);"
    "rect 10 -5 40 50": "rect(10, -5, 40, 50);"
