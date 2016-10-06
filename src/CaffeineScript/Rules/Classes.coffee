{a, m, w, log} = require "art-foundation"

module.exports =
  classDefinition:
    pattern: "/class/ _ identifier _extendsClause? block?"
    stnFactory: "ClassStn"

  _extendsClause:
    pattern: "/ +extends/ _ expressionWithOneLessBlock"
    toJs: -> @expressionWithOneLessBlock.toJs()