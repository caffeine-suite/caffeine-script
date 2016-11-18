Foundation = require 'art-foundation'
BinaryOperatorStn = require './BinaryOperatorStn'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

ArrayStn = require './ArrayStn'

defineModule module, class AssignmentStn extends require './BaseStn'
  constructor: ({@operator}, [@lValue, @rValue]) ->
    super

  updateScope: (@scope) ->
    if @lValue.type == "Reference"
      @scope.addIdentifierAssigned @lValue.toJs()
    super

  transform: ->
    if @operator
      AssignmentStn.Factory {},
        @lValue
        BinaryOperatorStn
          operator: @operator
          @lValue # should this be cloned? I've tried to make Stns Pure-functional, so this should be OK.
          @rValue
    else
      super

  toJs: ->
    if @operator
      "#{@lValue.toJs()} = #{@lValue.toJsExpression()} #{@operator} #{@rValue.toJsExpression()}"
    else
      "#{@lValue.toJs()} = #{@rValue.toJsExpression()}"
