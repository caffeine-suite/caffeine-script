Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, merge, present, escapeJavascriptString, BaseObject} = Foundation

FunctionDefinitionArgsStn = require './FunctionDefinitionArgsStn'
ScopeStnMixin = require './ScopeStnMixin'
StatementsStn = require './StatementsStn'

defineModule module, class FunctionDefinitionStn extends ScopeStnMixin require './BaseStn'

  constructor: (props, children) ->
    if children.length == 1
      [onlyChild] = children
      unless onlyChild instanceof FunctionDefinitionArgsStn.class
        children = [FunctionDefinitionArgsStn(), children[0]]

    [@arguments, @statements] = children
    super props, children

  updateScope: (@scope)->
    child.updateScope @ for child in @children

  cloneWithNewStatements: (statements)->
    new @class @props, [@arguments, StatementsStn compactFlatten statements]

  @getter
    needsParens: -> false
    needsParensAsStatement: -> !@props.bound
    argumentNames: ->
      @arguments.argumentNames

  toJs: ->
    [argsDef, body] = @children
    statements = []
    argsDef = if argsDef

      statements = (statements for arg in argsDef.children when statements = arg.getFunctionPreBodyStatementsJs())
      argsDef.toJs()
    else "()"

    statements = compactFlatten [statements, body?.toFunctionBodyJs()]
    body = "{#{statements.join ' '}}"

    if @props.bound
      "#{argsDef} => #{body}"
    else
      "function#{argsDef} #{body}"
