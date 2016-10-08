Foundation = require 'art-foundation'

{log, a, w, m, mergeInto, defineModule, compactFlatten, present, arrayToTruthMap, merge, escapeJavascriptString, BaseObject, newObjectFromEach} = Foundation
StatementsStn = require './StatementsStn'
LetStn = require './LetStn'

defineModule module, ->
  (toExtend) -> class ScopeStnMixin extends toExtend

    addIdentifierUsed: (identifier)->
      (@props.identifiersUsed ||= {})[identifier] = true

    addIdentifierAssigned: (identifier)->
      (@props.identifiersAssigned ||= {})[identifier] = true

    addChildScope: (child) ->
      (@childScopes ||= []).push child
      # log ADDCHILDSCOPE:
      #   self: @
      #   childScopes: @childScopes

    getUnusedVariableName: (rootName)->
      {identifiersUsed} = @
      count = 1
      out = rootName
      out = "#{rootName}#{count++}" while identifiersUsed[out]
      out

    getAutoLets: ->
      if @props.identifiersAssigned && (identifiers = (Object.keys @identifiersNeedLet)).length > 0
        "let #{identifiers.join ', '}"

    @getter
      argumentNames: -> []

      identifiersNeedLet: ->
        {identifiersAssignedInParentScopes, identifiersAssigned} = @
        newObjectFromEach identifiersAssigned, (out, k, v) ->
          unless identifiersAssignedInParentScopes[k]
            out[k] = true

      identifiersUsed: -> @props.identifiersUsed || {}

      identifiersUsedButNotAssigned: ->
        return @props.identifiersUsedButNotAssigned if @props.identifiersUsedButNotAssigned
        assigned = @identifiersAssignedInParentThisOrChildrenScopes
        ret = newObjectFromEach @identifiersUsed, (out, k, v) ->
          out[k] = true unless assigned[k]
        # log childScopes: @childScopes, self: @
        for childScope in @childScopes || []
          mergeInto ret, childScope.identifiersUsedButNotAssigned
        @props.identifiersUsedButNotAssigned = ret

      identifiersAssignedInParentThisOrChildrenScopes: -> merge @identifiersAssigned, @identifiersAssignedInParentScopes
      identifiersAssigned: -> @props.identifiersAssigned
      identifiersAssignedInParentScopes: ->
        if @scope && @scope != @
          merge @scope.identifiersAssignedInParentScopes, @scope.identifiersAssigned, arrayToTruthMap @argumentNames
        else {}

    # transform: ->
    #   if @props.identifiersAssigned
    #     identifiers = (id for id, __ of @identifiersNeedLet)
    #     @cloneWithNewStatements compactFlatten [
    #       LetStn identifiers: identifiers if identifiers.length > 0
    #       @statements.transformChildren()
    #     ]
    #   else
    #     super
