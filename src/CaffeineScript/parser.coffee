Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, a, w, m, defineModule, compactFlatten, present} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

defineModule module, ->

  class CaffeineScriptParser extends Parser
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
          toJsList: -> (js for s in @statementOrBlankLines when present js = s.toJs()).join ", "
          toFunctionBodyJs: ->
            (for s, i in lines = @statementOrBlankLines when present js = s.toJs()
              if i == lines.length - 1
                "return #{js}"
              else
                js
            ).join(";\n") + ";"
      # root: pattern: "array", toJs: -> @array.toJs() + ";"

      statementOrBlankLine: [
        "statement"
        /\n/
      ]
      statement: 'expression end'
      end: ['blocks end', '/\n|$/']

      blocks: 'block+'
      block: Extensions.IndentBlocks.ruleProps

      expression: a
        pattern: "implicitArray"
        m
          pattern: "expressionWithoutImplicitArray"

      expressionWithoutImplicitArray:
        pattern: "expressionWithoutBinaryOperator operatorAndExpression*"
        toJs: ->
          ops = for op in compactFlatten [@expressionWithoutBinaryOperator, @operatorAndExpressions]
            op.toJs()
          ops.join ' '

      operatorAndExpression:
        pattern: "_? operator _? expressionWithoutBinaryOperator"
        toJs: ->
          "#{@operator} #{@expressionWithoutBinaryOperator.toJs()}"

      assign: [
        pattern: "assignable _* /=/ _* expression"
        toJs: -> "#{@assignable.toJs()} = #{@expression.toJs()}"
      ]

      expressionWithoutBinaryOperator: w "
        assign
        controlStatement
        array
        object
        invocation
        value
        functionDefinition
        "

      value: w "assignable literal"

      controlStatement: w "ifStatement unlessStatement"

      ifStatement:
        pattern: "'if' _ expression block optionalElseClause?"
        toJs: ->
          "if (#{@expression.toJs()}) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

      unlessStatement:
        pattern: "'unless' _ expression block optionalElseClause?"
        toJs: ->
          "if (!(#{@expression.toJs()})) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

      optionalElseClause:
        pattern: "/\nelse/ block"
        toJs: -> " else {#{@block.toJs()}}"

      functionDefinition: [
        {
          pattern: "'->' _* expression"
          toJs: -> "(function() {return #{@expression.toJs()};})"
        }
        {
          pattern: "'->' _* block"
          toJs: -> "(function() {#{@block.toFunctionBodyJs()}})"
        }
      ]

      invocation:
        pattern: "value _ arguments"
        toJs: ->
          "#{@value.toJs()}(#{@arguments.toJs()})"

      arguments:
        pattern: "expressionWithoutImplicitArray commaExpression*"
        toJs: ->
          args = for arg in compactFlatten [@expressionWithoutImplicitArray, @commaExpressions]
            arg.toJs()

          args.join ', '

      commaExpression:
        pattern: " _? ',' _? expressionWithoutImplicitArray"
        toJs: -> @expressionWithoutImplicitArray.toJs()

      assignable:
        pattern: "simpleAssignable accessor*"
        toJs: -> "#{@simpleAssignable.toJs()}#{(a.toJs() for a in @accessors || []).join ''}"

      simpleAssignable: [
        "identifier"
      ]

      accessor: [
        {
          pattern: "'.' simpleAssignable"
          toJs: -> ".#{@simpleAssignable.toJs()}"
        }
        {
          pattern: "'[' _* expressionWithoutImplicitArray _* ']'"
          toJs: -> "[#{@expressionWithoutImplicitArray.toJs()}]"
        }
      ]

      identifier:
        pattern:
          ///
          (?!\d)
          ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
          ///
        toJs: -> @toString()

      operator: w "logicOperator shiftOperator compareOperator mathOperator"

      logicOperator:    /// && | \|\| | & | \| | \^ ///
      shiftOperator:    /// << | >> | >>> ///
      compareOperator:  /// == | != | < | > | <= | >= ///
      mathOperator:     /// [-+*/%] | // | %% ///

      _: / +/

      implicitArray: a
        pattern: "value / *, */ valueList"
        toJs: -> "[#{@value.toJs()}, #{@valueList.toJs()}]"
        m
          pattern: "literal _ valueList"
          toJs: -> "[#{@literal.toJs()}, #{@valueList.toJs()}]"

      array: a
        pattern: "'[' _? valueList _? ']'"
        toJs: -> "[#{@valueList.toJs()}]"
        m
          pattern: "'[]' _? valueList"
          toJs: -> "[#{@valueList.toJs()}]"
        m
          pattern: "'[]' _? block"
          toJs: -> "[#{@block.toJsList()}]"
        m
          pattern: "'[]'"
          toJs: -> @toString()

      remainingMultiLineImplicitObject: a

        pattern: "valuePropertyWithImplicitArrays /( *\n)+/ remainingMultiLineImplicitObject"
        toJs: -> "#{@valuePropertyWithImplicitArrays.toJs()}, #{@remainingMultiLineImplicitObject.toJs()}"
        m
          pattern: "valuePropertyWithImplicitArrays"

      implicitObject:
        pattern: "propertyList"

      object: a
        pattern: "'{' _? propertyList _? '}'"
        toJs: -> "{#{@propertyList.toJs()}}"
        m
          pattern: "remainingMultiLineImplicitObject &/ *\n|$/"
          toJs: -> "{#{@remainingMultiLineImplicitObject.toJs()}}"
        m
          pattern: "implicitObject"
          toJs: -> "{#{@implicitObject.toJs()}}"
        m
          pattern: "'{}' _? propertyList"
          toJs: -> "{#{@propertyList.toJs()}}"
        m
          pattern: "'{}' _? block"
          toJs: -> @block.toJsList()
        m
          pattern: "'{}'"
          toJs: -> @toString()

    @rule
      propertyList: a
        pattern: "valueProperty comma propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"
        m pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
        m pattern: "valueProperty"

      valueProperty:
        pattern: "identifier colon expressionWithoutImplicitArray", toJs: -> "#{@identifier.toJs()}: #{@expressionWithoutImplicitArray.toJs()}"

      valuePropertyWithImplicitArrays:
        pattern: "identifier colon expression", toJs: -> "#{@identifier.toJs()}: #{@expression.toJs()}"

      literalProperty:
        pattern: "identifier colon literal", toJs: -> "#{@identifier.toJs()}: #{@literal.toJs()}"

      valueList: a
        pattern: "value comma valueList", toJs: -> "#{@value.toJs()}, #{@valueList.toJs()}"
        m pattern: "literal _ valueList", toJs: -> "#{@literal.toJs()}, #{@valueList.toJs()}"
        m pattern: "value", toJs: -> @value.toJs()

      colon: / *: */
      comma: / *, */

    @rule
      literal: w "boolLiteral numberLiteral stringLiteral"

      boolLiteral:   pattern: /false|true/, toJs: -> @toString()
      numberLiteral: pattern: /[0-9]+/,     toJs: -> @toString()

      stringLiteral: a
        pattern: /// ' ( [^\\'] | \\[\s\S] )* ' ///, toJs: -> @toString()
        m pattern: /// " ( [^\\"] | \\[\s\S] )* " ///, toJs: -> @toString()
        # /// "( [^\\"\#] | \\[\s\S] |           \#(?!\{) )*" ///
        # /// ( [^\\']  | \\[\s\S] | '(?!'')            )* ///
        # /// ( [^\\"#] | \\[\s\S] | "(?!"") | \#(?!\{) )* ///

