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

    scope:
      ###
      See Evernote on Scope
      ###

      "assigning to existing variable":

        """
        a = 10
        object a from b with a
        """: "let a; a = 10; Caf.o(b, (_a) => {a = _a; return a;});"

      "assigning to loop variable in when":

        """
        object a from b when a = a.foo
        """: "(() => {let a; return Caf.o(b, () => {a;}, (_a) => {a = _a; return a = a.foo;});})();"

      "new variables within comprehensions scope basic":
        """
        object a from b with foo = a
        """: "(() => {let foo; return Caf.o(b, (a) => {return foo = a;});})();"

      "new variables within comprehensions scope span when and with":

        """
        object a from b when c = a.foo()
          c
        """: "(() => {let c; return Caf.o(b, (a) => {return c;}, (a) => {return c = a.foo();});})();"

    into:
      "object a into b": ""

    initOut:
      "each v, k, out = {} from o with out[k+1] = v": ""

    patternAssignment:
      # Basically: (a for {a} in o)
      "array {a} from o with a": ""

    extractAssignment:
      # Basically: (foo.a for foo in o)
      "array extract a from o": ""

    alternativeKeywords:
      in:
        "find a in b when a > 10": ""
      do:
        "each a in b do a()": ""

    # kvForm:
    #   "object k, v from b with k + v": "Caf.o(b, (k, v) => {return k + v;});"

    # withDestructuring:
    #   "object [a] from c with a": ""

    # TODO: 'with' works, but the parsing code is awkward.
    # What I'd prefer is to fix "expressionWithOneLessBlock" to allow it matching
    # part of the rest of the line. Right now it must match all the rest of the line, plus any one-less-blocks, to succeed.
    # A partial-match would be just fine, and it would simplify this case.
    # AND, it is going to significnatly simplify when we add "when" and "when + with" tests, sketched below.
    with:
      "object a from b with a": "Caf.o(b, (a) => {return a;});"

    # TODO
    when:
      "object a from b when a": "Caf.o(b, null, (a) => {return a;});"
      "object a from b when a with a": "Caf.o(b, (a) => {return a;}, (a) => {return a;});"

      """
      object a from b when a
        a
      """: "Caf.o(b, (a) => {return a;}, (a) => {return a;});"

    outputTypes:
      "array b":        "Caf.a(b);"
      "reduce b":       "Caf.r(b);"
      "object b":       "Caf.o(b);"
      "each b":         "Caf.e(b);"
      "find b":         "Caf.f(b);"

    implicitForms:
      "object v from b":  "Caf.o(b);"
      "object from b":    "Caf.o(b);"
      "object b":         "Caf.o(b);"

    # range:      "for a in 1..10\n  a": ""
    # oneLiner:   "a for a in b": ""
    # by:         "for a in b by 2\n  a": ""
    # when:       "for a in b when a\n  a": ""
    # byWhen:     "for a in b by 2 when a\n  a": ""
    # whenBy:     "for a in b when a by 2\n  a": ""

    # expression: "c = for a in b\n  a": ""
# TODO: I really want to standardize "in" and "of" loops: one param is the "value", two params is "key" "value" - for either.
# Maybe the "in" and "of" keywords need re-examining. They are really confusing as-is.