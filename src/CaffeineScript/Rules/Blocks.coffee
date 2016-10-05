{a, m, w, compactFlatten, log} = require "art-foundation"
{Extensions} = require 'babel-bridge'

module.exports = ->
  @rule
    blocks: 'block+'

  @rule
    block:          "comment? block:actualBlock"
    toEolAndBlock:  "comment? block:actualToEolAndBlock"

  @rule
    actualBlock:          Extensions.IndentBlocks.getPropsToSubparseBlock()
    actualToEolAndBlock:  Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock()
    unparsedBlock: Extensions.IndentBlocks.getPropsToSubparseBlock rule: "anything"

    anything:
      pattern: /(.|\n)*$/
      toString: -> @subparseText