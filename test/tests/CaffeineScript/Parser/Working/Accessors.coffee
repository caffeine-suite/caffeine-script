{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, illegalSyntaxTests} = require '../../Helper'

module.exports = suite:
  basic: ->
    parseTests
      "@a":   "this.a;"
      "a.b":  "a.b;"
      "a[b]": "a[b];"

  mixed:
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

  multiline:
    basic: ->
      parseTests
        """
        foo
        .bar
        """: "foo.bar;"

    binaryOperatorExtensions: ->
      parseTests
        """
        foo
        .bar + 1
        """: "foo.bar + 1;"

    block:
      basic: ->
        parseTests
          """
          foo
            .bar
          """: "foo.bar;"

      binaryOperatorExtensions: ->
        parseTests
          """
          foo
            .bar + 1
          """: "foo.bar + 1;"

        parseTests
          """
          foo
            .bar * 2 + 3
          """: "(foo.bar * 2) + 3;"

    compound: ->
      parseTests
        """
        foo
        .bar = c
        """: "foo.bar = c;"

        """
        foo
        .bar().baz = c
        """: "foo.bar().baz = c;"

        """
        foo
        .bar 1
        """: "foo.bar(1);"

        """
        foo = baz.dood
          1
          2
        .bar
        """: "(foo = baz.dood(1, 2)).bar;"

        # """
        # foo = baz.dood
        #   1
        #   2
        # .then -> 123
        # .catch -> 456
        # """: "((foo = baz.dood(1, 2)).then((function() {return 123;}))).catch((function() {return 456;}));"


