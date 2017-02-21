Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject, formattedInspect} = Foundation
{binaryOperatorToJs, getOpPrecidence, getPrecidenceLevelIsLeftAssociative, operatorIsInfixJs} = require '../OperatorHelper'

defineModule module, class BinaryOperatorStn extends require './BaseStn'

  constructor: ({@operator}, [@left, @right]) ->
    super
    throw new Error "left and right required: #{formattedInspect {@left, @right}}" unless @left && @right

  toJs: -> @toJsExpression()

  toJsStatement: -> @toJsExpression skipParens: true

  updateScope: (@scope) ->
    if @operator == "?" && !@left.isReference
      {@uniqueIdentifierHandle} = @scope
    super

  toJsExpression: ->
    if @operator == "?" && @uniqueIdentifierHandle
      {identifier} = @uniqueIdentifierHandle
      "((#{identifier} = #{@left.toJsExpression()}) != null ? #{identifier} : #{@right.toJsExpression()})"
    else if !operatorIsInfixJs @operator
      binaryOperatorToJs @operator,
        @left.toJsExpression()
        @right.toJsExpression()
    else
      parentOperatorPrecidence = getOpPrecidence @operator
      binaryOperatorToJs @operator,
        @left.toJsExpressionWithParens  {parentOperatorPrecidence, isLeftOperand: true}
        @right.toJsExpressionWithParens {parentOperatorPrecidence, isLeftOperand: false}

  toJsExpressionWithParens: ({parentOperatorPrecidence, isLeftOperand}) ->
    operatorPrecidence = getOpPrecidence @operator
    # log toJsExpressionWithParens: {
    #   @operator
    #   operatorPrecidence
    #   parentOperatorPrecidence
    #   isLeftOperand
    #   operatorPrecidenceIsLeft: getPrecidenceLevelIsLeftAssociative operatorPrecidence
    # }
    if parentOperatorPrecidence? && operatorPrecidence < parentOperatorPrecidence
      @toJsExpression()
    else if parentOperatorPrecidence? && operatorPrecidence == parentOperatorPrecidence && isLeftOperand == getPrecidenceLevelIsLeftAssociative operatorPrecidence
      @toJsExpression()
    else
      "(#{@toJsExpression()})"
