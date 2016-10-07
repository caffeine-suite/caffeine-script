Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

FunctionDefinitionArgsStn = require './FunctionDefinitionArgsStn'

defineModule module, class FunctionDefinitionArgStn extends require './BaseStn'

  constructor: ({@assignThisProperty, @rest}, [@identifier, @defaultValue]) ->
    super

  @getter
    argumentName: -> @identifier.name

  getFunctionPreBodyStatementsJs: ->
    "this.#{@identifier.toJs()} = #{@identifier.toJs()};" if @assignThisProperty

  toJs: ->
    "#{if @rest then '...' else ''}#{@identifier.toJs()}#{if @defaultValue then " = #{@defaultValue.toJs()}" else ""}"
