Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, wordsArray, peek} = Foundation
{Parser, Nodes} = BabelBridge
{RuleNode} = Nodes

class IndentBlocksBaseNodeType extends RuleNode

  collectLines: (lineStack) ->
    for match in @matches
      match.collectLines? lineStack

class BlockNode extends RuleNode
  constructor: (_, @indentLength = 0, firstMatch)->
    super
    @addMatch null, firstMatch

  collectLines: ->
    lineStack = @matches.reverse()
    newLines = []
    while line = lineStack.pop()
      line.collectLines? lineStack
      newLines.push line

    @_matches = newLines

class CouldHaveBlockNode extends IndentBlocksBaseNodeType

  collectLines: (lineStack) ->
    @collectLastBlock lineStack if @collectBlock == "lastBlock"
    super
    @collectFirstBlock lineStack if @collectBlock == "firstBlock"

    @block?.collectLines()


  collectFirstBlock: (lineStack) ->
    log "collectFirstBlock"
    if peek(lineStack) instanceof BlockNode
      @block = lineStack.pop()

  collectLastBlock: (lineStack) ->
    console.error "here"
    log "collectLastBlock lineStack.length: #{lineStack.length}", lineStack
    otherBlocks = []
    while peek(lineStack) instanceof BlockNode
      log "collectLastBlock1"
      otherBlocks.push @block if @block
      @matches.push @block = lineStack.pop()
    log "collectLastBlock2 otherBlocks.length = #{otherBlocks.length}", @block?.plainObjects

    # restore otherBlocks
    while otherBlocks.length > 0
      lineStack.push otherBlocks.pop()

class LinesNode extends BlockNode
  extractBlocks: ->
    blockStack = [new BlockNode @parser]

    for line in @matches
      indentLength = line.indent.matchLength
      line.matches = [line.expression]
      line.indent = line.eol = null

      while indentLength < peek(blockStack).indentLength
        block = blockStack.pop()
        peek(blockStack).matches.push block

      if indentLength == peek(blockStack).indentLength
        peek(blockStack).addMatch null, line
      else
        blockStack.push new BlockNode peek(blockStack), indentLength, line

    while blockStack.length > 1
      block = blockStack.pop()
      peek(blockStack).matches.push block

    @lines = null
    @matches = [@block = blockStack[0]]

  postParse: ->
    @extractBlocks()
    log extractBlocks: @plainObjects
    @block.collectLines()
    log collectLines: @plainObjects
    @

class IfRuleNode extends CouldHaveBlockNode
  collectBlock: "lastBlock"

model.exports = class CaffeineScriptParser extends Parser
  # need to be able to declare the base non-ternal node type for all nodes
  @baseNodeType: IndentBlocksBaseNodeType
  @rule lines: "line+", LinesNode
  @rule line: "indent expression eol"

  @rule expression: "/if/ _ expression", IfRuleNode

  @rule expression: /true|false/
  @rule _: / +/
  @rule eol: /[ ]*(\n|$)/

  @rule indent: / */

  @rule
    if: "'if' _ expression"

p = MyParser.parse """
  if true
    false
  """
log p.plainObjects
p.postParse()
