{a, m, w, compactFlatten, log} = require "art-foundation"

module.exports = ->
  @rule
    dotAccessor: "dot identifier assignmentExtension?"

    bracketAccessor: "questionMark? openBracket_ expression _closeBracket assignmentExtension?"
  ,
    stnFactory: "AccessorStn"
    stnExtension: true
