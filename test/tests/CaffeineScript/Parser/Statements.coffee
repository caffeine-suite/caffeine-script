{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  basic:
    "123": "123;"

    "123\n": "123;"
    "\n123": "123;"

    """
    # before
    123 # same line
    # after
    """: "123;"

    """
    123
    456
    """: "123; 456;"

    """
    123;;;
    456
    """: "123; 456;"

    """
    123
    [456]
    """: "123; [456];"

    """
    123;456
    """: "123; 456;"

  regressions:
    """
    a
    /1/
    """: "a; /1/;"

  dotLineStarts:
    regressions:
      """
      a
      .123
      """: "a; .123;"

      """
      foo (a)->
        .bar
      """: null # ILLEGAL

