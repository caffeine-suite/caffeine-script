{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  iterationTypes:
    "array b":        "Caf.each(b, [], (cafV, cafK, cafInto) => {cafInto.push(cafV);});"
    "object b":       "Caf.each(b, {}, (cafV, cafK, cafInto) => {cafInto[cafK] = cafV;});"
    "each b":         "Caf.each(b, undefined, () => {});"
    "find b":         "Caf.extendedEach(b, undefined, (cafV, cafK, cafInto, cafBrk) => {return cafV && (cafBrk(), cafV);});"

  each:
    "each v in b":          "Caf.each(b, undefined, (v) => {});"
    "each v, k in b":       "Caf.each(b, undefined, (v, k) => {});"
    "each v in b with v()": "Caf.each(b, undefined, (v) => {v();});"

  multipleArgs:
    """
    object myV, myK from mySource
      myV
    """: "Caf.each(mySource, {}, (myV, myK, cafInto) => {cafInto[myK] = myV;});"

    """
    direction = array v, i in precidence
      i
    """: "let direction; direction = Caf.each(precidence, [], (v, i, cafInto) => {cafInto.push(i);});"

  syntaxVariants:
    implicitWith:
      "object b":         a = "Caf.each(b, {}, (cafV, cafK, cafInto) => {cafInto[cafK] = cafV;});"
      "object from b":    a
      "object v from b":  "Caf.each(b, {}, (v, cafK, cafInto) => {cafInto[cafK] = v;});"

    with:
      "object v from mySource\n  v":    a = "Caf.each(mySource, {}, (v, cafK, cafInto) => {cafInto[cafK] = v;});"
      "object v from mySource with v":  a

      "object mySource\n true":         a = "Caf.each(mySource, {}, (cafV, cafK, cafInto) => {cafInto[cafK] = true;});"
      "object mySource with true":      a


    when:
      "object a from b when a":        a = "Caf.each(b, {}, (a, cafK, cafInto) => {if (a) {cafInto[cafK] = a;};});"
      "object a from b when a with a": a

      """
      object a from b when a
        a
      """: "Caf.each(b, {}, (a, cafK, cafInto) => {if (a) {cafInto[cafK] = a;};});"

  multilineWith:
    """
    array v in a
      foo
      v
    """: "
      Caf.each(a, [], (v, cafK, cafInto) =>
      {foo; cafInto.push(v);});"

    """
    array v in a
      foo
      bar
      v
    """:"
      Caf.each(a, [], (v, cafK, cafInto) =>
      {foo; bar; cafInto.push(v);});
      "

    """
    find a
      b
      c
    """: "
      Caf.extendedEach(a, undefined,
      (cafV, cafK, cafInto, cafBrk) =>
      {b; return c && (cafBrk(), c);});"

  nested:
    """
    array a
      array b
    """: "
      Caf.each(a, [],
      (cafV, cafK, cafInto) => {cafInto.push(Caf.each(b, [],
      (cafV, cafK, cafInto) => {cafInto.push(cafV);}));});"

  scope:
    enclosingScope:
      "assigning to existing variable":

        """
        a = 10
        object a from b with a
        """: "let a; a = 10; Caf.each(b, {}, (a, cafK, cafInto) => {cafInto[cafK] = a;});"

    assigningToLoopVariables:
      "in when using default with":

        """
        object a from b when a = a.foo
        """: "Caf.each(b, {}, (a, cafK, cafInto) => {if (a = a.foo) {cafInto[cafK] = a;};});"

      "in when using explicit with":

        """
        object a from b when a = a.foo with a + 1
        """: "Caf.each(b, {}, (a, cafK, cafInto) => {if (a = a.foo) {cafInto[cafK] = a + 1;};});"

    definingNewVariables:
      "in with":
        """
        object a from b with foo = a
        """: "Caf.each(b, {}, (a, cafK, cafInto) => {let foo; cafInto[cafK] = foo = a;});"

      "in when":
        """
        object a from b when foo = a
        """: "Caf.each(b, {}, (a, cafK, cafInto) => {let foo; if (foo = a) {cafInto[cafK] = a;};});"

      "in both":
        """
        object a from b when foo = a with foo = foo + 1
        """: "Caf.each(b, {}, (a, cafK, cafInto) => {let foo; if (foo = a) {cafInto[cafK] = foo = foo + 1;};});"

    usingExternalVariables:
      "in with":
        """
        foo = 1
        object a from b with foo = a
        """: "let foo; foo = 1; Caf.each(b, {}, (a, cafK, cafInto) => {cafInto[cafK] = foo = a;});"

      "in when":
        """
        foo = 1
        object a from b when foo = a
        """: "let foo; foo = 1; Caf.each(b, {}, (a, cafK, cafInto) => {if (foo = a) {cafInto[cafK] = a;};});"

      "in both":
        """
        foo = 1
        object a from b when foo = a with foo = foo + 1
        """: "let foo; foo = 1; Caf.each(b, {}, (a, cafK, cafInto) => {if (foo = a) {cafInto[cafK] = foo = foo + 1;};});"

  into:
    "object a into b": "Caf.each(a, b, (cafV, cafK, cafInto) => {cafInto[cafK] = cafV;});"

  find:
    "find a from b when a > 10": "Caf.extendedEach(b, undefined, (a, cafK, cafInto, cafBrk) => {return a > 10 && (cafBrk(), a);});"
    "find a from b with a > 10": "Caf.extendedEach(b, undefined, (a, cafK, cafInto, cafBrk) => {let cafRet; return (cafRet = a > 10) && (cafBrk(), cafRet);});"
    "find a from b when a > 10 with 123": "Caf.extendedEach(b, undefined, (a, cafK, cafInto, cafBrk) => {return a > 10 && (cafBrk(), 123);});"

  alternativeKeywords:
    returning:
      "each a in b into      out = [1] with pushUnique out, a": a = "let out; Caf.each(b, out = [1], (a) => {pushUnique(out, a);});"
      "each a in b returning out = [1] with pushUnique out, a": a
    in:
      "find a from b when a > 10":  a = "Caf.extendedEach(b, undefined, (a, cafK, cafInto, cafBrk) => {return a > 10 && (cafBrk(), a);});"
      "find a in   b when a > 10":  a
    do:
      "object a from b with a + 1": a = "Caf.each(b, {}, (a, cafK, cafInto) => {cafInto[cafK] = a + 1;});"
      "object a from b do   a + 1": a

  expression: "c = array b": "let c; c = Caf.each(b, [], (cafV, cafK, cafInto) => {cafInto.push(cafV);});"

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

  regressions:
    """
    object obj
      # an intended comment
    """: "Caf.each(obj, {}, (cafV, cafK, cafInto) => {cafInto[cafK] = cafV;});"

    """
    object obj
    """: "Caf.each(obj, {}, (cafV, cafK, cafInto) => {cafInto[cafK] = cafV;});"

    """
    each v from
        a: 1
      v + 2
    """: "Caf.each({a: 1}, undefined, (v) => {v + 2;});"

    """
    array v from a into
      [1]
    """: "Caf.each(a, [1], (v, cafK, cafInto) => {cafInto.push(v);});"

    """
    find foo
      if bar
        baz
    """: "
      Caf.extendedEach(foo, undefined,
      (cafV, cafK, cafInto, cafBrk) =>
      {let cafRet;
      return (cafRet = bar ? baz : undefined)
      && (cafBrk(), cafRet);});"

  parameterNameRegressions:

    "object k from b":    "Caf.each(b, {}, (k, cafK, cafInto) => {cafInto[cafK] = k;});"
    "object cafK from b": "Caf.each(b, {}, (cafK, cafK1, cafInto) => {cafInto[cafK1] = cafK;});"
    """
    cafK = 123
    object v from b with cafK * v
    """: "let cafK; cafK = 123; Caf.each(b, {}, (v, cafK1, cafInto) => {cafInto[cafK1] = cafK * v;});"
    "array cafV":         "Caf.each(cafV, [], (cafV, cafK, cafInto) => {cafInto.push(cafV);});"

    "object a from cafK with a * cafK.length":
      "Caf.each(cafK, {}, (a, cafK1, cafInto) => {cafInto[cafK1] = a * cafK.length;});"

    "object k, v from b": "Caf.each(b, {}, (k, v, cafInto) => {cafInto[v] = k;});"
    "object v, k from b": "Caf.each(b, {}, (v, k, cafInto) => {cafInto[k] = v;});"

  multiStatementWith:
    """
    array v from a with foo(); v
    """: multiStatementWithReturnsCorrectly = "Caf.each(a, [], (v, cafK, cafInto) => {foo(); cafInto.push(v);});"

    """
    array v from a
      foo()
      v
    """: multiStatementWithReturnsCorrectly

  newComprehensionValidations:
    ok:
      "array v":                "Caf.each(v, [], (cafV, cafK, cafInto) => {cafInto.push(cafV);});"
      "array v from a":         "Caf.each(a, [], (v, cafK, cafInto) => {cafInto.push(v);});"
      "array v from a into b":  "Caf.each(a, b, (v, cafK, cafInto) => {cafInto.push(v);});"
      "array v when a into b": whenIntoOrderDoesntMatter = "Caf.each(v, b, (cafV, cafK, cafInto) => {if (a) {cafInto.push(cafV);};});"
      "array v into b when a": whenIntoOrderDoesntMatter

    failures:
      "array v into b into a": null

  destructuring:
    "array {id} from users":         "Caf.each(users, [], ({id}, cafK, cafInto) => {cafInto.push({id});});"
    "array {id} from users with id": "Caf.each(users, [], ({id}, cafK, cafInto) => {cafInto.push(id);});"
