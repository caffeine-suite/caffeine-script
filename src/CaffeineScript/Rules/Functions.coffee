{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =

  functionDefinition: a
    pattern: "argDefinition? _arrow_ complexExpression"
    toJs: -> "(function(#{@argDefinition?.toJs() || ""}) {return #{@complexExpression.toJs()};})"
    m
      pattern: "argDefinition? _arrow_ block"
      toJs: -> "(function() {#{@block.toFunctionBodyJs()}})"

  argDefinition:
    pattern: "openParen_ argDefList? _closeParen"
    toJs: -> @argDefList.toString()

  argDefList: a
    pattern: "identifier _comma_ argDefList", toJs: -> "#{@identifier.toJs()}, #{@argDefList.toJs()}"
    m pattern: "identifier _ argDefList", toJs: -> "#{@identifier.toJs()}, #{@argDefList.toJs()}"
    m pattern: "identifier", toJs: -> @identifier.toJs()

  arguments:
    pattern: "expression _commaExpression*"
    toJs: ->
      args = for arg in a = compactFlatten [@expression, @_commaExpressions]
        arg.toJs()

      args.join ', '

  _commaExpression:
    pattern: "_comma_ expression"
    toJs: -> @expression.toJs()

