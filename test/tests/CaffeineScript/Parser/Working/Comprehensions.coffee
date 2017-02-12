{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite

  good:

    iterationTypes:
      "array b":        "Caf.e(b, [], (v, k, into) => {return into.push(v);});"
      "object b":       "Caf.e(b, {}, (v, k, into) => {return into[k] = v;});"
      "each b":         "Caf.e(b, undefined, (v, k, into) => {return v;});"
      "find b":         "Caf.ee(b, null, (v, k, into, brk) => {return v ? brk(v) : undefined;});"

    multipleArgs:
      """
      object myV, myK from mySource
        myV
      """: "Caf.e(mySource, {}, (myV, myK, into) => {return into[myK] = myV;});"

    syntaxVariants:
      implicitWith:
        "object b":         "Caf.e(b, {}, (v, k, into) => {return into[k] = v;});"
        "object from b":    "Caf.e(b, {}, (v, k, into) => {return into[k] = v;});"
        "object v from b":  "Caf.e(b, {}, (v, k, into) => {return into[k] = v;});"

      with:
        "object v from mySource\n  v":    "Caf.e(mySource, {}, (v, k, into) => {return into[k] = v;});"
        "object v from mySource with v":  "Caf.e(mySource, {}, (v, k, into) => {return into[k] = v;});"

        "object mySource\n true":         "Caf.e(mySource, {}, (v, k, into) => {return into[k] = true;});"
        "object mySource with true":      "Caf.e(mySource, {}, (v, k, into) => {return into[k] = true;});"


      when:
        "object a from b when a":        "Caf.e(b, {}, (a, k, into) => {return a ? into[k] = a : undefined;});"
        "object a from b when a with a": "Caf.e(b, {}, (a, k, into) => {return a ? into[k] = a : undefined;});"

        """
        object a from b when a
          a
        """: "Caf.e(b, {}, (a, k, into) => {return a ? into[k] = a : undefined;});"


    scope:
      enclosingScope:
        "assigning to existing variable":

          """
          a = 10
          object a from b with a
          """: "let a; a = 10; Caf.e(b, {}, (a, k, into) => {return into[k] = a;});"

      assigningToLoopVariables:
        "in when using default with":

          """
          object a from b when a = a.foo
          """: "Caf.e(b, {}, (a, k, into) => {return (a = a.foo) ? into[k] = a : undefined;});"

        "in when using explicit with":

          """
          object a from b when a = a.foo with a + 1
          """: "Caf.e(b, {}, (a, k, into) => {return (a = a.foo) ? into[k] = a + 1 : undefined;});"

      definingNewVariables:
        "in with":
          """
          object a from b with foo = a
          """: "Caf.e(b, {}, (a, k, into) => {let foo; return into[k] = foo = a;});"

        "in when":
          """
          object a from b when foo = a
          """: "Caf.e(b, {}, (a, k, into) => {let foo; return (foo = a) ? into[k] = a : undefined;});"

        "in both":
          """
          object a from b when foo = a with foo = foo + 1
          """: "Caf.e(b, {}, (a, k, into) => {let foo; return (foo = a) ? into[k] = foo = foo + 1 : undefined;});"

      usingExternalVariables:
        "in with":
          """
          foo = 1
          object a from b with foo = a
          """: "let foo; foo = 1; Caf.e(b, {}, (a, k, into) => {return into[k] = foo = a;});"

        "in when":
          """
          foo = 1
          object a from b when foo = a
          """: "let foo; foo = 1; Caf.e(b, {}, (a, k, into) => {return (foo = a) ? into[k] = a : undefined;});"

        "in both":
          """
          foo = 1
          object a from b when foo = a with foo = foo + 1
          """: "let foo; foo = 1; Caf.e(b, {}, (a, k, into) => {return (foo = a) ? into[k] = foo = foo + 1 : undefined;});"

    into:
      "object a into b": "Caf.e(a, b, (v, k, into) => {return into[k] = v;});"

    find:
      "find a from b when a > 10": "Caf.ee(b, null, (a, k, into, brk) => {return (a > 10) ? brk(a) : undefined;});"
      "find a from b with a > 10": "Caf.ee(b, null, (a, k, into, brk) => {return (todoRealTemp = a > 10) ? brk(todoRealTemp) : undefined;});"
      "find a from b when a > 10 with 123": "Caf.ee(b, null, (a, k, into, brk) => {return (a > 10) ? brk(123) : undefined;});"

    alternativeKeywords:
      in:
        "find a in b when a > 10": "Caf.ee(b, null, (a, k, into, brk) => {return (a > 10) ? brk(a) : undefined;});"
      do:
        "object a from b do a + 1": "Caf.e(b, {}, (a, k, into) => {return into[k] = a + 1;});"

    expression: "c = array b": "let c; c = Caf.e(b, [], (v, k, into) => {return into.push(v);});"

  ###
  notWorkingYet:
    iterationTypes:
      "reduce b":       "Caf.r(b);"

    patternAssignment:
      # Basically: (a for {a} in o)
      "array {a} from o with a": ""
      "object [a] from c with a": ""

    extractAssignment:
      # Basically: (foo.a for foo in o)
      "array extract a from o": ""


  ###