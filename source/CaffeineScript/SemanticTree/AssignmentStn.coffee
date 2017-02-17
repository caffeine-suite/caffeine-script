Foundation = require 'art-foundation'
BinaryOperatorStn = require './BinaryOperatorStn'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

IdentifierStn = require './IdentifierStn'
ReferenceStn = require './ReferenceStn'
ArrayStn = require './ArrayStn'

supportedOperatorsRegExp = /^([-+*\/%]|)$/

defineModule module, class AssignmentStn extends require './ValueBaseCaptureStn'
  constructor: ({@operator=""}, [@lValue, @rValue]) ->
    super

  updateScope: (@scope) ->
    if @lValue.type == "Reference"
      @scope.addIdentifierAssigned @lValue.toJs()
    super

  transform: ->
    super.postSuperTransform()

  # TODO - I need a better way of saying "do all the transforms for the children, and then maybe I'll do some more transforms here"
  postSuperTransform: ->
    unless @operator.match supportedOperatorsRegExp
      {value1, value2} = @getValueWithBaseCapture @lValue

      AssignmentStn.Factory {},
        value2
        BinaryOperatorStn
          operator: @operator
          value1
          @rValue
    else
      @

  toJs: ->
    if @operator.match supportedOperatorsRegExp
      "#{@lValue.toJs()} #{@operator}= #{@rValue.toJsExpression()}"
    else
      "#{@lValue.toJs()} = #{@lValue.toJsExpression()} #{@operator} #{@rValue.toJsExpression()}"
