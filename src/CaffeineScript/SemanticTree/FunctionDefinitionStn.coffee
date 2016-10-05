Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

FunctionDefinitionArgsStn = require './FunctionDefinitionArgsStn'

defineModule module, class FunctionDefinitionStn extends require './BaseStn'

  constructor: (props, children) ->
    if children.length == 1
      [onlyChild] = children
      unless onlyChild instanceof FunctionDefinitionArgsStn.class
        children = [FunctionDefinitionArgsStn(), children[0]]
    super props, children

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
