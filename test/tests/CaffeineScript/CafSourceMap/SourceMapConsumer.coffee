{log} = require 'art-standard-lib'
{
  SourceMapConsumer
} = Neptune.CaffeineScript.CafSourceMap

module.exports = suite: ->
  test "AACA", ->

    c = new SourceMapConsumer mappings: "AACA"
    assert.eq c.decodedMappings, [
      generatedLine:   0
      generatedColumn: 0
      source:          0
      sourceLine:      1
      sourceColumn:    0
    ]