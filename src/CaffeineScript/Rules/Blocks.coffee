{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

  blocks: 'block+'
  block: Extensions.IndentBlocks.ruleProps
  unparsedBlock: Extensions.IndentBlocks.unparsedBlockRuleProps
