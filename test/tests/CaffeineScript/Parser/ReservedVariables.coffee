{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite {compileModule: true},
  __dirname:
    """
    __dirname
    """:
      """
      "use strict"
      let Caf = require('caffeine-script-runtime');
      Caf.defMod(module, () => {return __dirname;});
      """

    """
    import foo: 123
    __dirname
    foo
    """:
      """
      "use strict"
      let Caf = require('caffeine-script-runtime');
      Caf.defMod(module, () => {return Caf.importInvoke(["foo"], [global, {foo: 123}], (foo) => {__dirname; return foo;});});
      """

  __filename:
    """
    __filename
    """:
      """
      "use strict"
      let Caf = require('caffeine-script-runtime');
      Caf.defMod(module, () => {return __filename;});
      """
