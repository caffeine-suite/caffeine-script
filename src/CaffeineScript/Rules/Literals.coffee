{a, m, w} = require "art-foundation"

module.exports =
  literal: w "boolLiteral numberLiteral stringLiteral"

  boolLiteral:   pattern: /false|true/, toJs: -> @toString()
  numberLiteral: pattern: /-?[0-9]+/,     toJs: -> @toString()

  stringLiteral: a
    pattern: /// ' ( [^\\'] | \\[\s\S] )* ' ///, toJs: -> @toString()
    m pattern: /// " ( [^\\"] | \\[\s\S] )* " ///, toJs: -> @toString()
    m pattern: "':' identifier", toJs: -> "'#{@identifier.toString()}'"
    # /// "( [^\\"\#] | \\[\s\S] |           \#(?!\{) )*" ///
    # /// ( [^\\']  | \\[\s\S] | '(?!'')            )* ///
    # /// ( [^\\"#] | \\[\s\S] | "(?!"") | \#(?!\{) )* ///

