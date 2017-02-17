Foundation = require 'art-foundation'

{mergeInto, log, array, isString, a, w, m, mergeInto, defineModule, compactFlatten, present, arrayToTruthMap, merge, escapeJavascriptString, BaseObject, object} = Foundation
StatementsStn = require './StatementsStn'
LetStn = require './LetStn'

UniqueIdentifierHandle = require './UniqueIdentifierHandle'

defineModule module, ->

  (toExtend) -> class ScopeStnMixin extends toExtend

    constructor: ->
      super
      @_uniqueIdentifierHandles =
      @_boundUniqueIdentifiers = null


    addIdentifierUsed: (identifier)->
      throw new Error "bindUniqueIdentifier must be called AFTER all calls to addIdentifierUsed" if @_boundUniqueIdentifiers
      @identifiersUsed[identifier] = true

    addIdentifierAssigned: (identifier, initializer)->
      throw new Error "bindUniqueIdentifier must be called AFTER all calls to addIdentifierAssigned" if @_boundUniqueIdentifiers
      @identifiersAssigned[identifier] = initializer || true

    @getter
      # call during toJs
      uniqueIdentifier: (preferredName = "_temp") ->
        @getUniqueIdentifierHandle(preferredName).identifier

      # call during transform
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
        {identifiersAssignedInParentScopes} = @
        array @identifiersAssigned,
          when: identifiersAssignedInParentScopes && (initializer, k) -> !identifiersAssignedInParentScopes[k]
          with: (initializer, identifier) ->
            if isString initializer
              "#{identifier} = #{initializer}"
            else if initializer.toJsExpression?
              "#{identifier} = #{initializer.toJsExpression()}"
            else
              identifier

      identifiersUsed: -> @props.identifiersUsed ||= {}
      identifiersAssigned: -> @props.identifiersAssigned ||= {}

      identifiersUsedOrAssigned: ->
        out = merge @identifiersUsed, @identifiersAssigned
        {scope} = @
        while scope
          mergeInto out, scope.identifiersAssigned
          break if scope == scope.scope
          {scope} = scope
        out

      identifiersUsedButNotAssigned: ->
        # return @props.identifiersUsedButNotAssigned if @props.identifiersUsedButNotAssigned
        assigned = @identifiersAssignedInParentThisOrChildrenScopes
        ret = object @identifiersUsed,
          when: (v, k) -> !assigned[k]
          with: -> true

        for childScope in @childScopes || []
          mergeInto ret, childScope.identifiersUsedButNotAssigned
        @props.identifiersUsedButNotAssigned = ret

      identifiersAssignedInParentThisOrChildrenScopes: -> merge @identifiersAssigned, @identifiersAssignedInParentScopes
      identifiersAssignedInParentScopes: ->
        if @scope && @scope != @
          merge @scope.identifiersAssignedInParentScopes, @scope.identifiersAssigned, arrayToTruthMap @argumentNames

    # transform: ->
    #   if @props.identifiersAssigned
    #     identifiers = (id for id, __ of @requiredIdentifierLets)
    #     @cloneWithNewStatements compactFlatten [
    #       LetStn identifiers: identifiers if identifiers.length > 0
    #       @statements.transformChildren()
    #     ]
    #   else
    #     super
