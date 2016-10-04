Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines, deescapeSpaces} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StringStn extends require './BaseStn'

  toJs: -> escapeJavascriptString(deescapeSpaces @props.value).replace /\\\\/g, '\\'

  toInterpolatedJsStringPart: -> escapeNewLines deescapeSpaces escapeUnEscapedQuotes @props.value, "`"