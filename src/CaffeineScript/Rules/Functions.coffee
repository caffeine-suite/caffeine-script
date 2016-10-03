{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

getPropertySetters = (node, list = []) ->
  return list unless node
  if prop = node.shouldSetProperty?()
    list.push prop
  else
    for match in node.matches
      getPropertySetters match, list
  list

module.exports = ->
  @rule
    functionDefinition: a
      pattern: "argsDefinition? _arrow_ functionDefinitionBodyBlock?"
  ,
    stnFactory: "FunctionDefinitionStn"
    stnProps: -> bound: @_arrow_.text.match /=>/

  @rule
    functionDefinitionBodyBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "functionDefinitionBodyBlockSubParse"
    functionDefinitionBodyBlockSubParse:
      pattern: "statement*"
      stnFactory: "StatementsStn"

  @rule

    argsDefinition: a
      pattern: "openParen_ argDefList? _closeParen"
      toJs: -> @argDefList.toJs()
  ,
    stnFactory: "FunctionDefinitionArgsStn"

  @rule
    argDefList: a
      pattern: "argDef _comma_ argDefList", toJs: -> "#{@argDef.toJs()}, #{@argDefList.toJs()}"
      m pattern: "argDef _ argDefList", toJs: -> "#{@argDef.toJs()}, #{@argDefList.toJs()}"
      m pattern: "lastArgDef"

    defaultValue:
      pattern: "_equals_ expression"
      toJs: -> "= #{@expression.toJs()}"

  @rule
    lastArgDef: a
      pattern: "argIdentifier defaultValue", toJs: -> "#{@argIdentifier.toJs()} #{@defaultValue.toJs()}"
      m pattern: "argIdentifier etc",        toJs: -> "...#{@argIdentifier.toJs()}"
      m pattern: "argIdentifier"

    argDef:
      pattern: "argIdentifier defaultValue?"
      toJs: ->
        if @defaultValue
          "#{@argIdentifier.toJs()} #{@defaultValue.toJs()}"
        else
          @argIdentifier.toJs()

    argIdentifier:
      pattern: "at:/@/? identifier"
      toJs: -> @identifier.toJs()
      shouldSetProperty: -> @at && @identifier.toJs()
  ,
    stnFactory: "FunctionDefinitionArgStn"
    stnProps: -> rest: !!@etc

  @rule
    functionInvocation: a
      pattern: "openParen_ valueList? _closeParen",   toJs: -> "(#{@arguments?.toJs() || ""})"
      m pattern: "valueListBlock"
  ,
    stnFactory: "FunctionInvocationStn"

  @rule
    # when we allow '...' in the middle:
    # argDef:
    #   pattern: "identifier etc?"
    #   toJs: ->
    #     if @etc
    #       "...#{@identifier.toJs()}"
    #     else
    #       @identifier.toJs()

    etc: "'...'"

    # arguments:
    #   pattern: "expression _commaExpression*"
    #   toJs: ->
    #     args = for arg in a = compactFlatten [@expression, @_commaExpressions]
    #       arg.toJs()

    #     args.join ', '

    # _commaExpression:
    #   pattern: "_argsSeparator+ expression"
    #   toJs: -> @expression.toJs()

    # _argsSeparator:
    #   pattern: / *(,[\n ]*|\n)/

