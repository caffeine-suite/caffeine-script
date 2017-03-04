{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite
  basic:
    "a = 1": "let a; a = 1;"
    "b = 1 + 2": "let b; b = 1 + 2;"

  this:
    "@f = 1":         "this.f = 1;"

  withAccessors:
    basic:
      "f().foo = 1":      "f().foo = 1;"
      "f.foo.bar = 1":    "f.foo.bar = 1;"

    this:
      "@f().foo = 1":     "this.f().foo = 1;"
      "@f.foo.bar = 1":   "this.f.foo.bar = 1;"

      "@.f = 1":          "this.f = 1;"
      "@.f().foo = 1":    "this.f().foo = 1;"
      "@.f.foo.bar = 1":  "this.f.foo.bar = 1;"

    array:
      "f[a]=1": "f[a] = 1;"
      "f[a] = 1": "f[a] = 1;"
      "foo.bar[a] = 1": "foo.bar[a] = 1;"

  block:
    """
    foo =
      bar: 1
    """: "let foo; foo = {bar: 1};"

  multiline:
    basic:
      "f\n.foo = 1":        "f.foo = 1;"
      "f\n|| foo = 1":      "let foo; f || (foo = 1);"

    compound:
      "f\n.foo.bar = 1":    "f.foo.bar = 1;"
      "f\n.foo().bar = 1":  "f.foo().bar = 1;"

    block:
      "f\n  .foo = 1":      "f.foo = 1;"
      "f\n  || foo = 1":    "let foo; f || (foo = 1);"

  destructuring:
    basic:
      "{a} = b": "let a; ({a} = b);"
      "[a] = b": "let a; ([a] = b);"

    list:
      "[a, b] = c": "let a, b; ([a, b] = c);"
      "{a, b} = c": "let a, b; ({a, b} = c);"

    defaults:
      "[a = 1, b] = c": "let a, b; ([a = 1, b] = c);"
      "{a = 1, b} = c": "let a, b; ({a = 1, b} = c);"

    asDifferentName:
      "{a: c} = b": "let c; ({a: c} = b);"

    dotDotDot:
      "[a...] = c":     "let a; ([...a] = c);"
      "[a, b ...] = c": "let a, b; ([a, ...b] = c);"

    nesting:
      array:
        "[{a}] = b": "let a; ([{a}] = b);"
        "[[a]] = b": "let a; ([[a]] = b);"

      object:
        "{c:{a}} = b": "let a; ({c: {a}} = b);"
        "{c:[a]} = b": "let a; ({c: [a]} = b);"

    inLists:
      """
      a = if b
        c
        {d} = e
      """: "let a, d; a = b ? (c, ({d} = e)) : undefined;"

    regressions:
      "{a} = if true\n 1": "let a; ({a} = true ? 1 : undefined);"

      """
      {a} =
        a: 123
      """: "let a; ({a} = {a: 123});"

  binopAssignment:
    javascriptSupported:
      "a += b":  "let a; a += b;"
      "a -= b":  "let a; a -= b;"
      "a *= b":  "let a; a *= b;"
      "a /= b":  "let a; a /= b;"
      "a %= b":  "let a; a %= b;"

    basic:
      "a &&= b":  "let a; a && (a = b);"
      "a ||= b":  "let a; a || (a = b);"
      "a ?= b":   "let a; a != null ? a : (a = b);"

    complexBase:
      "a.c ||= d":    "a.c || (a.c = d);"
      "a.b.c ||= d":  "let cafBase; (cafBase = a.b).c || (cafBase.c = d);"
      """
      a.b.c ||= d
      foo.bar.c ||= d
      """:
        "let cafBase, cafBase1;
        (cafBase = a.b).c || (cafBase.c = d);
        (cafBase1 = foo.bar).c || (cafBase1.c = d);"

      "a ||= -> foo.bar.c &&= d":
        "let a; a || (a = function()
        {let cafBase; return (cafBase = foo.bar).c && (cafBase.c = d);});"

      """
      a.b.c ||= -> foo.bar.c ||= d
      """:
        "let cafBase;
        (cafBase = a.b).c || (cafBase.c =
        function() {let cafBase1; return (cafBase1 = foo.bar).c || (cafBase1.c = d);});"

  regressions:
    "@b ||= 1":   "this.b || (this.b = 1);"
    "a.b ||= 1":  "a.b || (a.b = 1);"
