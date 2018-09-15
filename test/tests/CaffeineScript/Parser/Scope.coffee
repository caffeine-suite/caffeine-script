{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite
  regressions:
    """
    import Foo
    a = @b?.c
    """: "(() => {let a, base; return a = Caf.exists(base = this.b) && base.c;})();"
