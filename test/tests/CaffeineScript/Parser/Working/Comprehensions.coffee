{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite

    iterationTypes:
      "array b":        "Caf.e(b, [], (v, k, into) => {into.push(v);});"
      "object b":       "Caf.e(b, {}, (v, k, into) => {into[k] = v;});"
      "each b":         "Caf.e(b, undefined, (v, k, into) => {v;});"
      "find b":         "Caf.ee(b, undefined, (v, k, into, brk) => {return v && (brk(), v);});"

    multipleArgs:
      """
      object myV, myK from mySource
        myV
      """: "Caf.e(mySource, {}, (myV, myK, into) => {into[myK] = myV;});"

      """
      direction = array v, i in precidence
        i
      """: "let direction; direction = Caf.e(precidence, [], (v, i, into) => {into.push(i);});"

    syntaxVariants:
      implicitWith:
        "object b":         "Caf.e(b, {}, (v, k, into) => {into[k] = v;});"
        "object from b":    "Caf.e(b, {}, (v, k, into) => {into[k] = v;});"
        "object v from b":  "Caf.e(b, {}, (v, k, into) => {into[k] = v;});"

      with:
        "object v from mySource\n  v":    "Caf.e(mySource, {}, (v, k, into) => {into[k] = v;});"
        "object v from mySource with v":  "Caf.e(mySource, {}, (v, k, into) => {into[k] = v;});"

        "object mySource\n true":         "Caf.e(mySource, {}, (v, k, into) => {into[k] = true;});"
        "object mySource with true":      "Caf.e(mySource, {}, (v, k, into) => {into[k] = true;});"


      when:
        "object a from b when a":        "Caf.e(b, {}, (a, k, into) => {if (a) {into[k] = a;};});"
        "object a from b when a with a": "Caf.e(b, {}, (a, k, into) => {if (a) {into[k] = a;};});"

        """
        object a from b when a
          a
        """: "Caf.e(b, {}, (a, k, into) => {if (a) {into[k] = a;};});"

    multilineWith:
      """
      array v in a
        foo
        v
      """:
        "Caf.e(a, [],
        (v, k, into) => {foo;
        into.push(v);});"

      """
      array v in a
        foo
        bar
        v
      """:
        "Caf.e(a, [],
        (v, k, into) => {foo; bar;
        into.push(v);});"

      """
      find a
        b
        c
      """: "
        Caf.ee(a, undefined, (v, k, into, brk) =>
        {let _ret; b; return (_ret = c) && (brk(), _ret);});"

    nested:
      """
      array a
        array b
      """: "Caf.e(a,
        [],
        (v, k, into) =>
        {into.push(Caf.e(b,
        [],
        (v, k, into) =>
        {into.push(v);}));});"

    scope:
      enclosingScope:
        "assigning to existing variable":

          """
          a = 10
          object a from b with a
          """: "let a; a = 10; Caf.e(b, {}, (a, k, into) => {into[k] = a;});"

      assigningToLoopVariables:
        "in when using default with":

          """
          object a from b when a = a.foo
          """: "Caf.e(b, {}, (a, k, into) => {if (a = a.foo) {into[k] = a;};});"

        "in when using explicit with":

          """
          object a from b when a = a.foo with a + 1
          """: "Caf.e(b, {}, (a, k, into) => {if (a = a.foo) {into[k] = a + 1;};});"

      definingNewVariables:
        "in with":
          """
          object a from b with foo = a
          """: "Caf.e(b, {}, (a, k, into) => {let foo; into[k] = foo = a;});"

        "in when":
          """
          object a from b when foo = a
          """: "Caf.e(b, {}, (a, k, into) => {let foo; if (foo = a) {into[k] = a;};});"

        "in both":
          """
          object a from b when foo = a with foo = foo + 1
          """: "Caf.e(b, {}, (a, k, into) => {let foo; if (foo = a) {into[k] = foo = foo + 1;};});"

      usingExternalVariables:
        "in with":
          """
          foo = 1
          object a from b with foo = a
          """: "let foo; foo = 1; Caf.e(b, {}, (a, k, into) => {into[k] = foo = a;});"

        "in when":
          """
          foo = 1
          object a from b when foo = a
          """: "let foo; foo = 1; Caf.e(b, {}, (a, k, into) => {if (foo = a) {into[k] = a;};});"

        "in both":
          """
          foo = 1
          object a from b when foo = a with foo = foo + 1
          """: "let foo; foo = 1; Caf.e(b, {}, (a, k, into) => {if (foo = a) {into[k] = foo = foo + 1;};});"

    into:
      "object a into b": "Caf.e(a, b, (v, k, into) => {into[k] = v;});"

    find:
      "find a from b when a > 10": "Caf.ee(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), a);});"
      "find a from b with a > 10": "Caf.ee(b, undefined, (a, k, into, brk) => {let _ret; return (_ret = a > 10) && (brk(), _ret);});"
      "find a from b when a > 10 with 123": "Caf.ee(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), 123);});"

    alternativeKeywords:
      in:
        "find a in b when a > 10": "Caf.ee(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), a);});"
      do:
        "object a from b do a + 1": "Caf.e(b, {}, (a, k, into) => {into[k] = a + 1;});"

    expression: "c = array b": "let c; c = Caf.e(b, [], (v, k, into) => {into.push(v);});"

  ###
  # TODO
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