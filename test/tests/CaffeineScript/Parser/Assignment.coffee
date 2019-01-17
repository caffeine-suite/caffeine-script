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
      "a += b": "let a; a += b;"
      "a -= b": "let a; a -= b;"
      "a *= b": "let a; a *= b;"
      "a /= b": "let a; a /= b;"
      "a %= b": "let a; a %= b;"
      "a |= b": "let a; a |= b;"
      "a ^= b": "let a; a ^= b;"
      "a <<= b": "let a; a <<= b;"
      "a >>= b": "let a; a >>= b;"
      "a >>>= b": "let a; a >>>= b;"

    basic:
      "a &&= b":  "let a; a && (a = b);"
      "a ||= b":  "let a; a || (a = b);"
      "a ?= b":   "let a; a != null ? a : a = b;" # it is legal JS to have an unparenethsised assignement in a ?:.

    complexBase:
      "a.c ||= d":    "a.c || (a.c = d);"
      "a.b.c ||= d":  "let base; (base = a.b).c || (base.c = d);"
      """
      a.b.c ||= d
      foo.bar.c ||= d
      """:
        "let base, base1;
        (base = a.b).c || (base.c = d);
        (base1 = foo.bar).c || (base1.c = d);"

      "a ||= -> foo.bar.c &&= d":
        "let a; a || (a = function()
        {let base; return (base = foo.bar).c && (base.c = d);});"

      """
      a.b.c ||= -> foo.bar.c ||= d
      """:
        "let base;
        (base = a.b).c || (base.c =
        function() {let base1; return (base1 = foo.bar).c || (base1.c = d);});"

  implicitArrays:
    basic:
      "a = 1, 2"      : "let a; a = [1, 2];"
      "a = 1,\n2"     : "let a; a = [1, 2];"

    trailingCommas:
      "a = 1, 2,"     : "let a; a = [1, 2];"

    optionalCommas:
      "a = 1 2"       : "let a; a = [1, 2];"
      "a = b 2"       : "let a; a = b(2);"
      "a = b.c 2"     : "let a; a = b.c(2);"
      "a = {a} 2"     : "let a; a = [{a}, 2];"
      "a = [a] 2"     : "let a; a = [[a], 2];"
      "a = 1 + 2 3"   : "let a; a = [1 + 2, 3];"
      "a = 1 + :2 3"  : 'let a; a = [1 + "2", 3];'
      "a = 1 + a 3"   : "let a; a = 1 + a(3);"

  regressions:
    "@b ||= 1":   "this.b || (this.b = 1);"
    "a.b ||= 1":  "a.b || (a.b = 1);"
    "a ||= []": "let a; a || (a = []);"
    "(a ||= []).a": "let a; (a || (a = [])).a;"
