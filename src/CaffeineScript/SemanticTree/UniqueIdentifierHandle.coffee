Foundation = require 'art-foundation'

{inspect, log, a, w, m, mergeInto, inspectedObjectLiteral, defineModule, compactFlatten, present, arrayToTruthMap, merge, escapeJavascriptString, BaseObject, newObjectFromEach} = Foundation
StatementsStn = require './StatementsStn'
LetStn = require './LetStn'

defineModule module, ->
  class UniqueIdentifierHandle extends BaseObject
    constructor: (@preferredName, @scope) ->

    @getter
      inspectedObjects: -> inspectedObjectLiteral "<UniqueIdentifierHandle preferredName: '#{@preferredName}', scopeSet: #{!!@scope}, _identifier: #{inspect @_identifier}>"

      identifier: ->
        @_identifier ||= @scope.bindUniqueIdentifier @preferredName, @
