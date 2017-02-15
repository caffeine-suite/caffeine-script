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

    nesting:
      array:
        "[{a}] = b": "let a; ([{a}] = b);"
        "[[a]] = b": "let a; ([[a]] = b);"

      object:
        "{c:{a}} = b": "let a; ({c: {a}} = b);"
        "{c:[a]} = b": "let a; ({c: [a]} = b);"

  binopAssignment:
    basic:
      "a &&= b":  "let a; a = a && b;"
      "a ||= b":  "let a; a = a || b;"
      "a ?= b":   "let a; a = a != null ? a : b;"

    complexBase:
      "a.c ||= d": "a.c = a.c || d;"
      "a.b.c ||= d": "let base; base.c = ((base = a.b).c) || d;"
      """
      a.b.c ||= d
      foo.bar.c ||= d
      """:
        "let base, base1;
        base.c = ((base = a.b).c) || d;
        base1.c = ((base1 = foo.bar).c) || d;"

      "a ||= -> foo.bar.c &&= d": "let a; a = a || (function() {let base; return base.c = ((base = foo.bar).c) && d;});"

      """
      a.b.c ||= -> foo.bar.c ||= d
      """:
        "let base;
        base.c = ((base = a.b).c) ||
        (function() {let base1; return base1.c = ((base1 = foo.bar).c) || d;});"
