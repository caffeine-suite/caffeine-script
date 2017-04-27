{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

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
      "foo =\n1":           "let foo; foo = 1;"
      """
      a =
      b = 1
      """:                  "let a, b; a = b = 1;"

      "f\n.foo = 1":        "f.foo = 1;"
      "f\n|| foo = 1":      "let foo; f || (foo = 1);"

    compound:
      "f\n.foo.bar = 1":    "f.foo.bar = 1;"
      "f\n.foo().bar = 1":  "f.foo().bar = 1;"

    block:
      "f\n  .foo = 1":      "f.foo = 1;"
      "f\n  || foo = 1":    "let foo; f || (foo = 1);"

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
      "a ?= b":   "let a; a != null ? a : a = b;" # it is legal JS to have an unparenethsised assignement in a ?:.

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
