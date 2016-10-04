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
    left = @applyParens @left.toJsExpression()
    right = @applyParens @right.toJsExpression()

    contents = binaryOperatorToJs @props.operand, left, right
    if skipParens
      contents
    else
      "(#{contents})"
