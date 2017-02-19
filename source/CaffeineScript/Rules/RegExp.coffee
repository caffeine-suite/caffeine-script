{a, m, w, compactFlatten, log, present} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{StatementsStn} = require '../SemanticTree'

module.exports =
  regExpLiteral: a
    pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?"
    stnFactory: "RegExpStn"
    stnProps: -> value: @toString()
    m
      pattern: "multilineRegExp"
      stnFactory: "RegExpStn"

  regExpStart:      "'/' !/[ \\/]/"
  regExpMiddle:     /// ( [^\/\\\n] | \\. | \#(?!\{) )* ///
  regExpEnd:        /// / ///
  regExpModifiers:  /([igmuy]*)/

  multilineRegExp: "'///' multilineRegExpMiddle* '///'"

  multilineRegExpMiddle: [
    "multilineRegExpText"
    "multilineRegExpComment"
  ]

  multilineRegExpText:
    pattern:
      ///
        (
          # don't end sequence
          (?!//\/)
          (
            # escape sequence
            \\. |

            # or
            (
              (?!
                # dont match backslash
                \\
                # dont match comment
                | [\s\n]\#

                # dont match interpolation
                | \#\{
              )
              (.|\n)
            )
          )
        )+
      ///
    stnFactory: "StringStn"
    stnProps: -> value: @text

  multilineRegExpComment:
    pattern: /(^|\n|\s)+#(?!\{)[^\n]+[\s\n]*/
    stnFactory: "StringStn"
    stnProps: -> value: ""

  # CoffeeScript only allows interpolation in /// blocks...
  # regExpInterpolation:
  #   pattern: "interpolationStart expression interpolationEnd mid:regExpMiddle interpolation:dqStringInterpolation?"
  #   getStnChildren: (appendTo = [])->
  #     appendTo.push @expression.getStn()
  #     appendTo.push StringStn value: @mid.toString() if @mid.matchLength > 0
  #     @interpolation?.getStnChildren appendTo
  #     appendTo

