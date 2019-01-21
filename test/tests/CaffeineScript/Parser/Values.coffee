{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  simpleValues:
    "a":  "a;"
    "@":  "this;"
    "@a": "this.a;"

  extensions:
    basic:
      "a.b":  "a.b;"
      "a[b]": "a[b];"
      "a()":  "a();"
      "a b":  "a(b);"

    homogenousChains:
      "a.b.c":    "a.b.c;"
      "a(b(c))":  "a(b(c));"
      "a[b[c]]":  "a[b[c]];"
      "a b c":    "a(b(c));"

    heterogenousChains:
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

  parenthesis:
    "(1)": "1;"
    "(1 + 2) * 5":    "(1 + 2) * 5;"
    "1 + 2 * 5":      "1 + 2 * 5;"
    "1 + (2 * 5)":    "1 + 2 * 5;"
    "(new Foo).bar":  "(new Foo).bar;"

  reservedWords:
    "default = 1": null

