{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite
  definition:
    unbound:
      "-> 321"             : "(function() {return 321;});"
      "(foo) -> 321"       : "(function(foo) {return 321;});"
      "(foo, bar) -> 321"  : "(function(foo, bar) {return 321;});"
      "->\n  321"          : "(function() {return 321;});"
      "->\n  321\n  456"   : "(function() {321; return 456;});"
      "->\n  321\n\n  456" : "(function() {321; return 456;});"

    dontMissParse:
      "foo -> 321"         : "foo(function() {return 321;});"
      "foo => 321"         : "foo(() => {return 321;});"

    bound:
      "=>"                 : "() => {};"
      "=> 321"             : "() => {return 321;};"
      "(foo) => 321"       : "(foo) => {return 321;};"
      "(foo, bar) => 321"  : "(foo, bar) => {return 321;};"
      "=>\n  321"          : "() => {return 321;};"
      "=>\n  321\n  456"   : "() => {321; return 456;};"
      "=>\n  321\n\n  456" : "() => {321; return 456;};"

    splatsRest:
      "(a...) =>":      "(...a) => {};"
      "(b, a...) =>":   "(b, ...a) => {};"

      # illegalSyntaxTests [
      #   "(b..., a) =>"
      # ]

    blankLine:
      """
      (a) ->

        a
      """: "(function(a) {return a;});"

    defaultArguments:
      "(a = 1) =>":         "(a = 1) => {};"
      "(a, b = 1) =>":      "(a, b = 1) => {};"
      "(a = 1, b) =>":      "(a = 1, b) => {};"
      "(a = 1, b = 2) =>":  "(a = 1, b = 2) => {};"

    thisAssignmentInArguments:
      "(@foo) =>":          "(foo) => {this.foo = foo;};"
      "(@foo) => foo + 1":  "(foo) => {this.foo = foo; return foo + 1;};"
      "(@foo = 123) =>":    "(foo = 123) => {this.foo = foo;};"
      "(@foo...) =>":       "(...foo) => {this.foo = foo;};"
      "(@foo, @bar) =>":    "(foo, bar) => {this.foo = foo; this.bar = bar;};"

  invocation:
    noParens:
      "foo 5"    : "foo(5);"
      "foo 1, 2" : "foo(1, 2);"
      "foo 1 2"  : "foo(1, 2);"
      "foo 'bar'": 'foo("bar");'
      "foo bar 2": "foo(bar(2));"

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
        "a.foo.bar?(b)":  "let cafBase; Caf.isF((cafBase = a.foo).bar) && cafBase.bar(b);"

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

      # This is failing now, rather than generating bad code.
      # That's OK! We could decide to support it later.
      #   """
      #   foo bar,
      #     a: 1
      #     b: 2
      #     baz
      #   """: "foo(bar, {a: 1, b: 2}, baz);"

      react:
        # This is the seed of why I built CaffeineScript! -SBD
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

      # TODO
      # ellipsis:
      #   "a b...": "a(...b);"
      #   "a b..., c": "a(...b, c);"
      #   "a b..., c...": "a(...b, ...c);"
      #   """
      #   a
      #     b
      #     c...
      #     d
      #   """: "a(b, ...c, d);"

