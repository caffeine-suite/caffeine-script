Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, wordsArray, defineModule, compactFlatten} = Foundation
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

      statement: 'binaryOperatorSequence end'
      end: ['blocks end', '/\n|$/']

      blocks: 'block+'
      block: Extensions.IndentBlocks.ruleProps

      binaryOperatorSequence:
        pattern: "expression operatorAndExpression*"
        node: toJs: ->
          ops = for op in compactFlatten [@expression, @operatorAndExpressions]
            op.toJs()
          ops.join ' '

      operatorAndExpression:
        pattern: "operator expression"
        node: toJs: ->
          "#{@operator} #{@expression.toJs()}"

      expression: "literal"

      operator: /[-+*\/]/

      literal: wordsArray "boolLiteral numberLiteral"

      boolLiteral: pattern: /false|true/, node: toJs: -> @toString()
      numberLiteral: pattern: /[0-9]+/, node: toJs: -> @toString()
