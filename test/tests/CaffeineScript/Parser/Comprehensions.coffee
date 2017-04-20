{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  iterationTypes:
    "array b":        "Caf.each(b, [], (v, k, into) => {into.push(v);});"
    "object b":       "Caf.each(b, {}, (v, k, into) => {into[k] = v;});"
    "each b":         "Caf.each(b, undefined, (v, k, into) => {v;});"
    "find b":         "Caf.extendedEach(b, undefined, (v, k, into, brk) => {return v && (brk(), v);});"

  multipleArgs:
    """
    object myV, myK from mySource
      myV
    """: "Caf.each(mySource, {}, (myV, myK, into) => {into[myK] = myV;});"

    """
    direction = array v, i in precidence
      i
    """: "let direction; direction = Caf.each(precidence, [], (v, i, into) => {into.push(i);});"

  syntaxVariants:
    implicitWith:
      "object b":         "Caf.each(b, {}, (v, k, into) => {into[k] = v;});"
      "object from b":    "Caf.each(b, {}, (v, k, into) => {into[k] = v;});"
      "object v from b":  "Caf.each(b, {}, (v, k, into) => {into[k] = v;});"

    with:
      "object v from mySource\n  v":    "Caf.each(mySource, {}, (v, k, into) => {into[k] = v;});"
      "object v from mySource with v":  "Caf.each(mySource, {}, (v, k, into) => {into[k] = v;});"

      "object mySource\n true":         "Caf.each(mySource, {}, (v, k, into) => {into[k] = true;});"
      "object mySource with true":      "Caf.each(mySource, {}, (v, k, into) => {into[k] = true;});"


    when:
      "object a from b when a":        "Caf.each(b, {}, (a, k, into) => {if (a) {into[k] = a;};});"
      "object a from b when a with a": "Caf.each(b, {}, (a, k, into) => {if (a) {into[k] = a;};});"

      """
      object a from b when a
        a
      """: "Caf.each(b, {}, (a, k, into) => {if (a) {into[k] = a;};});"

  multilineWith:
    """
    array v in a
      foo
      v
    """:
      "Caf.each(a, [],
      (v, k, into) => {foo;
      into.push(v);});"

    """
    array v in a
      foo
      bar
      v
    """:
      "Caf.each(a, [],
      (v, k, into) => {foo; bar;
      into.push(v);});"

    """
    find a
      b
      c
    """: "
      Caf.extendedEach(a, undefined, (v, k, into, brk) =>
      {let cafRet; b; return (cafRet = c) && (brk(), cafRet);});"

  regressions:
    """
    object obj
      # an intended comment
    """: "Caf.each(obj, {}, (v, k, into) => {into[k] = v;});"

    """
    object obj
    """: "Caf.each(obj, {}, (v, k, into) => {into[k] = v;});"

    "object k from b": knownFailing: "Caf.each(b, {}, (k, _k, into) => {into[_k] = k;});"

    """
    each v from
        a: b
      v.a
    """: knownFailing: "a"

  nested:
    """
    array a
      array b
    """: "Caf.each(a,
      [],
      (v, k, into) =>
      {into.push(Caf.each(b,
      [],
      (v, k, into) =>
      {into.push(v);}));});"

  scope:
    enclosingScope:
      "assigning to existing variable":

        """
        a = 10
        object a from b with a
        """: "let a; a = 10; Caf.each(b, {}, (a, k, into) => {into[k] = a;});"

    assigningToLoopVariables:
      "in when using default with":

        """
        object a from b when a = a.foo
        """: "Caf.each(b, {}, (a, k, into) => {if (a = a.foo) {into[k] = a;};});"

      "in when using explicit with":

        """
        object a from b when a = a.foo with a + 1
        """: "Caf.each(b, {}, (a, k, into) => {if (a = a.foo) {into[k] = a + 1;};});"

    definingNewVariables:
      "in with":
        """
        object a from b with foo = a
        """: "Caf.each(b, {}, (a, k, into) => {let foo; into[k] = foo = a;});"

      "in when":
        """
        object a from b when foo = a
        """: "Caf.each(b, {}, (a, k, into) => {let foo; if (foo = a) {into[k] = a;};});"

      "in both":
        """
        object a from b when foo = a with foo = foo + 1
        """: "Caf.each(b, {}, (a, k, into) => {let foo; if (foo = a) {into[k] = foo = foo + 1;};});"

    usingExternalVariables:
      "in with":
        """
        foo = 1
        object a from b with foo = a
        """: "let foo; foo = 1; Caf.each(b, {}, (a, k, into) => {into[k] = foo = a;});"

      "in when":
        """
        foo = 1
        object a from b when foo = a
        """: "let foo; foo = 1; Caf.each(b, {}, (a, k, into) => {if (foo = a) {into[k] = a;};});"

      "in both":
        """
        foo = 1
        object a from b when foo = a with foo = foo + 1
        """: "let foo; foo = 1; Caf.each(b, {}, (a, k, into) => {if (foo = a) {into[k] = foo = foo + 1;};});"

  into:
    "object a into b": "Caf.each(a, b, (v, k, into) => {into[k] = v;});"

  find:
    "find a from b when a > 10": "Caf.extendedEach(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), a);});"
    "find a from b with a > 10": "Caf.extendedEach(b, undefined, (a, k, into, brk) => {let cafRet; return (cafRet = a > 10) && (brk(), cafRet);});"
    "find a from b when a > 10 with 123": "Caf.extendedEach(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), 123);});"

  alternativeKeywords:
    returning:
      "each a in b into      out = [1] with pushUnique out, a": "let out; Caf.each(b, out = [1], (a, k, into) => {pushUnique(out, a);});"
      "each a in b returning out = [1] with pushUnique out, a": "let out; Caf.each(b, out = [1], (a, k, into) => {pushUnique(out, a);});"
    in:
      "find a from b when a > 10":  "Caf.extendedEach(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), a);});"
      "find a in   b when a > 10":  "Caf.extendedEach(b, undefined, (a, k, into, brk) => {return a > 10 && (brk(), a);});"
    do:
      "object a from b with a + 1": "Caf.each(b, {}, (a, k, into) => {into[k] = a + 1;});"
      "object a from b do   a + 1": "Caf.each(b, {}, (a, k, into) => {into[k] = a + 1;});"

  expression: "c = array b": "let c; c = Caf.each(b, [], (v, k, into) => {into.push(v);});"

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