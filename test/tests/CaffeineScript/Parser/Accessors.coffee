{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite
  basic:
    "@a":   "this.a;"
    "a.b":  "a.b;"
    "a[b]": "a[b];"

  onLiterals:
    "1.foo":      "(1).foo;";
    "'1'.foo":    '("1").foo;';
    "{a:1}.foo":  "({a: 1}).foo;";
    "[1].foo":    "([1]).foo;";

  mixed:
    access:
      basic:
        "f.foo.bar": "f.foo.bar;"
        "f.foo()":   "f.foo();"
        "f.foo bar": "f.foo(bar);"
        "f().bar":   "f().bar;"
        "f()()":     "f()();"

      this:
        "@f.foo.bar": "this.f.foo.bar;"
        "@f.foo()":   "this.f.foo();"
        "@f().bar":   "this.f().bar;"
        "@f()()":     "this.f()();"

        "@.f":        "this.f;"

  existanceAccessor:
    basic:
      "a?.b":   "Caf.exists(a) && a.b;"
      "a?[b]":  "Caf.exists(a) && a[b];"
      "a? b":   "Caf.isF(a) && a(b);"
      """
      a?
        b
       c
      """: "Caf.isF(a) && a(b)(c);"
      """
      a
        ?.b
      """: "Caf.exists(a) && a.b;"

    withBase:
      "a.foo.bar?.b":  "let cafBase; Caf.exists(cafBase = a.foo.bar) && cafBase.b;"
      "a.foo.bar?[b]": "let cafBase; Caf.exists(cafBase = a.foo.bar) && cafBase[b];"
      # "a.foo.bar? b": "let cafBase; Caf.exists((cafBase = a.foo).bar) && cafBase.bar[b];"

    withChain:
      baseline:
        """
        a?.b
        """: "Caf.exists(a) && a.b;"

        """
        a? b
        """: "Caf.isF(a) && a(b);"

        """
        a()?.b
        """: "let cafBase; Caf.exists(cafBase = a()) && cafBase.b;"

      dots:
        """
        a?.b?.c
        """: "let cafBase; Caf.exists(a) && (Caf.exists(cafBase = a.b) && cafBase.c);"

        """
        a?.b?.c?.d
        """: "let cafBase, cafBase1; Caf.exists(a) && (Caf.exists(cafBase = a.b) && (Caf.exists(cafBase1 = cafBase.c) && cafBase1.d));"

      brackets:
        """
        a?[b]?[c]
        """: "let cafBase; Caf.exists(a) && (Caf.exists(cafBase = a[b]) && cafBase[c]);"

        """
        a?[b]?[c]?[d]
        """: "let cafBase, cafBase1; Caf.exists(a) && (Caf.exists(cafBase = a[b]) && (Caf.exists(cafBase1 = cafBase[c]) && cafBase1[d]));"

      functionInvocation:
        """
        a?.b? c
        """: "Caf.exists(a) && (Caf.isF(a.b) && a.b(c));"

        """
        a?(b)? c
        """: "let cafBase; Caf.isF(a) && (Caf.isF(cafBase = a(b)) && cafBase(c));"

        """
        a? b? c
        """: "Caf.isF(a) && a(Caf.isF(b) && b(c));"

        """
        a?[b]? c
        """: "Caf.exists(a) && (Caf.isF(a[b]) && a[b](c));"

        """
        a?[b]?.c d
        """: "let cafBase; Caf.exists(a) && (Caf.exists(cafBase = a[b]) && cafBase.c(d));"

        """
        a?.b?.c? d
        """: "let cafBase; Caf.exists(a) && (Caf.exists(cafBase = a.b) && (Caf.isF(cafBase.c) && cafBase.c(d)));"

        # """
        # a?[b]?[c]? d
        # """: "let cafBase, cafBase1; Caf.exists(a) && (Caf.exists(cafBase = a[b]) && (Caf.exists(cafBase1 = cafBase[c]) && cafBase1[d]));"

  multiline:
    basic:
      """
      foo
      .bar
      """: "foo.bar;"

      """
      foo
      ?.bar
      """: "Caf.exists(foo) && foo.bar;"

    binaryOperatorExtensions:
      """
      foo
      .bar + 1
      """: "foo.bar + 1;"

    afterImplicitLiterals:
      """
      foo: 1
      .bar
      """: "({foo: 1}).bar;"

      """
      foo: 1
      fad: 2
      .bar
      """: "({foo: 1, fad: 2}).bar;"

      """
      a =
        1
        2
        .bar
      """: "let a; a = [1, (2).bar];"

    block:
      basic:
        """
        foo
          .bar
        """: "foo.bar;"

      binaryOperatorExtensions:
        """
        foo
          .bar + 1
        """: "foo.bar + 1;"

      precedence:
        """
        foo
          .bar * 2 + 3
        """: "foo.bar * 2 + 3;"

        """
        foo
          .bar + 2 * 3
        """: "foo.bar + 2 * 3;"

    compound:
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
      """: "let foo; (foo = baz.dood(1, 2)).bar;"

      """
      foo = baz.dood
        1
        2
      .then  -> 123
      .catch -> 456
      """: "let foo; (foo = baz.dood(1, 2)).then(function() {return 123;}).catch(function() {return 456;});"


  # regressions:
  #   """
  #   b?.c[0]
  #   """: "Caf.exists(b) && b.c[0];"
