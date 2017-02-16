Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines, deescapeSpaces} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class RegExpStn extends require './BaseStn'

  toJs: -> @props.value
