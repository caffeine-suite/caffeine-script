Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

ArrayStn = require './ArrayStn'

defineModule module, class AssignmentStn extends require './BaseStn'
  constructor: (props, [@lValue, @rValue...]) ->
    if @rValue.length > 1
      @rValue = ArrayStn @rValue
    else
      @rValue = @rValue[0]
    super props, [@lValue, @rValue]

  toJs: ->  "#{@lValue.toJs()} = #{@rValue.toJsExpression()}"