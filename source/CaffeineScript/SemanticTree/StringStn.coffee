Foundation = require 'art-foundation'
{escapeUnescaped, escapeNewLines, deescapeSpaces} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StringStn extends require './BaseStn'

  toJs: -> escapeJavascriptString(deescapeSpaces @props.value).replace /\\\\/g, '\\'

  toInterpolatedJsStringPart: -> deescapeSpaces escapeUnescaped @props.value, "`$\n"