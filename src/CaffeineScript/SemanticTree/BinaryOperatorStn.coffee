Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation
{binaryOperatorToJs} = require '../OperatorHelper'

defineModule module, class BinaryOperatorStn extends require './BaseStn'

  constructor: (props, [@left, @right]) ->
    super

  toJs: -> @toJsExpression()

  toJsStatement: -> @toJsExpression skipParens: true

  toJsExpression: (options = {})->
    {skipParens} = options
    contents = binaryOperatorToJs @props.operand, @left.toJsExpression(), @right.toJsExpression()
    if skipParens
      contents
    else
      "(#{contents})"
