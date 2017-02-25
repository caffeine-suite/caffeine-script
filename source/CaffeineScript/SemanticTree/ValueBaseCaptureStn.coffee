Foundation = require 'art-foundation'
BinaryOperatorStn = require './BinaryOperatorStn'

{mergeInto, log, a, w, m, isArray, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

UniqueIdentifierHandle = require './UniqueIdentifierHandle'

SemanticTree = require "./namespace"

defineModule module, class ValueBaseCaptureStn extends require './BaseStn'
  @abstractClass()

  getValueWithBaseCapture: (accessorStn)->
    if accessorStn.isAccessor && !accessorStn.children[0].isReference
      {AssignmentStn, ReferenceStn, IdentifierStn} = SemanticTree

      {value, key} = accessorStn
      value1: new accessorStn.class accessorStn.props, [
          AssignmentStn {},
            IdentifierStn identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle "base"
            value
          key
        ]

      value2: new accessorStn.class accessorStn.props, [
          ReferenceStn identifierHandle: baseIdentifierHandle
          key
        ]
    else if accessorStn.isAccessor
      value1: accessorStn, value2: accessorStn
    else
      @getValueWithCapture accessorStn

  getValueWithCapture: (accessorStn)->
    if accessorStn.type == "Identifier" || accessorStn.type == "Reference"
      return value1: accessorStn, value2: accessorStn

    {AssignmentStn, ReferenceStn, IdentifierStn} = SemanticTree

    value1:
      AssignmentStn {},
        IdentifierStn identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle "base"
        accessorStn

    value2: ReferenceStn identifierHandle: baseIdentifierHandle


  ###
  NOTES:

  IMPORTANT: This is used by AccessorStn and FunctionInvocationStn to perform their @transform
  For the purpose of this transform, FunctionInvocations are considered a form of accessor.

  I seriously considered doing this the same way I handle binary operators. It's very similar in
  that it's a precidence issue. Existance-accessors have "lower" precidence than non-existance
  accessors. And the are left-associative. And that should be it... except! Except, in a
  normal binary operator chain, all the leaf nodes are atomic from the perspective of the chain.
  They can be moved anywhere in the constructed tree structure without losing their semantics.
  However, with an accessor-chain, the existance operator's left value becomes the left-most leaf
  value for its right-value - with a "valueCapture". I could have solve that, but this is probably
  just as easy and I already had it half working.

  ###
  transformAccessorChain: (current = @)->
    accessorChain = while current?.type == "Accessor" || current?.type == "FunctionInvocation"
      accessor = current
      current = current.value
      accessor

    accessorChain = accessorChain.reverse()
    # log transformAccessorChain: {accessorChain}

    out = @transformAccessorChainR accessorChain[0].value.transform(), accessorChain

    # don't lose the props - particularly props.label - SwitchStn needs it for the else-clause, and probably others do too.
    mergeInto out.props, @props, out.props
    out

  transformAccessorChainR: (value, accessorChain) ->
    # log transformAccessorChainR: {value, accessorChain}
    # TODO: transform value

    for accessor, i in accessorChain
      # TODO: transform key
      {key, isFunctionInvocation} = accessor
      if isArray key
        key = (k.transform() for k in key)
      else
        key = key.transform()
      if accessor.existanceTest
        reset = accessorChain.slice i

        return @createExistanceAccessorStn value, isFunctionInvocation, (checkedValueStn) =>
          access = @createAccessorStn checkedValueStn, key, isFunctionInvocation
          if i < accessorChain.length - 1
            @transformAccessorChainR access, accessorChain.slice i + 1
          else
            access

      else
        value = @createAccessorStn value, key, isFunctionInvocation

    value

  createAccessorStn: (value, key, isFunctionInvocation) ->
    if isFunctionInvocation
      SemanticTree.FunctionInvocationStn value, key
    else
      SemanticTree.AccessorStn value, key

  createExistanceAccessorStn: (value, forFunctionInvocation, createRightStn) ->
    {value1:toCheckValue, value2:checkedValueStn} = if forFunctionInvocation
      @getValueWithBaseCapture value
    else
      @getValueWithCapture value

    SemanticTree.BinaryOperatorStn
      operator: "&&"
      SemanticTree.FunctionInvocationStn null,
        SemanticTree.IdentifierStn identifier: if forFunctionInvocation then "Caf.isF" else "Caf.exists"
        toCheckValue
      createRightStn checkedValueStn
