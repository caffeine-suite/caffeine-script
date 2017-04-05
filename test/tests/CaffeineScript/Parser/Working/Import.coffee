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
      ({foo} = Caf.import(["foo"], [a, global]));return foo();'

    """
    import a
    foo bar
    """:
      applyModuleWrapper 'let a = global.a, foo, bar;
      ({foo, bar} = Caf.import(["foo", "bar"], [a, global]));return foo(bar);'

    """
    import a, b
    foo()
    """:
      applyModuleWrapper 'let a = global.a,
      b = global.b, foo;
      ({foo} = Caf.import(["foo"], [a, b, global]));return foo();'

  nested:
    """
    import a
    import b
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo, b, cafParentImports;
      ({b} = Caf.import(["b"], cafParentImports = [a, global]));({foo}
      = Caf.import(["foo"], [b, cafParentImports]));return foo();
      '

  scopes:
    """
    import global.Math
    -> min
    """:
      applyModuleWrapper 'let min;
      ({min} = Caf.import(["min"], [global.Math, global]));return function() {return min;};'


  deepNested:
    """
    import a
    import b
    import c
    foo()
    """:
      applyModuleWrapper 'let a = global.a, foo, c, b, cafParentImports, cafParentImports1;
      ({b} = Caf.import(["b"], cafParentImports = [a, global]));({c}
      = Caf.import(["c"], cafParentImports1 = [b, cafParentImports]));({foo}
      = Caf.import(["foo"], [c, cafParentImports1]));return foo();
      '
