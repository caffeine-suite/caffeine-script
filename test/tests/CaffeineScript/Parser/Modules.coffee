{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests, applyModuleWrapper} = require '../Helper'

module.exports = suite: parseTestSuite {compileModule: true},
  basic:
    "1":              applyModuleWrapper "return 1;"
    "1\n2":           applyModuleWrapper "1; return 2;"

  deglobal:
    basic:
      "a":            applyModuleWrapper "let a = global.a; return a;"
      "a = 1":        applyModuleWrapper "let a; return a = 1;"
      "global":       applyModuleWrapper "return global;"
      "this":         applyModuleWrapper "return this;"

    withFunctions:
      "-> a":         applyModuleWrapper "let a = global.a; return function() {return a;};"
      "a = 1; -> a":  applyModuleWrapper "let a; a = 1; return function() {return a;};"
      "-> a = 1":     applyModuleWrapper "return function() {let a; return a = 1;};"
      "-> a = b":     applyModuleWrapper "let b = global.b; return function() {let a; return a = b;};"

    mixed:
      "a a":          applyModuleWrapper "let a = global.a; return a(a);"
      "a b":          applyModuleWrapper "let a = global.a, b = global.b; return a(b);"
      "a -> b":       applyModuleWrapper "let a = global.a, b = global.b; return a(function() {return b;});"
      "a -> b = 1":   applyModuleWrapper "let a = global.a; return a(function() {let b; return b = 1;});"

    exceptions:
      "global.Math":        applyModuleWrapper "return global.Math;"
      "require 'foo'":      applyModuleWrapper 'return require("foo");'
      "module.exports = 1": applyModuleWrapper "return module.exports = 1;"
      """eval "" console.log("hi")""": applyModuleWrapper """return eval('console.log("hi")');"""

  regressions:
    "":                 applyModuleWrapper ";"
    "(foo) -> foo":     applyModuleWrapper "return function(foo) {return foo;};"
    "([foo]) -> foo":   applyModuleWrapper "return function([foo]) {return foo;};"
    "a = true":         applyModuleWrapper "let a; return a = true;"
