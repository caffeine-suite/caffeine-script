{a, m, w} = require "art-foundation"

###
Note that "_" in rule-names is used consistently to indicate one or more spaces will be matched before or after the rule or both.
Most rules (rules with no "_" suffix or prefix) do not consume spaces before or after themselves.
###
module.exports = ->

  @rule
    _:              / +/
    # end:            "endExceptEob* commentOrSpace? endStatement"
    end:   "commentOrSpace* /\\n|;|$/"
    commentOrSpace: w "comment _"
    # end: [
    #   "endExceptEob+ commentOrSpace* /$/?"
    #   "commentOrSpace* /$/"
    # ]
    # end: / *(\n|;|$)/

    # endStatement: /\\n|$|;/

  ,
    getPresent: -> false

  @rule
    _equals_:       / *= */
    _colon_:        / *: */
    _comma_:        / *,[ \n]*/
    _arrow_:        / *[-=]> */
    # end:            /\n|$/

    blankLine: a
      pattern: "comment /\\n/?"
      getPresent: ->
        log "blankline getPresent"
        false
      toJs: -> ""
      m
        pattern: /\n/
        toJs: -> ""

    openParen_:     /\( */
    _closeParen:    /\ *\)/

    openBracket_:   /\[[ \n]*/
    _closeBracket:  /[ \n]*\]/

    openCurly_:     /\{ */
    _closeCurly:    /\ *\}/
    _else:          /(( *\n)+| +)else/

    reservedWord: ///
      (
      if | until |

      while | unless |

      then | else |

      and | or | is | isnt |

      in |

      not
      )\b
      ///

    identifier:
      pattern:
        ///
        (?!\d)
        ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
        ///
      stnFactory: "IdentifierStn"
      stnProps: -> identifier: @toString()

    unquotedString:
      ///
      ((?!\s)[-.$\#\w\x7f-\uffff])+
      ///


    unaryOperator:    /// ! | ~ | not\b ///
    binaryOperator: ///

      # js logic
      && | \|\| | & | \| | \^ |

      # cs logic
      \? |

      # cs english logic
      ((and | or | isnt | is | in)\b) |

      # shift
      << | >>> | >> |

      # comparison
      == | != | <= | >= | < | > |

      # cs math
      // | %% | \*\* |

      # js math
      [-+*/%]

      ///
