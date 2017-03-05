{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests, applyModuleWrapper} = require '../../Helper'

module.exports = suite: parseTestSuite {compileModule: true},

  basic:
    """
    import a
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo;
      ({foo} = Caf.i(["foo"], [a, global]));return foo();'

    """
    import a
    foo bar
    """:
      applyModuleWrapper 'let a = global.a, foo, bar;
      ({foo, bar} = Caf.i(["foo", "bar"], [a, global]));return foo(bar);'

    """
    import a, b
    foo()
    """:
      applyModuleWrapper 'let a = global.a,
      b = global.b, foo;
      ({foo} = Caf.i(["foo"], [a, b, global]));return foo();'

  nested:
    """
    import a
    import b
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo, b, cafParentImports;
      ({b} = Caf.i(["b"], cafParentImports = [a, global]));({foo}
      = Caf.i(["foo"], [b, cafParentImports]));return foo();
      '

  scopes:
    """
    import global.Math
    -> min
    """:
      applyModuleWrapper 'let min;
      ({min} = Caf.i(["min"], [global.Math, global]));return function() {return min;};'


  deepNested:
    """
    import a
    import b
    import c
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo, c, b, cafParentImports, cafParentImports1;
      ({b} = Caf.i(["b"], cafParentImports = [a, global]));({c}
      = Caf.i(["c"], cafParentImports1 = [b, cafParentImports]));({foo}
      = Caf.i(["foo"], [c, cafParentImports1]));return foo();
      '
