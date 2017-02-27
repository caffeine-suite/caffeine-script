
{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite
  basic:
    """
    <capture>
      a: 'foo'
      b: foo
    """: """
      ({source: "a: \'foo\'\\nb: foo", value: ({a: "foo", b: foo})});
      """

    "<capture> foo": """
      ({source: "foo", value: foo});
      """

  regressions:

    # the problem here was 'length' was the key-prop tested to see if an object was array-iterable!
    # (and length gets set on identifiersAssigned)
    """
    {length} = <capture> []
    """: "let length; ({length} = {source: \"[]\", value: []});"