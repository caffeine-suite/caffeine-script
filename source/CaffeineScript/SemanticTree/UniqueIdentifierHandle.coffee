{
  BaseObject
  defineModule
  inspectedObjectLiteral
  inspect
} = require 'art-foundation'

defineModule module, ->
  class UniqueIdentifierHandle extends BaseObject
    constructor: (@preferredName, @scope) ->

    @getter
      inspectedObjects: -> inspectedObjectLiteral "<UniqueIdentifierHandle preferredName: '#{@preferredName}', scopeSet: #{!!@scope}, _identifier: #{inspect @_identifier}>"

      identifier: ->
        @_identifier ||= @scope.bindUniqueIdentifier @preferredName, @
