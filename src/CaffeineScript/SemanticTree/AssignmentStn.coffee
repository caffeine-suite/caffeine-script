Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

ArrayStn = require './ArrayStn'

defineModule module, class AssignmentStn extends require './BaseStn'
  constructor: (props, [@lValue, @rValue]) ->
    super

  toJs: ->
    "#{@lValue.toJs()} = #{@rValue.toJsExpression()}"