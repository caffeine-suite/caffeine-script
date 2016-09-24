{a, m, w} = require "art-foundation"

###
Note that "_" in rule-names is used consistently to indicate one or more spaces will be matched before or after the rule or both.
Most rules (rules with no "_" suffix or prefix) do not consume spaces before or after themselves.
###
module.exports =
  _:              / +/
  _colon_:        / *: */
  _comma_:        / *, */
  _arrow_:        / *-> */
  end:            /\n|$/

  openParen_:     /\( */
  _closeParen:    / *\)/

  openBracket_:   /\[ */
  _closeBracket:  / *\]/

  openCurly_:     /\{ */
  _closeCurly:    / *\}/

  reservedWord: /if|while|unless/

  identifier:
    ///
    (?!\d)
    ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
    ///

