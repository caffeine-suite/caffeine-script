{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:
  keywordValues: ->
    parseTests
      "true":       "true;"
      "null":       "null;"
      "false":      "false;"
      "NaN":        "NaN;"
      "undefined":  "undefined;"

      # for simplicity and minimalism, these CoffeeScript keywords are not supported
      "yes":    null
      "on":     null
      "no":     null
      "off":    null
