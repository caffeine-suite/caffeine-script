{a, m, w, compactFlatten, log, present} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{StatementsStn} = require '../SemanticTree'

module.exports =
  regExpLiteral:
    pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?"
    stnFactory: "RegExpStn"
    stnProps: -> value: @toString()

  regExpStart:      "'/' !/[ \\/]/"
  regExpMiddle:     /// ( [^\/\\\n] | \\. | \#(?!\{) )* ///
  regExpEnd:        /// / ///
  regExpModifiers:  /([igmuy]*)/

  # CoffeeScript only allows interpolation in /// blocks...
  # regExpInterpolation:
  #   pattern: "interpolationStart expression interpolationEnd mid:regExpMiddle interpolation:dqStringInterpolation?"
  #   getStnChildren: (appendTo = [])->
  #     appendTo.push @expression.getStn()
  #     appendTo.push StringStn value: @mid.toString() if @mid.matchLength > 0
  #     @interpolation?.getStnChildren appendTo
  #     appendTo

