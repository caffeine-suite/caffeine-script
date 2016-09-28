{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:

  eol: ->
    parseTests
      """
      1# comment
      """: "1;"

      """
      # comment
      1
      """: "1;"

      """
      1
      # comment
      """: "1;"

      """
      # comment
      """: ";"

      """
      # comment 1
      # comment 2
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
