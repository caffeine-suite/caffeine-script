Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines, deescapeSpaces} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject, isString} = Foundation

defineModule module, class RegExpStn extends require './BaseStn'

  convertToNormalRegExp = (str) ->
    str.replace /((^|[^\\])(\\\\)*)[\s\n]+/g, '$1'
    .replace /\\ /g, ' '
    .replace /\\\//g, '/'
    .replace /\//g, '\\/'

  toJs: ->
    if @children
      hasNonStringChild = false
      list = for child in @children
        if isString v = child.props.value
          v
        else
          hasNonStringChild = true
          child
      if hasNonStringChild
        "something new"
      else
        # TODO: convert /// /// to / /

        if (str = convertToNormalRegExp list.join '').length == 0
          "/(?:)/"
        else
          "/#{str}/"
    else
      @props.value
