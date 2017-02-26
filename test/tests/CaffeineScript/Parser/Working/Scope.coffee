{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite
  regressions:
    """
    import Foo
    a = @b?.c
    """: "let a; a = Caf.exists(base = this.b) && base.c;"
