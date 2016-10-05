
{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:

  eol: ->
    parseTests
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

  anyNumberOfOctothorpsAllowedExcept3: ->
    parseTests
      "#\n1\n###": "1;"
      "##\n1\n###": "1;"
      "###\n1\n###": ";"  # triggers ### - ### comment
      "####\n1\n###": "1;"
      "#####\n1\n###": "1;"

  multiline: ->
    parseTests
      """
      ###
      # comment 1
      # comment 2
      ###
      1
      """: "1;"

    parseTests
      """
      ###
      /* all ok! */
      ###
      1
      """: "1;"

    parseTests
      """
      ###
      ##
        comment 1
      ###
      1
      """: "1;"

    parseTests
      """
      ###a###
      1
      """: "1;"

    parseTests
      """
      ##
      1
      """: "1;"

  block: ->
    parseTests
      """
      #
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
