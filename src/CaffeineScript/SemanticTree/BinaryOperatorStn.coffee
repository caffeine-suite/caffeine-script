Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation
{binaryOperatorToJs} = require '../OperatorHelper'

applyParens = (expr) ->
  if expr.match /^([_a-z0-9]*\(.*\)|(([_a-z0-9]+)|(-?[0-9]+)))$/
    expr
  else
    "(#{expr})"

defineModule module, class BinaryOperatorStn extends require './BaseStn'

  constructor: (props, [@left, @right]) ->
    super

  toJs: -> @toJsExpression()

  toJsStatement: -> @toJsExpression skipParens: true

  toJsExpression: (options = {})->
    {skipParens} = options
    left = applyParens @left.toJsExpression()
    right = applyParens @right.toJsExpression()

    contents = binaryOperatorToJs @props.operand, left, right
    if skipParens
      contents
    else
      "(#{contents})"
