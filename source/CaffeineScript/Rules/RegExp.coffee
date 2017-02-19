{a, m, w, compactFlatten, log, present} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{StatementsStn} = require '../SemanticTree'

module.exports =
  regExpLiteral: a
    pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?"
    stnFactory: "RegExpStn"
    stnProps: -> value: @regExpMiddle.toString(), modifiers: @regExpModifiers?.toString()
    m
      pattern: "'///' multilineRegExpMiddle* '///' regExpModifiers?"
      stnFactory: "RegExpStn"
      stnProps: -> modifiers: @regExpModifiers?.toString()

  # TODO: we could accept many regexps starting with space, / f/,
  # if we actually parsed the internals of the regexp and ensured matching (), {} and []
  # The problem cases are listed in the tests under spaceAfterSlashIsNotRegExp - with comments.
  regExpStart:      "'/' !/[ \\/]/"
  regExpMiddle:     /// ( [^\/\\\n] | \\. | \#(?!\{) )* ///
  regExpEnd:        /// / ///
  regExpModifiers:  /([igmuy]*)/

  multilineRegExpMiddle: [
    "multilineRegExpText"
    "multilineRegExpEscape"
    "multilineRegExpForwardSlashes"
    "multilineRegExpComment"
    "multilineRegExpInterpolation"
  ]

  # match as much as we can with no escapes, no comments or end /// marker
  multilineRegExpText:
    pattern: /((?!((^|\n|\s)#|#\{))[^\\\/])+/

    stnFactory: "StringStn"
    stnProps: -> value: @text.replace /[\n\s]+/g, ''

  multilineRegExpForwardSlashes:
    pattern: /\/\/?(?!\/)/
    stnFactory: "StringStn"
    stnProps: -> value: @text.replace /\//g, '\\/'

  multilineRegExpEscape:
    pattern: /(\\.)/

    stnFactory: "StringStn"
    stnProps: ->
      value: if @text == "\\ " then ' ' else @text

  multilineRegExpComment:
    pattern: /(^|\n|\s)+#(?!\{)[^\n]+[\s\n]*/
    stnFactory: "StringStn"
    stnProps: -> value: ""

  multilineRegExpInterpolation:
    pattern: "interpolationStart expression interpolationEnd"

  # CoffeeScript only allows interpolation in /// blocks...
  # regExpInterpolation:
  #   pattern: "interpolationStart expression interpolationEnd mid:regExpMiddle interpolation:dqStringInterpolation?"
  #   getStnChildren: (appendTo = [])->
  #     appendTo.push @expression.getStn()
  #     appendTo.push StringStn value: @mid.toString() if @mid.matchLength > 0
  #     @interpolation?.getStnChildren appendTo
  #     appendTo

