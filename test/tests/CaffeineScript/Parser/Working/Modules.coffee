{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite {compileModule: true},
  basic:
    "1": "Caf.defMod(module, () => {return 1;});"
    "1\n2": "Caf.defMod(module, () => {1; return 2;});"

  deglobal:
    basic:
      "a":      "Caf.defMod(module, () => {let a = global.a; return a;});"
      "a = 1":  "Caf.defMod(module, () => {let a; return a = 1;});"
      "global": "Caf.defMod(module, () => {return global;});"

    withFunctions:
      "-> a":         "Caf.defMod(module, () => {let a = global.a; return function() {return a;};});"
      "a = 1; -> a":  "Caf.defMod(module, () => {let a; a = 1; return function() {return a;};});"
      "-> a = 1":     "Caf.defMod(module, () => {return function() {let a; return a = 1;};});"
      "-> a = b":     "Caf.defMod(module, () => {let b = global.b; return function() {let a; return a = b;};});"

    mixed:
      "a a":        "Caf.defMod(module, () => {let a = global.a; return a(a);});"
      "a b":        "Caf.defMod(module, () => {let a = global.a, b = global.b; return a(b);});"
      "a -> b":     "Caf.defMod(module, () => {let a = global.a, b = global.b; return a(function() {return b;});});"
      "a -> b = 1": "Caf.defMod(module, () => {let a = global.a; return a(function() {let b; return b = 1;});});"

    # complex:
    #   """
    #   b = a;
    #   ->
    #     c = b + d
    #     ->
    #       e = c + f
    #   """:  "
    #     Caf.defMod(module, () =>
    #       {let a = global.a, d = global.d, f = global.f;
    #       let b;
    #       b = a;
    #       return function()
    #         {let c;
    #         c = b + d;
    #         return function()
    #           {let e;
    #           return e = c + f;};};});"
