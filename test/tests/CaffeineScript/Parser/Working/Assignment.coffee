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
      "f().foo = 1":   "f().foo = 1;"
      "f.foo.bar = 1": "f.foo.bar = 1;"

    this:
      "@f().foo = 1":   "this.f().foo = 1;"
      "@f.foo.bar = 1": "this.f.foo.bar = 1;"

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
      "f\n.foo = 1":   "f.foo = 1;"
      "f\n|| foo = 1": "let foo; f || (foo = 1);"

    compound:
      "f\n.foo.bar = 1":   "f.foo.bar = 1;"
      "f\n.foo().bar = 1": "f.foo().bar = 1;"

    block:
      "f\n  .foo = 1":     "f.foo = 1;"
      "f\n  || foo = 1":   "let foo; f || (foo = 1);"

  destructuring: #->
    # "{a} = b": "let a; ({a} = b);"
    "[a] = b": "let a; ({a} = b);"