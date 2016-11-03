{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    destructuringAssignment: "structure:destructuringTarget _? '=' _? value:expression"
  , stnFactory: "DestructuringAssignmentStn"

  @rule
    destructuringTarget: w "objectDestructuring arrayDestructuring"

  @rule
    objectDestructuring: "'{' _? objectDestructuringList _? '}'"
  , stnFactory: "ObjectDestructuringStn"

  @rule
    arrayDestructuring: "'[' _? arrayDestructuringList _? ']'"
  , stnFactory: "ArrayDestructuringStn"


  @rule
    arrayDestructuringList: a
      pattern: "element:arrayDestructuringElement _comma_ arrayDestructuringList"
      # m pattern: "element:literal _ valueList"
      m pattern: "element:arrayDestructuringElement"

  @rule
    arrayDestructuringElement: w "identifier" # objectDestructuring arrayDestructuring implicitObjectDestructuring"
  , stnFactory: "DestructuringIdentifierStn"


  @rule
    objectDestructuringList: a
      pattern: "element:objectDestructuringElement _comma_ objectDestructuringList"
      # m pattern: "element:literal _ valueList"
      m pattern: "element:objectDestructuringElement"

  @rule
    objectDestructuringElement: w "identifier" # objectDestructuring objectDestructuring implicitObjectDestructuring"
  , stnFactory: "DestructuringIdentifierStn"

