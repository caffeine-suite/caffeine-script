{a, m, w} = require "art-foundation"

module.exports =
  controlStatement: w "ifStatement unlessStatement"

  ifStatement: a
    pattern: "'if' _ expression _? block optionalElseClause?"
    toJs: (statement) ->
      if statement
        "if (#{@expression.toJs()}) {#{@block.toJs()}}#{@optionalElseClause?.toJs(true) || ""}"
      else
        "#{@expression.toJs()} ? #{@block.toJs()}#{@optionalElseClause?.toJs() || " : null"}"
    m
      pattern: "'if' _ expression _ 'then' _ complexExpression optionalElseClause?"
      toJs: (statement) ->
        if statement
          "if (#{@expression.toJs()}) {#{@complexExpression.toJs()}}#{@optionalElseClause?.toJs(true) || ""}"
        else
          "#{@expression.toJs()} ? #{@complexExpression.toJs()}#{@optionalElseClause?.toJs() || " : null"}"

  unlessStatement:
    pattern: "'unless' _ expression _? block optionalElseClause?"
    toJs: (statement) ->
      if statement
        "if (!(#{@expression.toJs()})) {#{@block.toJs()}}#{@optionalElseClause?.toJs(true) || ""}"
      else
        "!(#{@expression.toJs()}) ? #{@block.toJs()}#{@optionalElseClause?.toJs() || " : null"}"

  optionalElseClause: a
    pattern: "_else block"
    toJs: (statement) ->
      if statement
        " else {#{@block.toJs()}}"
      else
        " : #{@block.toJs()}"
    m
      pattern: "_else _ complexExpression"
      toJs: (statement) ->
        if statement
          " else {#{@complexExpression.toJs()}}"
        else
          " : #{@complexExpression.toJs()}"
