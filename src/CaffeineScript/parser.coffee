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
          getStatements: -> s for s in @statementOrBlankLines when s.statement

          toJs: -> (js for s in @statementOrBlankLines when present js = s.toJs()).join(";\n") + ";"
          toJsList: -> (js for s in @statementOrBlankLines when present js = s.toJs()).join ", "
          toFunctionBodyJs: ->
            (for s, i in lines = @statementOrBlankLines when present js = s.toJs()
              if i == lines.length - 1
                "return #{js}"
              else
                js
            ).join(";\n") + ";"
          toImplicitArrayOrValueJs: ->
            statements = @getStatements()
            if statements.length == 1
              statements[0].toJs()
            else
              "[#{(s.toJs() for s in statements).join ', '}]"

      # root: pattern: "array", toJs: -> @array.toJs() + ";"

      statementOrBlankLine: [
        "statement"
        /\n/
      ]
      statement: a
        pattern: 'expression end'
        m pattern: 'expression / +if +/ expression end', toJs: -> "if (#{@expressions[1].toJs()}) {#{@expressions[0].toJs()}}"

      end: '/\n|$/'

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

      expressionWithoutBinaryOperator: w "
        assign
        controlStatement
        array
        object
        invocation
        value
        functionDefinition
        "

      assign: a
        pattern: "assignable / *= */ expression", toJs: -> "#{@assignable.toJs()} = #{@expression.toJs()}"
        m pattern: "assignable / *= */ block", toJs: -> "#{@assignable.toJs()} = #{@block.toImplicitArrayOrValueJs()}"

      controlStatement: w "ifStatement unlessStatement"

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

      value: w "existanceTest assignable literal"

      existanceTest:
        pattern: "assignable '?'"
        toJs: -> "(#{@assignable.toJs()} != null)"

      ifStatement:
        pattern: "'if' _ expression _? block optionalElseClause?"
        toJs: ->
          "if (#{@expression.toJs()}) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

      unlessStatement:
        pattern: "'unless' _ expression _? block optionalElseClause?"
        toJs: ->
          "if (!(#{@expression.toJs()})) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

      optionalElseClause:
        pattern: "/\nelse/ block"
        toJs: -> " else {#{@block.toJs()}}"

      functionDefinition: [
        {
          pattern: "argDefinition? / *-> */ expression"
          toJs: -> "(function(#{@argDefinition?.toJs() || ""}) {return #{@expression.toJs()};})"
        }
        {
          pattern: "argDefinition? / *-> */ block"
          toJs: -> "(function() {#{@block.toFunctionBodyJs()}})"
        }
      ]

      argDefinition:
        pattern: "/\\( */ argList / *\\)/"
        toJs: -> @argList.toString()

      argList: a
        pattern: "identifier comma argList", toJs: -> "#{@identifier.toJs()}, #{@argList.toJs()}"
        m pattern: "identifier _ argList", toJs: -> "#{@identifier.toJs()}, #{@argList.toJs()}"
        m pattern: "identifier", toJs: -> @identifier.toJs()

      assignable:
        pattern: "simpleAssignable accessor*"
        toJs: -> "#{@simpleAssignable.toJs()}#{(a.toJs() for a in @accessors || []).join ''}"

      simpleAssignable: [
        "!valueKeyword identifier"
      ]

      valueKeyword: /if|while|unless/

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
        pattern: "expressionWithoutImplicitArray / *, */ valueList"
        toJs: -> "[#{@expressionWithoutImplicitArray.toJs()}, #{@valueList.toJs()}]"
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

      implicitObject:
        pattern: "propertyList"

      object: a
        pattern: "'{' _? propertyList _? '}'"
        toJs: -> "{#{@propertyList.toJs()}}"
        m
          pattern: "implicitObjectWithTwoOrMorePropsOnOneLine"
          toJs: -> "{#{@implicitObjectWithTwoOrMorePropsOnOneLine.toJs()}}"

        m
          pattern: "multiLineImplicitObject &/ *\n|$/"
          toJs: -> "{#{@multiLineImplicitObject.toJs()}}"

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

      multiLineImplicitObject: a

        pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithImplicitArrays /( *\n)+/ multiLineImplicitObject"
        toJs: -> "#{@valuePropertyWithImplicitArrays.toJs()}, #{@multiLineImplicitObject.toJs()}"
        m
          pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithImplicitArrays"


    @rule
      implicitObjectWithTwoOrMorePropsOnOneLine:
        pattern: "valueProperty comma propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"

      propertyList: a
        pattern: "valueProperty comma propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"
        m pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
        m pattern: "valueProperty"

      valueProperty:
        pattern: "identifier colon expressionWithoutImplicitArray", toJs: -> "#{@identifier.toJs()}: #{@expressionWithoutImplicitArray.toJs()}"

      valuePropertyWithImplicitArrays: a
        pattern: "identifier colon expression", toJs: -> "#{@identifier.toJs()}: #{@expression.toJs()}"
        m pattern: "identifier colon block",    toJs: -> "#{@identifier.toJs()}: #{@block.toImplicitArrayOrValueJs()}"

      literalProperty:
        pattern: "identifier colon literal", toJs: -> "#{@identifier.toJs()}: #{@literal.toJs()}"

      valueList: a
        pattern: "expressionWithoutImplicitArray comma valueList", toJs: -> "#{@expressionWithoutImplicitArray.toJs()}, #{@valueList.toJs()}"
        m pattern: "literal _ valueList", toJs: -> "#{@literal.toJs()}, #{@valueList.toJs()}"
        m pattern: "expressionWithoutImplicitArray", toJs: -> @expressionWithoutImplicitArray.toJs()

      colon: / *: */
      comma: / *, */

    @rule
      literal: w "boolLiteral numberLiteral stringLiteral"

      boolLiteral:   pattern: /false|true/, toJs: -> @toString()
      numberLiteral: pattern: /-?[0-9]+/,     toJs: -> @toString()

      stringLiteral: a
        pattern: /// ' ( [^\\'] | \\[\s\S] )* ' ///, toJs: -> @toString()
        m pattern: /// " ( [^\\"] | \\[\s\S] )* " ///, toJs: -> @toString()
        m pattern: "':' identifier", toJs: -> "'#{@identifier.toString()}'"
        # /// "( [^\\"\#] | \\[\s\S] |           \#(?!\{) )*" ///
        # /// ( [^\\']  | \\[\s\S] | '(?!'')            )* ///
        # /// ( [^\\"#] | \\[\s\S] | "(?!"") | \#(?!\{) )* ///

