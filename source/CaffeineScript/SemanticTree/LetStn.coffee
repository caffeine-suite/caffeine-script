Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class LetStn extends require './BaseStn'

  toJs: ->
    {identifiers, identifier} = @props
    if identifiers
      throw new Error "LetStn identifiers empty" unless identifiers.length > 0
      "let #{identifiers.join ', '}"
    else if identifier
      "let #{identifier}"
    else throw new Error "LetStn needs props!"
