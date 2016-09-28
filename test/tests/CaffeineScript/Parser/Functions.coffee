{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:
  definition: ->
    parseTests
      "-> 321"             : "(function() {return 321;});"
      "foo -> 321"         : "foo((function() {return 321;}));"
      "(foo) -> 321"       : "(function(foo) {return 321;});"
      "(foo, bar) -> 321"  : "(function(foo, bar) {return 321;});"
      "->\n  321"          : "(function() {return 321;});"
      "->\n  321\n  456"   : "(function() {321;\nreturn 456;});"
      "->\n  321\n\n  456" : "(function() {321;\nreturn 456;});"

  invocation: ->
    parseTests
      "foo 1"    : "foo(1);"
      "foo 1, 2" : "foo(1, 2);"
      "foo 'bar'": "foo('bar');"
      "foo bar 2": "foo(bar(2));"

      "foo()"               : "foo();"
      "foo(bar())"          : "foo(bar());"
      "foo(1)"              : "foo(1);"
      "foo(1, 2)"           : "foo(1, 2);"
      "foo(1, bar(1, 2))"   : "foo(1, bar(1, 2));"

  mixedAccessorsAndInvocations:
    access:
      basic: ->
        parseTests
          "f.foo.bar": "f.foo.bar;"
          "f.foo()":   "f.foo();"
          "f.foo bar": "f.foo(bar);"
          "f().bar":   "f().bar;"
          "f()()":     "f()();"

      this: ->
        parseTests
          "@f.foo.bar": "this.f.foo.bar;"
          "@f.foo()":   "this.f.foo();"
          "@f().bar":   "this.f().bar;"
          "@f()()":     "this.f()();"

          "@.f":        "this.f;"
          # "@.f.foo.bar": "this.f.foo.bar;"
          # "@.f.foo()":   "this.f.foo();"
          # "@.f().bar":   "this.f().bar;"
          # "@.f()()":     "this.f()();"

    assign:
      basic: ->
        parseTests
          "f().foo = 1":   "f().foo = 1;"
          "f.foo.bar = 1": "f.foo.bar = 1;"

      this: ->
        parseTests
          "@f = 1":         "this.f = 1;"
          "@f().foo = 1":   "this.f().foo = 1;"
          "@f.foo.bar = 1": "this.f.foo.bar = 1;"

          "@.f = 1":          "this.f = 1;"
          "@.f().foo = 1":    "this.f().foo = 1;"
          "@.f.foo.bar = 1":  "this.f.foo.bar = 1;"

  blockInvocation:
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
        """: "Element(RectangleElement({color: 'red'}), RectangleElement({colors: ['red', 'blue', 'green']}));"

    mixedWithControlStatements: ->
      parseTests
        """
        if foo
            1
          2
        """: "if (foo(1)) {2;};"