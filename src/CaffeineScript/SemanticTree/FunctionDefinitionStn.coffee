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
    [argDef, body] = @children

    # preBody = for prop in getPropertySetters(@argsDefinition)
    #   "this.#{prop} = #{prop};"

    # preBody = if preBody.length > 0 then preBody.join(" ") + " " else ""
    preBody = ""

    body = "{#{preBody}#{body?.toFunctionBodyJs()||''}}"

    if @props.bound
      "(#{argDef.toJs()} => #{body})"
    else
      "(function#{argDef.toJs()} #{body})"
