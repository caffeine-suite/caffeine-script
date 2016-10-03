Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

FunctionDefinitionArgsStn = require './FunctionDefinitionArgsStn'

defineModule module, class FunctionDefinitionArgStn extends require './BaseStn'

  toJs: ->
    [identifier, defaultValue] = @children
    "#{if @props.rest then '...' else ''}#{identifier.toJs()}#{if defaultValue then " = #{defaultValue.toJs()}" else ""}"
