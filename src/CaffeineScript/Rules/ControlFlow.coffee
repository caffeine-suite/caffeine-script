{a, m, w} = require "art-foundation"

module.exports =
  controlStatement: w "ifStatement unlessStatement"

  ifStatement:
    pattern: "'if' _ expression _? block optionalElseClause?"
    toJs: ->
      "if (#{@expression.toJs()}) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

  unlessStatement:
    pattern: "'unless' _ expression _? block optionalElseClause?"
    toJs: ->
      "if (!(#{@expression.toJs()})) {#{@block.toJs()}}#{@optionalElseClause?.toJs() || ''}"

  optionalElseClause:
    pattern: "/\nelse/ block"
    toJs: -> " else {#{@block.toJs()}}"
