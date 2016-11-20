{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite

  for:
    basic:
      """
      object a from b
        a
      """: "Caf.o(b, (a) => {return a;});"

    ###
    scope:
      """
      a = 10
      object a from b
      """: "let a; a = 10; Caf.o(b, (_a) => {a = _a; return a;});"

      """
      object a from b
        foo = a
        foo * 2
      """: "Caf.o(b, (a) => {let foo; foo = a; return foo * 2;});"
    ###

    # kvForm:
    #   "object k, v from b with k + v": "Caf.o(b, (k, v) => {return k + v;});"

    # TODO: 'with' works, but the parsing code is awkward.
    # What I'd prefer is to fix "expressionWithOneLessBlock" to allow it matching
    # part of the rest of the line. Right now it must match all the rest of the line, plus any one-less-blocks, to succeed.
    # A partial-match would be just fine, and it would simplify this case.
    # AND, it is going to significnatly simplify when we add "when" and "when + with" tests, sketched below.
    with:
      "object a from b with a": "Caf.o(b, (a) => {return a;});"

    # TODO
    # when:
    #   "object a from b when a": "Caf.o(b, (a) => {return a;}, (a) => {return a;});"
    #   "object a from b when a with a": "Caf.o(b, (a) => {return a;}, (a) => {return a;});"

    #   """
    #   object a from b when a
    #     a
    #   """: "Caf.o(b, (a) => {return a;}, (a) => {return a;});"

    outputTypes:
      "array b":        "Caf.a(b, (v) => {return v;});"
      "map b":          "Caf.m(b, (v) => {return v;});"
      "object b":       "Caf.o(b, (v) => {return v;});"

    iterationTypes:
      "array from b":           "Caf.a(b, (v) => {return v;});"
      "array from object b":    "Caf.aFromO(b, (v) => {return v;});"
      "array from array b":     "Caf.aFromA(b, (v) => {return v;});"
      "array from iter b":      "Caf.aFromI(b, (v) => {return v;});"

    implicitForms:
      "object v from b":  "Caf.o(b, (v) => {return v;});"
      "object from b":    "Caf.o(b, (v) => {return v;});"
      "object b":         "Caf.o(b, (v) => {return v;});"

    # range:      "for a in 1..10\n  a": ""
    # oneLiner:   "a for a in b": ""
    # by:         "for a in b by 2\n  a": ""
    # when:       "for a in b when a\n  a": ""
    # byWhen:     "for a in b by 2 when a\n  a": ""
    # whenBy:     "for a in b when a by 2\n  a": ""

    # expression: "c = for a in b\n  a": ""
# TODO: I really want to standardize "in" and "of" loops: one param is the "value", two params is "key" "value" - for either.
# Maybe the "in" and "of" keywords need re-examining. They are really confusing as-is.