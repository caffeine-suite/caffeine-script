{a, m, w} = require "art-foundation"

###
Note that "_" in rule-names is used consistently to indicate one or more spaces will be matched before or after the rule or both.
Most rules (rules with no "_" suffix or prefix) do not consume spaces before or after themselves.
###
module.exports = ->

  @rule
    _equals_:       / *= */
    _colon_:        / *: */
    _comma_:        / *,[ \n]*/
    _arrow_:        / *[-=]> */

    openParen_:     /\( */
    _closeParen:    /\ *\)/

    openBracket_:   /\[[ \n]*/
    _closeBracket:  /[ \n]*\]/

    openCurly_:     /\{ */
    _closeCurly:    /\ *\}/
    _else:          /(( *\n)+| +)else/

    reservedWord: ///
      (
      import |

      throw |

      return |

      break |

      into |

      with |

      do |

      switch |

      when |

      if | until |

      try | catch |

      while | unless |

      then | else |

      and | or | is | isnt |

      in |

      not
      )

      \b
      ///

    identifier:
      pattern:
        ///
        (?!\d)
        ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
        ///
      stnFactory: "IdentifierStn"
      stnProps: -> identifier: @toString()

    # definitly not: space, comma, [], (), {}
    # could, could not: '', "", ``
    # questionables: |, \
    unquotedString:
      ///
      ((?!\s)[-~!@\#$%^&*_+=|\\<>?/.$\w\x7f-\uffff])+
      ///


    unaryTailOperator: /\?/
    unaryOperator_:    /// (! | ~ | not\b) \ * ///

    binaryOperator: binaryOperatorRegEx = ///

      # js logic
      && | \|\| | &(?=\s) | \| | \^ |

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

    _assignmentOperator_: ///
      \ *
      ( # copy of binaryOperatorRegEx EXCEPT comparison operators
        # js logic
        && | \|\| | & | \| | \^ |

        # cs logic
        \? |

        # cs english logic
        ((and | or | isnt | is | in)\b) |

        # shift
        << | >>> | >> |

        # comparison
        # == | != | <= | >= | < | > |

        # cs math
        // | %% | \*\* |

        # js math
        [-+*/%]
      )?
      =
      \ *
      ///

    new: /new/
    throw: /throw/
    with: /with/
    when: /when/
    into: /into/
    withOrDo: /with|do/

  @rule
    comprehensionOutputType: /object|array|reduce|each|find/
    comprehensionIterationType: /from|in\b/

    # comprehensionIterationType: /from( +(object|array|iter))?/
    dot: /\??\./
    questionMark: /\?/
  , stnFactory: "SemanticTokenStn"
