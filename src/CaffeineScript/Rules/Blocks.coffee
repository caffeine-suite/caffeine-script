{a, m, w, compactFlatten, log} = require "art-foundation"
{Extensions} = require 'babel-bridge'

module.exports =

  blocks: 'block+'
  block:
    pattern: "comment? actualBlock"
    getStatements: -> @actualBlock.getStatements()
    toJs: -> @actualBlock.toJs()
    toJsList: -> @actualBlock.toJsList()
    toFunctionBodyJs: -> @actualBlock.toFunctionBodyJs()
    toImplicitArrayOrValueJs: -> @actualBlock.toImplicitArrayOrValueJs()

  actualBlock: Extensions.IndentBlocks.ruleProps
  unparsedBlock: Extensions.IndentBlocks.unparsedBlockRuleProps
