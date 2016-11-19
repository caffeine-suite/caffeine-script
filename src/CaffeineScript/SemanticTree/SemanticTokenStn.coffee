Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class SemanticTokenStn extends require './BaseStn'

  constructor: ->
    super
    @props.token ||= @parseTreeNode.toString()

  toJs: ->
    throw new Error "SemanticTokenStn is not indented to output Js directly"
