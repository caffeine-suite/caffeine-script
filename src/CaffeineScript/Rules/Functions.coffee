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
      pattern: "argsDefinition? _arrow_ complexExpression"
      m pattern: "argsDefinition? _arrow_ block?"
  ,
    toJs: ->

      preBody = for prop in getPropertySetters(@argsDefinition)
        "this.#{prop} = #{prop};"

      preBody = if preBody.length > 0 then preBody.join(" ") + " " else ""

      body = if @complexExpression
        "{#{preBody}return #{@complexExpression.toJs()};}"
      else if @block
        "{#{preBody}#{@block.toFunctionBodyJs()}}"
      else "{#{preBody}}"

      if @_arrow_.text.match /=>/
        "((#{@argsDefinition?.toJs() || ""}) => #{body})"
      else
        "(function(#{@argsDefinition?.toJs() || ""}) #{body})"

  @rule

    argsDefinition:
      pattern: "openParen_ argDefList? _closeParen"
      toJs: -> @argDefList.toJs()

    argDefList: a
      pattern: "argDef _comma_ argDefList", toJs: -> "#{@argDef.toJs()}, #{@argDefList.toJs()}"
      m pattern: "argDef _ argDefList", toJs: -> "#{@argDef.toJs()}, #{@argDefList.toJs()}"
      m pattern: "lastArgDef"

    lastArgDef: a
      pattern: "argIdentifier defaultValue", toJs: -> "#{@argIdentifier.toJs()} #{@defaultValue.toJs()}"
      m pattern: "argIdentifier etc",        toJs: -> "...#{@argIdentifier.toJs()}"
      m pattern: "argIdentifier"

    defaultValue:
      pattern: "_equals_ expression"
      toJs: -> "= #{@expression.toJs()}"

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

    # when we allow '...' in the middle:
    # argDef:
    #   pattern: "identifier etc?"
    #   toJs: ->
    #     if @etc
    #       "...#{@identifier.toJs()}"
    #     else
    #       @identifier.toJs()

    etc: "'...'"

    arguments:
      pattern: "expression _commaExpression*"
      toJs: ->
        args = for arg in a = compactFlatten [@expression, @_commaExpressions]
          arg.toJs()

        args.join ', '

    _commaExpression:
      pattern: "_comma_ expression"
      toJs: -> @expression.toJs()

