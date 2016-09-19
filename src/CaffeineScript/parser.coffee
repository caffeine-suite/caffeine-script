Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, wordsArray, defineModule, compactFlatten, present} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

defineModule module, ->

  class CafScriptParser extends Parser
    @nodeBaseClass: class CafScriptNode extends Nodes.Node

      toJs: ->
        for match in @matches when match.toJs
          return match.toJs()
        ""

    @rule
      root:
        pattern: 'statementOrBlankLine*'
        node:
          toJs: -> (js for s in @statementOrBlankLines when present js = s.toJs()).join(";\n") + ";"
          toFunctionBodyJs: ->
            (for s, i in lines = @statementOrBlankLines when present js = s.toJs()
              if i == lines.length - 1
                "return #{js}"
              else
                js
            ).join(";\n") + ";"

      statementOrBlankLine: [
        "statement"
        /\n/
      ]
      statement: 'expression end'
      end: ['blocks end', '/\n|$/']

      blocks: 'block+'
      block: Extensions.IndentBlocks.ruleProps

      expression:
        pattern: "expressionWithoutBinaryOperator operatorAndExpression*"
        node: toJs: ->
          ops = for op in compactFlatten [@expressionWithoutBinaryOperator, @operatorAndExpressions]
            op.toJs()
          ops.join ' '

      operatorAndExpression:
        pattern: "_? operator _? expressionWithoutBinaryOperator"
        node: toJs: ->
          "#{@operator} #{@expressionWithoutBinaryOperator.toJs()}"

      assign: [
        pattern: "assignable _* /=/ _* expression"
        node: toJs: -> "#{@assignable.toJs()} = #{@expression.toJs()}"
      ]

      expressionWithoutBinaryOperator: wordsArray "
        assign
        literal
        controlStatement
        invocation
        value
        functionDefinition
        "

      controlStatement: wordsArray "ifStatement unlessStatement"

      ifStatement:
        pattern: "'if' _ expression block optionalElseClause?"
        node: toJs: ->
          "if (#{@expression.toJs()}) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

      unlessStatement:
        pattern: "'unless' _ expression block optionalElseClause?"
        node: toJs: ->
          "if (!(#{@expression.toJs()})) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

      optionalElseClause:
        pattern: "/\nelse/ block"
        node: toJs: -> " else {#{@block.toJs()}}"

      functionDefinition: [
        {
          pattern: "'->' _* expression"
          node: toJs: -> "(function() {return #{@expression.toJs()};})"
        }
        {
          pattern: "'->' _* block"
          node: toJs: -> "(function() {#{@block.toFunctionBodyJs()}})"
        }
      ]

      value: "assignable"

      invocation:
        pattern: "value _ arguments"
        node: toJs: ->
          "#{@value.toJs()}(#{@arguments.toJs()})"

      arguments:
        pattern: "expression commaExpression*"
        node: toJs: ->
          args = for arg in compactFlatten [@expression, @commaExpressions]
            arg.toJs()

          args.join ', '

      commaExpression:
        pattern: " _? ',' _? expression"
        node: toJs: -> @expression.toJs()

      assignable:
        pattern: "simpleAssignable accessor*"
        node: toJs: -> "#{@simpleAssignable.toJs()}#{(a.toJs() for a in @accessors || []).join ''}"

      simpleAssignable: [
        "identifier"
      ]

      accessor: [
        {
          pattern: "'.' simpleAssignable"
          node: toJs: -> ".#{@simpleAssignable.toJs()}"
        }
        {
          pattern: "'[' _* expression _* ']'"
          node: toJs: -> "[#{@expression.toJs()}]"
        }
      ]

      identifier:
        pattern:
          ///
          (?!\d)
          ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
          ( [^\n\S]* : (?!:) )?  # Is this a property name?
          ///
        node: toJs: -> @toString()

      operator: wordsArray "logicOperator shiftOperator compareOperator mathOperator"

      logicOperator:    /// && | \|\| | & | \| | \^ ///
      shiftOperator:    /// << | >> | >>> ///
      compareOperator:  /// == | != | < | > | <= | >= ///
      mathOperator:     /// [-+*/%] | // | %% ///

      literal: wordsArray "boolLiteral numberLiteral stringLiteral"

      _: / +/

    @rule
      boolLiteral:   pattern: /false|true/, node: toJs: -> @toString()
      numberLiteral: pattern: /[0-9]+/,     node: toJs: -> @toString()

      stringLiteral: [
        {pattern: /// ' ( [^\\'] | \\[\s\S] )* ' ///, node: toJs: -> @toString()}
        {pattern: /// " ( [^\\"] | \\[\s\S] )* " ///, node: toJs: -> @toString()}
        # /// "( [^\\"\#] | \\[\s\S] |           \#(?!\{) )*" ///
        # /// ( [^\\']  | \\[\s\S] | '(?!'')            )* ///
        # /// ( [^\\"#] | \\[\s\S] | "(?!"") | \#(?!\{) )* ///
      ]

