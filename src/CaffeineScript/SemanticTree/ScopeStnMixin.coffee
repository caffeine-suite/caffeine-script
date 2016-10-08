Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, arrayToTruthMap, merge, escapeJavascriptString, BaseObject, newObjectFromEach} = Foundation
StatementsStn = require './StatementsStn'
LetStn = require './LetStn'

defineModule module, ->
  (toExtend) -> class ScopeStnMixin extends toExtend

    addIdentifierUsed: (identifier)->
      (@props.identifiersUsed ||= {})[identifier] = true

    addIdentifierAssigned: (identifier)->
      (@props.identifiersAssigned ||= {})[identifier] = true

    getUnusedVariableName: (rootName)->
      {identifersUsed} = @
      count = 1
      out = rootName
      out = "#{rootName}#{count++}" while identifersUsed[out]
      out

    @getter
      argumentNames: -> []

      identifiersNeedLet: ->
        {identifiersAssignedInParentScopes, identifiersAssigned} = @
        newObjectFromEach identifiersAssigned, (out, k, v) ->
          unless identifiersAssignedInParentScopes[k]
            out[k] = true

      identifersUsed: -> merge @identifiersAssigned, @identifiersAssignedInParentScopes
      identifiersAssigned: -> @props.identifiersAssigned
      identifiersAssignedInParentScopes: ->
        if @scope && @scope != @
          merge @scope.identifiersAssignedInParentScopes, @scope.identifiersAssigned, arrayToTruthMap @argumentNames
        else {}

    transform: ->
      if @props.identifiersAssigned
        identifiers = (id for id, __ of @identifiersNeedLet)
        @cloneWithNewStatements compactFlatten [
          LetStn identifiers: identifiers if identifiers.length > 0
          @statements.transformChildren()
        ]
      else
        super
