{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, illegalSyntaxTests} = require '../../Helper'

module.exports = suite:
  basic: ->
    parseTests
      "a = 1": "a = 1;"
      "a = 1 + 2": "a = 1 + 2;"
      # "@ = 1": ""

  this: ->
    parseTests
      "@f = 1":         "this.f = 1;"

  withAccessors:
    basic: ->
      parseTests
        "f().foo = 1":   "f().foo = 1;"
        "f.foo.bar = 1": "f.foo.bar = 1;"

    this: ->
      parseTests
        "@f().foo = 1":   "this.f().foo = 1;"
        "@f.foo.bar = 1": "this.f.foo.bar = 1;"

        "@.f = 1":          "this.f = 1;"
        "@.f().foo = 1":    "this.f().foo = 1;"
        "@.f.foo.bar = 1":  "this.f.foo.bar = 1;"

  multiline:
    basic: ->
      parseTests
        "f\n.foo = 1":   "f.foo = 1;"
        "f\n|| foo = 1": "f || (foo = 1);"

    compound: ->
      parseTests
        "f\n.foo.bar = 1":   "f.foo.bar = 1;"
        "f\n.foo().bar = 1": "f.foo().bar = 1;"

  indentedMultiline:
    basic: ->
      parseTests
        "f\n  .foo = 1":     "f.foo = 1);"
        "f\n  || foo = 1":   "f || (foo = 1);"
