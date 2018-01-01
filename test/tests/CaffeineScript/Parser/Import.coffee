{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests, applyModuleWrapper} = require '../Helper'

module.exports = suite: parseTestSuite {compileModule: true},

  basic:
    """
    import a
    foo()
    """:
      applyModuleWrapper '
        let a = global.a;
        return Caf.importInvoke(["foo"], [global, a], (foo) => {return foo();});
        '

    """
    import a
    foo bar
    """:
      applyModuleWrapper '
        let a = global.a;
        return Caf.importInvoke(["foo", "bar"], [global, a], (foo, bar) => {return foo(bar);});
        '

    """
    import a, b
    foo()
    """:
      applyModuleWrapper '
        let a = global.a, b = global.b;
        return Caf.importInvoke(["foo"], [global, a, b], (foo) => {return foo();});
        '

  nested:
    """
    import a
    import b
    foo()
    """:
      applyModuleWrapper '
        let a = global.a, cafParentImports;
        return Caf.importInvoke(["b"], cafParentImports = [global, a], (b) =>
        {return Caf.importInvoke(["foo"], [cafParentImports, b], (foo) => {return foo();});});
        '

  scopes:
    """
    import global.Math
    -> min
    """:
      applyModuleWrapper '
      return Caf.importInvoke(["min"], [global, global.Math], (min) =>
      {return function() {return min;};});'

  insideScopes:
    """
    import LibA
    (arg) ->
      import LibB
      fromLibB arg
    """: applyModuleWrapper '
      let LibA = global.LibA, cafParentImports;
      return Caf.importInvoke(["LibB"], cafParentImports = [global, LibA],
      (LibB) =>
      {return function(arg)
      {return Caf.importInvoke(["fromLibB"], [cafParentImports, LibB],
      (fromLibB) => {return fromLibB(arg);});};});
      '

  deepNested:
    """
    import a
    import b
    import c
    foo()
    """:
      applyModuleWrapper '
      let a = global.a, cafParentImports; return
      Caf.importInvoke(["b"], cafParentImports = [global, a], (b) => {return
      Caf.importInvoke(["c"], cafParentImports1 = [cafParentImports, b], (c) => {return
      Caf.importInvoke(["foo"], [cafParentImports1, c], (foo) => {return foo();});});});
      '

  list:
    """
    import a, b, c
    foo()
    """:
      a = applyModuleWrapper '
        let a = global.a, b = global.b, c = global.c; return
        Caf.importInvoke(["foo"], [global, a, b, c], (foo) => {return foo();});
        '

    """
    import
      a
      b
      c
    foo()
    """: a

  assignedInImportBody:
    """
    import global
    foo = 123
    """: applyModuleWrapper "
      return (() => {let foo; return foo = 123;})();
      "

  regressions:
    """
    import global
    global.Neptune?.Art
    """: applyModuleWrapper "
      return (() => {let cafBase; return Caf.exists(cafBase = global.Neptune) && cafBase.Art;})();
      "

  bare:
    "import global": applyModuleWrapper "return undefined;"
