{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"

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

    arrayDestructuringElement: w "arrayDestructuringIdentifier destructuringTarget"

  @rule
    objectDestructuringList: a
      pattern: "element:objectDestructuringElement _comma_ objectDestructuringList"
      # m pattern: "element:literal _ valueList"
      m pattern: "element:objectDestructuringElement"

    objectDestructuringElement: w "labeledDestructuringTarget destructuringIdentifier"

  @rule
    labeledDestructuringTarget: "identifier _? ':' _? arrayDestructuringElement"
  , stnFactory: "LabeledDestructuringTargetStn"

  @rule
    arrayDestructuringIdentifier: a
      pattern: "identifier _? etc"
      m pattern: "identifier destructuringDefault:destructuringDefault?"
  ,
    stnFactory: "DestructuringIdentifierStn"
    stnProps: -> etc: !!@etc

  @rule
    destructuringIdentifier: "identifier destructuringDefault:destructuringDefault?" # objectDestructuring arrayDestructuring implicitObjectDestructuring"
  , stnFactory: "DestructuringIdentifierStn"

  @rule
    destructuringDefault: "_? '=' _? expression"