Foundation = require 'art-foundation'
BinaryOperatorStn = require './BinaryOperatorStn'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

IdentifierStn = require './IdentifierStn'
ReferenceStn = require './ReferenceStn'
ArrayStn = require './ArrayStn'
UniqueIdentifierHandle = require './UniqueIdentifierHandle'

defineModule module, class AssignmentStn extends require './ValueBaseCaptureStn'
  constructor: ({@operator}, [@lValue, @rValue]) ->
    super

  updateScope: (@scope) ->
    if @lValue.type == "Reference"
      @scope.addIdentifierAssigned @lValue.toJs()
    super

  transform: ->
    if @operator
      {value1, value2} = @getValueWithBaseCapture @lValue

      AssignmentStn.Factory {},
        value2
        BinaryOperatorStn
          operator: @operator
          value1
          @rValue
    else
      super

  toJs: ->
    if @operator
      "#{@lValue.toJs()} = #{@lValue.toJsExpression()} #{@operator} #{@rValue.toJsExpression()}"
    else
      "#{@lValue.toJs()} = #{@rValue.toJsExpression()}"
