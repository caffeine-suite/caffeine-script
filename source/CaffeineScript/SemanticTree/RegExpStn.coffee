Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines, deescapeSpaces} = require '../Lib'

{log, a, w, m, defineModule, array, find, compactFlatten, present, escapeJavascriptString, BaseObject, isString} = Foundation

defineModule module, class RegExpStn extends require './BaseStn'

  toJs: ->
    {value, modifiers} = @props

    str = if @children?.length > 0
      hasInterpolation = find @children, (child) -> !isString child.props.value
      array @children, (child) ->
        if isString v = child.props.value
          if hasInterpolation
            v.replace /([`$\\])/g, "\\$1"
          else
            v
        else
          "${#{child.toJsExpression()}}"
      .join ''
    else
      value

    if str.length == 0
      "/(?:)/"
    else if hasInterpolation
      if modifiers
        "RegExp(`#{str}`, '#{modifiers}')"
      else
        "RegExp(`#{str}`)"
    else
      "/#{str}/#{modifiers || ''}"
