{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, illegalSyntaxTests} = require '../Helper'

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
