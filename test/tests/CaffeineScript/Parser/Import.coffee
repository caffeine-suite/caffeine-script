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
      applyModuleWrapper 'let a = global.a, foo;
      ({foo} = Caf.import(["foo"], [global, a]));return foo();'

    """
    import a
    foo bar
    """:
      applyModuleWrapper 'let a = global.a, foo, bar;
      ({foo, bar} = Caf.import(["foo", "bar"], [global, a]));return foo(bar);'

    """
    import a, b
    foo()
    """:
      applyModuleWrapper 'let a = global.a,
      b = global.b, foo;
      ({foo} = Caf.import(["foo"], [global, a, b]));return foo();'

  nested:
    """
    import a
    import b
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo, b, cafParentImports;
      ({b} = Caf.import(["b"], cafParentImports = [global, a]));({foo}
      = Caf.import(["foo"], [cafParentImports, b]));return foo();
      '

  scopes:
    """
    import global.Math
    -> min
    """:
      applyModuleWrapper 'let min;
      ({min} = Caf.import(["min"], [global, global.Math]));return function() {return min;};'

  insideScopes:
    """
    import LibA
    (arg) ->
      import LibB
      fromLibB arg
    """: knownFailing:
      applyModuleWrapper 'let LibA = global.LibA, LibB, cafParentImports;
      ({LibB} = Caf.import(["LibB"], cafParentImports = [global, LibA]));return
      function(arg) {let fromLibB; ({fromLibB} = Caf.import(["fromLibB"], [cafParentImports, LibB]));return fromLibB(arg);}'


  deepNested:
    """
    import a
    import b
    import c
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo, c, b, cafParentImports, cafParentImports1;
      ({b} = Caf.import(["b"], cafParentImports = [global, a]));({c}
      = Caf.import(["c"], cafParentImports1 = [cafParentImports, b]));({foo}
      = Caf.import(["foo"], [cafParentImports1, c]));return foo();
      '

  list:
    """
    import a, b, c
    foo()
    """:
      applyModuleWrapper '
        let a = global.a, b = global.b, c = global.c, foo;
        ({foo} = Caf.import(["foo"], [global, a, b, c]));return foo();
      '

    """
    import
      a
      b
      c
    foo()
    """:
      applyModuleWrapper '
        let a = global.a, b = global.b, c = global.c, foo;
        ({foo} = Caf.import(["foo"], [global, a, b, c]));return foo();
      '
