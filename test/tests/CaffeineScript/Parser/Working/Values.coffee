{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:

  simpleValues: ->
    parseTests
      "a":  "a;"
      "@":  "this;"
      "@a": "this.a;"

  extensions:
    basic: ->
      parseTests
        "a.b":  "a.b;"
        "a[b]": "a[b];"
        "a()":  "a();"
        "a b":  "a(b);"

    homogenousChains: ->
      parseTests
        "a.b.c":    "a.b.c;"
        "a(b(c))":  "a(b(c));"
        "a[b[c]]":  "a[b[c]];"
        "a b c":    "a(b(c));"

    heterogenousChains: ->
      parseTests
        # mixed . and explicit function
        "a(b).c":   "a(b).c;"
        "a(b.c)":   "a(b.c);"
        "a.b(c)":   "a.b(c);"

        # mixed . and implicit function
        "a.b c":    "a.b(c);"
        "a b.c":    "a(b.c);"

        # mixed . and []
        "a.b[c]":   "a.b[c];"
        "a[b.c]":   "a[b.c];"
        "a[b].c":   "a[b].c;"

        # mixed [] and implicit function
        "a b[c]":   "a(b[c]);"
        "a[b c]":   "a[b(c)];"
        "a[b] c":   "a[b](c);"
