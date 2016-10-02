Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

legalUnquotedPropName = /^(0|[1-9a-z_][0-9_a-z]*)$/i

defineModule module, class ObjectPropNameStn extends require './BaseStn'

  toJs: ->
    {value} = @props
    value = escapeJavascriptString value unless value.match legalUnquotedPropName
    value
