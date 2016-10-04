{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, illegalSyntaxTests} = require '../Helper'

module.exports = suite:
  definition:
    unbound: ->
      parseTests
        "-> 321"             : "(function() {return 321;});"
        "foo -> 321"         : "foo(function() {return 321;});"
        "(foo) -> 321"       : "(function(foo) {return 321;});"
        "(foo, bar) -> 321"  : "(function(foo, bar) {return 321;});"
        "->\n  321"          : "(function() {return 321;});"
        "->\n  321\n  456"   : "(function() {321; return 456;});"
        "->\n  321\n\n  456" : "(function() {321; return 456;});"

    bound: ->
      parseTests
        "=>"                 : "(() => {});"
        "=> 321"             : "(() => {return 321;});"
        "foo => 321"         : "foo(() => {return 321;});"
        "(foo) => 321"       : "((foo) => {return 321;});"
        "(foo, bar) => 321"  : "((foo, bar) => {return 321;});"
        "=>\n  321"          : "(() => {return 321;});"
        "=>\n  321\n  456"   : "(() => {321; return 456;});"
        "=>\n  321\n\n  456" : "(() => {321; return 456;});"

    splatsRest: ->
      parseTests
        "(a...) =>":      "((...a) => {});"
        "(b, a...) =>":   "((b, ...a) => {});"

      illegalSyntaxTests [
        "(b..., a) =>"
      ]

    defaultArguments: ->
      parseTests
        "(a = 1) =>":         "((a = 1) => {});"
        "(a, b = 1) =>":      "((a, b = 1) => {});"
        "(a = 1, b) =>":      "((a = 1, b) => {});"
        "(a = 1, b = 2) =>":  "((a = 1, b = 2) => {});"

    thisAssignmentInArguments: ->
      parseTests
        "(@foo) =>": "((foo) => {this.foo = foo;});"
        "(@foo) => foo + 1": "((foo) => {this.foo = foo; return foo + 1;});"
        "(@foo = 123) =>": "((foo = 123) => {this.foo = foo;});"
        "(@foo...) =>": "((...foo) => {this.foo = foo;});"
        "(@foo, @bar) =>": "((foo, bar) => {this.foo = foo; this.bar = bar;});"

  invocation:
    noParens: ->
      parseTests
        "foo 1"    : "foo(1);"
        "foo 1, 2" : "foo(1, 2);"
        "foo 1 2"  : "foo(1, 2);"
        "foo 'bar'": 'foo("bar");'
        "foo bar 2": "foo(bar(2));"

    parens: ->
      parseTests
        "foo()"               : "foo();"
        "foo(bar())"          : "foo(bar());"
        "foo(1)"              : "foo(1);"
        "foo(1, 2)"           : "foo(1, 2);"
        "foo(1 2)"            : "foo(1, 2);"
        "foo(1, bar(1, 2))"   : "foo(1, bar(1, 2));"

    andTailIf: ->
      parseTests
        'foo 123 if bar': "if (bar) {foo(123)};"

    block:
      basic: ->
        parseTests
          """
          foo
            1
          """: "foo(1);"

          """
          foo
            1
            2
          """: "foo(1, 2);"

      react: ->
        # This is the seed of why I built CaffeineScript! -SBD
        parseTests
          """
          Element
            RectangleElement color:  :red
            RectangleElement colors: :red :blue :green
          """: 'Element(RectangleElement({color: "red"}), RectangleElement({colors: ["red", "blue", "green"]}));'

      mixed: ->
        parseTests
          """
          if foo
              1
            2
          """: "if (foo(1)) {2;};"

          """
          foo # comment 1
            not a comment
          """: "foo(!a(comment));"