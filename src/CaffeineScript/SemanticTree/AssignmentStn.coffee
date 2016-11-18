Foundation = require 'art-foundation'
BinaryOperatorStn = require './BinaryOperatorStn'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

IdentifierStn = require './IdentifierStn'
ReferenceStn = require './ReferenceStn'
ArrayStn = require './ArrayStn'
UniqueIdentifierHandle = require './UniqueIdentifierHandle'

defineModule module, class AssignmentStn extends require './BaseStn'
  constructor: ({@operator}, [@lValue, @rValue]) ->
    super

  updateScope: (@scope) ->
    if @lValue.type == "Reference"
      @scope.addIdentifierAssigned @lValue.toJs()
    super

  @getter
    lValuesWithBaseCapture: ->
      [base, accessorValue] = @lValue.children
      lValueRead: new @lValue.class @lValue.props, [
          AssignmentStn.Factory {},
            IdentifierStn identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle "base"
            base
          accessorValue
        ]

      lValueWrite: new @lValue.class @lValue.props, [
          ReferenceStn identifierHandle: baseIdentifierHandle
          accessorValue
        ]

  transform: ->
    if @operator
      {lValue} = @
      if lValue.isAccessor && !lValue.children[0].isReference
        {lValueRead, lValueWrite} = @lValuesWithBaseCapture
      else
        lValueRead = lValueWrite = lValue

      AssignmentStn.Factory {},
        lValueWrite
        BinaryOperatorStn
          operator: @operator
          lValueRead # should this be cloned? I've tried to make Stns Pure-functional, so this should be OK.
          @rValue
    else
      super

  toJs: ->
    if @operator
      "#{@lValue.toJs()} = #{@lValue.toJsExpression()} #{@operator} #{@rValue.toJsExpression()}"
    else
      "#{@lValue.toJs()} = #{@rValue.toJsExpression()}"
