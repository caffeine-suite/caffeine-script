Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, wordsArray, defineModule} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

defineModule module, ->

  class CafScriptParser extends Parser
    @nodeBaseClass: class CafScriptNode extends Nodes.Node

      toJs: ->
        for match in @matches when match.toJs
          return match.toJs()
        log "no matches have toJs": self: @, class: @class, matches: @matches, parseTreePath: @parseTreePath
        throw new Error "no matches have toJs"

    @rule
      root:
        pattern: 'statement*'
        node: toJs: -> (s.toJs() for s in @statements).join(";\n") + ";"

      statement: 'expression end'
      end: ['blocks end', '/\n|$/']

      blocks: 'block+'
      block: Extensions.IndentBlocks.ruleProps

      expression: [
        "binaryOperator"
        "expressionWithoutBinaryOperator"
      ]

      expressionWithoutBinaryOperator: "literal"

      binaryOperator: [
        pattern: "expressionWithoutBinaryOperator operator binaryOperator"
        node: toJs: ->
          "(#{@expressionWithoutBinaryOperator.toJs()} #{@operator} #{@binaryOperator.toJs()})"
        "expressionWithoutBinaryOperator"
      ]

      operator: /[-+*\/]/

      literal: wordsArray "boolLiteral numberLiteral"

      boolLiteral: pattern: /false|true/, node: toJs: -> @toString()
      numberLiteral: pattern: /[0-9]+/, node: toJs: -> @toString()
