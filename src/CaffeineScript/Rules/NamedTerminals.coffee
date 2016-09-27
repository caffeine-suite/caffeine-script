{a, m, w} = require "art-foundation"

###
Note that "_" in rule-names is used consistently to indicate one or more spaces will be matched before or after the rule or both.
Most rules (rules with no "_" suffix or prefix) do not consume spaces before or after themselves.
###
module.exports =
  _:              / +/
  _colon_:        / *: */
  _comma_:        / *,(( *\n)+| *)/
  _arrow_:        / *-> */
  end:            /\n|$/

  openParen_:     /\( */
  _closeParen:    / *\)/

  openBracket_:   /\[ */
  _closeBracket:  / *\]/

  openCurly_:     /\{ */
  _closeCurly:    / *\}/
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
    ///
    (?!\d)
    ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
    ///

  unquotedString:
    ///
    ((?!\s)[-.$\w\x7f-\uffff])+
    ///


  unaryOperator:    /// ! | ~ | not\b ///
  logicOperator:    /// && | \|\| | & | \| | \^ | \? | ((and | or | isnt | is | in)\b) ///
  shiftOperator:    /// << | >> | >>> ///
  compareOperator:  /// == | != | < | > | <= | >= ///
  mathOperator:     /// [-+*/%] | // | %% ///
