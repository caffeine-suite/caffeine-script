{a, m, w, compactFlatten, log} = require "art-foundation"
{Extensions} = require 'babel-bridge'

module.exports = ->
  @rule
    blocks: 'block+'

  @rule
    block:          "comment? block:actualBlock"
    toEolAndBlock:  "comment? block:actualToEolAndBlock"
  ,
    getStatements: -> @block.getStatements()
    toJs: -> @block.toJs()
    toJsList: -> @block.toJsList()
    toFunctionBodyJs: -> @block.toFunctionBodyJs()
    toImplicitArrayOrValueJs: -> @block.toImplicitArrayOrValueJs()

  @rule
    actualBlock:          Extensions.IndentBlocks.getPropsToSubparseBlock()
    actualToEolAndBlock:  Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock()
    unparsedBlock: Extensions.IndentBlocks.getPropsToSubparseBlock rule: "anything"

    anything:
      pattern: /(.|\n)*$/
      toString: -> @subparseText