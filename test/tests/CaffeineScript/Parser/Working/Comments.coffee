
{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite

  eol:
    "1# comment": "1;"

    "# comment\n1": "1;"

    "1\n# comment": "1;"

    """
    # comment
    """: ";"

    """
    # comment 1
    # comment 2
    1
    """: "1;"

    """


    # comment 1


    # comment 2


    1

    # comment 3


    """: "1;"

  anyNumberOfOctothorpsAllowedExcept3:
    "#\n1\n###": "1;"
    "##\n1\n###": "1;"
    "###\n1\n###": ";"  # triggers ### - ### comment
    "####\n1\n###": "1;"
    "#####\n1\n###": "1;"

  multiline:
    """
    ###
    # comment 1
    # comment 2
    ###
    1
    """: "1;"

    """
    ###
    /* all ok! */
    ###
    1
    """: "1;"

    """
    ###
    ##
      comment 1
    ###
    1
    """: "1;"

    """
    ###a###
    1
    """: "1;"

    """
    ##
    1
    """: "1;"

  block:
    """
    ##
      comment
    1
    """: "1;"

    # """
    # # comment 1
    #   comment 2
    # 1
    # """: "1;"

    """
    foo # comment 1
      not a comment
    """: "foo(!a(comment));"

    """
    ##
        1
       2
      3
       2
        1
    1
    """: "1;"