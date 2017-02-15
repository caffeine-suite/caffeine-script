Foundation = require 'art-foundation'

{log, array, isString, a, w, m, mergeInto, defineModule, compactFlatten, present, arrayToTruthMap, merge, escapeJavascriptString, BaseObject, object} = Foundation
StatementsStn = require './StatementsStn'
LetStn = require './LetStn'

UniqueIdentifierHandle = require './UniqueIdentifierHandle'

defineModule module, ->

  (toExtend) -> class ScopeStnMixin extends toExtend

    addIdentifierUsed: (identifier)->
      throw new Error "bindUniqueIdentifier must be called AFTER all calls to addIdentifierUsed" if @_boundUniqueIdentifiers
      @identifiersUsed[identifier] = true

    addIdentifierAssigned: (identifier, initializer)->
      throw new Error "bindUniqueIdentifier must be called AFTER all calls to addIdentifierAssigned" if @_boundUniqueIdentifiers
      @identifiersAssigned[identifier] = initializer || true

    @getter
      uniqueIdentifierHandle: (preferredName = "_temp") ->
        @addUniqueIdentifierHandle new UniqueIdentifierHandle preferredName

    addUniqueIdentifierHandle: (uih) ->
      return if uih.scope
      uih.scope = @
      @uniqueIdentifierHandles.push uih
      uih

    # must be called after all calls to addIdentifierAssigned && addIdentifierUsed
    bindUniqueIdentifier: (preferredName, uniqueIdentifierHandle ) ->
      identifier = @getAvailableIdentifierName preferredName
      @boundUniqueIdentifiers[identifier] = uniqueIdentifierHandle
      @identifiersAssigned[identifier] = true
      identifier

    getAvailableIdentifierName: (preferredName) ->
      identifiersUsed = @identifiersUsedOrAssigned
      return preferredName unless identifiersUsed[preferredName]
      count = 1
      name while identifiersUsed[name = "#{preferredName}#{count++}"]
      name

    addChildScope: (child) ->
      return if child == @
      (@childScopes ||= []).push child
      # log ADDCHILDSCOPE:
      #   self: @
      #   childScopes: @childScopes

    getUnusedIdentifierName: (rootName)->
      {identifiersUsed} = @
      count = 1
      out = rootName
      out = "#{rootName}#{count++}" while identifiersUsed[out]
      out

    bindAllUniqueIdentifiersRequested: ->
      return unless @_uniqueIdentifierHandles
      for uniqueIdentifierHandle in @_uniqueIdentifierHandles
        uniqueIdentifierHandle.identifier
      null

    getAutoLets: ->
      @bindAllUniqueIdentifiersRequested()
      if @props.identifiersAssigned && (identifiers = @requiredIdentifierLets).length > 0
        "let #{identifiers.join ', '}"

    updateScope: (@scope)->
      @bindAllUniqueIdentifiersRequested()
      @scope.addChildScope @
      child.updateScope @ for child in @children
      null

    @getter
      argumentNames: -> []

      uniqueIdentifierHandles: -> @_uniqueIdentifierHandles ||= []

      boundUniqueIdentifiers: -> @_boundUniqueIdentifiers ||= {}

      requiredIdentifierLets: ->
        {identifiersAssignedInParentScopes, identifiersAssigned} = @
        array identifiersAssigned,
          when: (initializer, k) -> !identifiersAssignedInParentScopes[k]
          with: (initializer, identifier) ->
            if isString initializer
              "#{identifier} = #{initializer}"
            else if initializer.toJsExpression?
              "#{identifier} = #{initializer.toJsExpression()}"
            else
              identifier

      identifiersUsed: -> @props.identifiersUsed ||= {}
      identifiersAssigned: -> @props.identifiersAssigned ||= {}

      identifiersUsedOrAssigned: -> merge @identifiersUsed, @identifiersAssigned

      identifiersUsedButNotAssigned: ->
        return @props.identifiersUsedButNotAssigned if @props.identifiersUsedButNotAssigned
        assigned = @identifiersAssignedInParentThisOrChildrenScopes
        ret = object @identifiersUsed,
          when: (v, k) -> !assigned[k]
          with: -> true

        for childScope in @childScopes || []
          mergeInto ret, childScope.identifiersUsedButNotAssigned
        @props.identifiersUsedButNotAssigned = ret

      identifiersAssignedInParentThisOrChildrenScopes: -> merge @identifiersAssigned, @identifiersAssignedInParentScopes
      identifiersAssignedInParentScopes: ->
        out = if @scope && @scope != @
          merge @scope.identifiersAssignedInParentScopes, @scope.identifiersAssigned, arrayToTruthMap @argumentNames
        else
          {}
        out

    # transform: ->
    #   if @props.identifiersAssigned
    #     identifiers = (id for id, __ of @requiredIdentifierLets)
    #     @cloneWithNewStatements compactFlatten [
    #       LetStn identifiers: identifiers if identifiers.length > 0
    #       @statements.transformChildren()
    #     ]
    #   else
    #     super
