{a, m, w} = require "art-foundation"

module.exports =
  _:          / +/
  colon:      / *: */
  comma:      / *, */
  arrow:      / *-> */
  end:        /\n|$/

  openParen:  /\( */
  closeParen: / *\)/

  openBracket:  /\[ */
  closeBracket: / *\]/

  openCurly:    /\{ */
  closeCurly:   / *\}/

  reservedWord: /if|while|unless/

  identifier:
    ///
    (?!\d)
    ( (?: (?!\s)[$\w\x7f-\uffff] )+ )
    ///

