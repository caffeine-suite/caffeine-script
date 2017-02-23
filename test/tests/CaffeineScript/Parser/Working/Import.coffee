{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
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
      applyModuleWrapper 'let a = global.a, foo, b, parentImports;
      ({b} = Caf.i(["b"], parentImports = [a, global]));({foo}
      = Caf.i(["foo"], [b, parentImports]));return foo();
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
      applyModuleWrapper 'let a = global.a, foo, c, b, parentImports, parentImports1;
      ({b} = Caf.i(["b"], parentImports = [a, global]));({c}
      = Caf.i(["c"], parentImports1 = [b, parentImports]));({foo}
      = Caf.i(["foo"], [c, parentImports1]));return foo();
      '
