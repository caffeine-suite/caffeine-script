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
      ((?!\s)[-@.$\#\w\x7f-\uffff])+
      ///


    unaryTailOperator: /\?/
    unaryOperator_:    /// (! | ~ | not\b) \ * ///

    dot_: /\. */
    binaryOperator: binaryOperatorRegEx = ///

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

    with: /with/
    when: /when/

  @rule
    comprehensionOutputType: /object|array|map|each|find/
    comprehensionIterationType: /from( +(object|array|iter))?/
  , stnFactory: "SemanticTokenStn"
