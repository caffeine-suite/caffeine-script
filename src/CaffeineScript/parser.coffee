Foundation = require 'art-foundation'
BabelBridge = require 'babel-bridge'

{log, a, w, m, defineModule, compactFlatten, present} = Foundation
{Parser, Nodes, Extensions} = BabelBridge
{RuleNode} = Nodes

Rules = require './Rules'

defineModule module, ->

  class CaffeineScriptParser extends Parser
    @nodeBaseClass: class CafScriptNode extends Nodes.Node

      toJs: ->
        for match in @matches when match.toJs
          return match.toJs()

        @toString()

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

    for modName, mod of Rules.modules
      @rule mod

    @rule
      statementOrBlankLine: [
        "statement"
        /\n/
      ]
      statement: a
        pattern: 'complexExpression end'
        m pattern: 'complexExpression / +if +/ complexExpression end', toJs: -> "if (#{@expressions[1].toJs()}) {#{@expressions[0].toJs()}}"

      end: '/\n|$/'

      blocks: 'block+'
      block: Extensions.IndentBlocks.ruleProps

      complexExpression: a
        pattern: "implicitArray"
        m
          pattern: "expression"

      expression: w "binOpExpression expressionWithoutBinOps"

      expressionWithoutBinOps: w "
        assign
        controlStatement
        structuredLiteral
        invocation
        value
        functionDefinition
        "

      assign: a
        pattern: "assignable / *= */ complexExpression", toJs: -> "#{@assignable.toJs()} = #{@complexExpression.toJs()}"
        m pattern: "assignable / *= */ block", toJs: -> "#{@assignable.toJs()} = #{@block.toImplicitArrayOrValueJs()}"

      invocation:
        pattern: "value _ arguments"
        toJs: ->
          "#{@value.toJs()}(#{@arguments.toJs()})"

      arguments:
        pattern: "expression commaExpression*"
        toJs: ->
          args = for arg in compactFlatten [@expression, @commaExpressions]
            arg.toJs()

          args.join ', '

      commaExpression:
        pattern: " _? ',' _? expression"
        toJs: -> @expression.toJs()

      value: w "existanceTest assignable literal"

      existanceTest:
        pattern: "assignable '?'"
        toJs: -> "(#{@assignable.toJs()} != null)"

      functionDefinition: [
        {
          pattern: "argDefinition? / *-> */ complexExpression"
          toJs: -> "(function(#{@argDefinition?.toJs() || ""}) {return #{@complexExpression.toJs()};})"
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
        "!reservedWord identifier"
      ]

      accessor: [
        {
          pattern: "'.' simpleAssignable"
          toJs: -> ".#{@simpleAssignable.toJs()}"
        }
        {
          pattern: "'[' _* expression _* ']'"
          toJs: -> "[#{@expression.toJs()}]"
        }
      ]

    @rule
      _:     / +/
      colon: / *: */
      comma: / *, */

      reservedWord: /if|while|unless/

      identifier:
        ///
        (?!\d)
        ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
        ///
