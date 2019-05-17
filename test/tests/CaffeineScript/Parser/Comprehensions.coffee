{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  iterationTypes:
    "array b":        "Caf.array(b);"
    "object b":       "Caf.object(b);"
    "each b":         "Caf.each2(b);"
    "find b":         "Caf.find(b);"
    "reduce b":       "Caf.reduce(b);"

  object:
    "object v, k in b with-key k + k": "Caf.object(b, null, null, null, (v, k) => k + k);"

  each:
    "each v in b":          "Caf.each2(b);"
    "each v, k in b":       "Caf.each2(b);"
    "each v in b with v()": "Caf.each2(b, (v) => v());"
    "each v in b when v()": "Caf.each2(b, null, (v) => v());"

  reduce:
    "reduce a, v from c inject 0 with a + v": "Caf.reduce(c, (a, v) => a + v, null, 0);"
    "reduce total, {age} from kids with total + age": "Caf.reduce(kids, (total, {age}) => total + age);"
    "reduce a, v, k from 1 2 3 with a + v + k": "Caf.reduce([1, 2, 3], (a, v, k) => a + v + k);"

  multipleArgs:
    """
    object myV, myK from mySource
      myV
    """: "Caf.object(mySource, (myV, myK) => myV);"

    """
    direction = array v, i in precidence
      i
    """: "let direction; direction = Caf.array(precidence, (v, i) => i);"

  syntaxVariants:
    implicitWith:
      "object b":         a = "Caf.object(b);"
      "object from b":    a
      "object v from b":  a

    with:
      "object v from mySource\n  v":    a = "Caf.object(mySource, (v) => v);"
      "object v from mySource with v":  a

      "object mySource\n true":         a = "Caf.object(mySource, () => true);"
      "object mySource with true":      a


    when:
      "object a from b when a":        "Caf.object(b, null, (a) => a);"
      "object a from b when a with a": "Caf.object(b, (a) => a, (a) => a);"

      """
      object a from b when a
        c
      """: a = "Caf.object(b, (a) => c, (a) => a);"

      """
      object a from b when
          a
        c
      """: a

      "object a from b when b;a with c": a = "Caf.object(b, (a) => c, (a) => {b; return a;});"

      """
      object a from b when
          b
          a
        c
      """: a

  multilineWith:
    """
    array v in a
      foo
      v
    """: "
      Caf.array(a, (v) => {foo; return v;});"

    """
    array v in a
      foo
      bar
      v
    """:"
      Caf.array(a, (v) => {foo; bar; return v;});
      "

    """
    find a
      b
      c
    """: "
      Caf.find(a, () => {b; return c;});"

  nested:
    """
    array a
      array b
    """: "Caf.array(a, () => Caf.array(b));"

  scope:
    enclosingScope:
      "assigning to existing variable":

        """
        a = 10
        object a from b with a
        """: "let a; a = 10; Caf.object(b, (a) => a);"

    assigningToLoopVariables:
      "in when using default with":

        """
        object a from b when a = a.foo
        """: "Caf.object(b, null, (a) => a = a.foo);"

      "in when using explicit with":

        """
        object a from b when a = a.foo with a + 1
        """: "Caf.object(b, (a) => a + 1, (a) => a = a.foo);"

    definingNewVariables:
      "in with":
        """
        object a from b with foo = a
        """: "Caf.object(b, (a) => {let foo; return foo = a;});"

      "in when":
        """
        object a from b when foo = a
        """: "Caf.object(b, null, (a) => {let foo; return foo = a;});"

      ###
      NOTE - I don't love it, but this is the right answer if we hae
      the when-clause and the with-clause in separate functions.
      Any variable 'declared' in either must get reset with each loop iteration.
      Even creating a wrapping scope for the comprehension wouldn't solve this.

      So, all clauses are simply separate, isolated scopes. They don't share scope.
      ###
      "in both":
        """
        object a from b when foo = a with foo = foo + 1
        """: "Caf.object(b, (a) => {let foo; return foo = foo + 1;}, (a) => {let foo; return foo = a;});"

    usingExternalVariables:
      "in with":
        """
        foo = 1
        object a from b with foo = a
        """: "let foo; foo = 1; Caf.object(b, (a) => foo = a);"

      "in when":
        """
        foo = 1
        object a from b when foo = a
        """: "let foo; foo = 1; Caf.object(b, null, (a) => foo = a);"

      "in both":
        """
        foo = 1
        object a from b when foo = a with foo = foo + 1
        """: "let foo; foo = 1; Caf.object(b, (a) => foo = foo + 1, (a) => foo = a);"

  into:
    "object a into b": "Caf.object(a, null, null, b);"

  find:
    "find a from b when a > 10": "Caf.find(b, null, (a) => a > 10);"
    "find a from b with a > 10": "Caf.find(b, (a) => a > 10);"
    "find a from b when a > 10 with 123": "Caf.find(b, (a) => 123, (a) => a > 10);"

  alternativeKeywords:
    returning:
      "each a in b into      out = [1] with pushUnique out, a": a = "let out; Caf.each2(b, (a) => pushUnique(out, a), null, out = [1]);"
      "each a in b returning out = [1] with pushUnique out, a": a
    in:
      "find a from b when a > 10":  a = "Caf.find(b, null, (a) => a > 10);"
      "find a in   b when a > 10":  a
    do:
      "object a from b with a + 1": a = "Caf.object(b, (a) => a + 1);"
      "object a from b do   a + 1": a

  expression: "c = array b": "let c; c = Caf.array(b);"

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
    """: "Caf.object(obj);"

    """
    object obj
    """: "Caf.object(obj);"

    """
    each v from
        a: 1
      v + 2
    """: "Caf.each2({a: 1}, (v) => v + 2);"

    """
    array v from a into
      [1]
    """: "Caf.array(a, null, null, [1]);"

    """
    find foo
      if bar
        baz
    """: "
      Caf.find(foo, () => bar ? baz : undefined);"


    """
    each mod
      if bar
        foo
    """: "Caf.each2(mod, () => bar ? foo : undefined);"

  parameterNameRegressions:

    "object k from b":    "Caf.object(b);"
    """
    k = 123
    object v from b with k * v
    """: "let k; k = 123; Caf.object(b, (v) => k * v);"
    "array v":         "Caf.array(v);"

    "object a from k with a * k.length":
      "Caf.object(k, (a) => a * k.length);"

    "object k, v from b": "Caf.object(b);"
    "object v, k from b": "Caf.object(b);"

    """
    object v, k
      b
    """:"Caf.object([v, k], () => b);"

    """
    object a
      b
    """:"Caf.object(a, () => b);"

    """
    object a from
        b
        c
      d
    """:"Caf.object((b, c), (a) => d);"

  multiStatementWith:
    """
    array v from a with foo(); v
    """: multiStatementWithReturnsCorrectly = "Caf.array(a, (v) => {foo(); return v;});"

    """
    array v from a
      foo()
      v
    """: multiStatementWithReturnsCorrectly

  newComprehensionValidations:
    ok:
      "array v":                "Caf.array(v);"
      "array v from a":         "Caf.array(a);"
      "array v from a into b":  "Caf.array(a, null, null, b);"
      "array v when a into b": whenIntoOrderDoesntMatter = "Caf.array(v, null, () => a, b);"
      "array v into b when a": whenIntoOrderDoesntMatter

    failures:
      "array v into b into a": null

  destructuring:
    "array {id} from users":         "Caf.array(users, ({id}) => {id});"
    "array {id} from users with id": "Caf.array(users, ({id}) => id);"
