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

    @getter
      argumentNames: -> []

      identifiersNeedLet: ->
        {identifiersAssignedInParentScopes, identifiersAssigned} = @
        newObjectFromEach identifiersAssigned, (out, k, v) ->
          unless identifiersAssignedInParentScopes[k]
            out[k] = true

      identifiersAssigned: -> @props.identifiersAssigned
      identifiersAssignedInParentScopes: ->
        if @scope && @scope != @
          merge @scope.identifiersAssignedInParentScopes, @scope.identifiersAssigned, arrayToTruthMap @argumentNames
        else {}

    transform: ->
      if @props.identifiersAssigned
        @cloneWithNewStatements compactFlatten [
          LetStn identifier: id for id, __ of @identifiersNeedLet
          @statements.transformChildren()
        ]
      else
        super
