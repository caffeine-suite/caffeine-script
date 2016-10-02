Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StringStn extends require './BaseStn'

  toJs: -> escapeJavascriptString @props.value

  toInterpolatedJsStringPart: -> escapeNewLines escapeUnEscapedQuotes @props.value, "`"