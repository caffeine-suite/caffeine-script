{log} = require 'art-standard-lib'
{
  SourceNode
} = Neptune.CaffeineScript.CafSourceMap

module.exports = suite:
  children: ->
    test "none", ->
      n = new SourceNode
      assert.eq '', n.toString()

    test "string", ->
      n = new SourceNode 0, 'hi'
      assert.eq 'hi', n.toString()

    test "array of strings", ->
      n = new SourceNode 0, ['hi', 'there', '!']
      assert.eq 'hithere!', n.toString()

    test 'nested arrays', ->
      n = new SourceNode 0, ['hi', ['there', ['!']]]
      assert.eq 'hithere!', n.toString()

    test 'SourceNode', ->
      n = new SourceNode 0, new SourceNode 0, 'hi'
      assert.eq 'hi', n.toString()
