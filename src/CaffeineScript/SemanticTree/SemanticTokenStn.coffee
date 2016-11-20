Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SemanticTokenStn extends require './BaseStn'

  constructor: ->
    super
    @props.token ||= @parseTreeNode.toString()

  @getter
    token: -> @props.token

  toJs: ->
    throw new Error "SemanticTokenStn is not intended to output Js directly"
