Foundation = require 'art-foundation'
BinaryOperatorStn = require './BinaryOperatorStn'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

UniqueIdentifierHandle = require './UniqueIdentifierHandle'

SemanticTree = require "./namespace"

defineModule module, class ValueBaseCaptureStn extends require './BaseStn'
  @abstractClass()

  getValueWithBaseCapture: (accessorStn)->
    unless accessorStn.isAccessor && !accessorStn.children[0].isReference
      return value1: accessorStn, value2: accessorStn

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

  getValueWithCapture: (accessorStn)->
    unless accessorStn.isAccessor
      return value1: accessorStn, value2: accessorStn

    {AssignmentStn, ReferenceStn, IdentifierStn} = SemanticTree

    value1:
      AssignmentStn {},
        IdentifierStn identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle "base"
        accessorStn

    value2: ReferenceStn identifierHandle: baseIdentifierHandle
