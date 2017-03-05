{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:

  basic: ->

    parseTests
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
