{a, m, w, compactFlatten, log} = require "art-foundation"

module.exports = ->
  @rule
    dotAccessor: "dot identifier assignmentExtension?"

    bracketAccessor: "questionMark? openBracket_ expression _closeBracket"
  ,
    stnFactory: "AccessorStn"
    stnExtension: true
