{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite {compileModule: true},

  basic:
    """
    import a
    foo()
    """:
      'Caf.defMod(module, () =>
      {let a = global.a;
      ({foo} = Caf.i(["foo"], [a, global]));
      return foo();});'

    """
    import a, b
    foo()
    """:
      'Caf.defMod(module, () =>
      {let a = global.a;
      ({foo} = Caf.i(["foo"], [a, global]));
      return foo();});'

  nested:
    """
    import a
    import b
    foo()
    """:
      'Caf.defMod(module, () =>
      {let a = global.a;
      let parentImports;
      ({b} = Caf.i(["b"], parentImports = [a, global]));
      ({foo} = Caf.i(["foo"], [b, parentImports]));
      return foo();});
      '

  deepNested:
    """
    import a
    import b
    import c
    foo()
    """:
      'Caf.defMod(module, () =>
      {let a = global.a;
      let parentImports, parentImports1;
      ({b} = Caf.i(["b"], parentImports = [a, global]));
      ({c} = Caf.i(["c"], parentImports1 = [b, parentImports]));
      ({foo} = Caf.i(["foo"], [c, parentImports1])); return foo();});
      '
