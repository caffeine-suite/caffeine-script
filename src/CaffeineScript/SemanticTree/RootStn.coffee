Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject, objectKeyCount} = Foundation

LetStn = require './LetStn'
ScopeStnMixin = require './ScopeStnMixin'
StatementsStn = require './StatementsStn'

defineModule module, class RootStn extends ScopeStnMixin require './BaseStn'

  constructor: (props, [@statements]) -> super

  cloneWithNewStatements: (statements)->
    new RootStn @props, [StatementsStn compactFlatten statements]

  transform: ->
    @updateScope @

    super

  toJs: ->  @childrenToJs()