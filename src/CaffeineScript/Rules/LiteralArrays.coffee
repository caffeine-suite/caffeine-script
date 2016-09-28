{a, m, w, escapeJavascriptString, log} = require "art-foundation"

module.exports =
  structuredLiteral: w "array object"

  array: a
    pattern: "openBracket_ valueList _closeBracket"
    toJs: -> "[#{@valueList.toJs()}]"

    m
      pattern: "'[]' _? valueList"
      toJs: -> "[#{@valueList.toJs()}]"
    m
      pattern: "'[]' _? block"
      toJs: ->
        statements: statements = @block.getStatements()
        if statements.length == 1 && statements[0].isImplicitArray()
          statements[0].toJs()
        else
          "[#{(s.toJs() for s in statements).join ", "}]"

    m
      pattern: "'[]'"
      toJs: -> @toString()

  implicitArray: a
    pattern: "expression _comma_ valueList"
    toJs: -> "[#{@expression.toJs()}, #{@valueList.toJs()}]"
    m
      pattern: "literal _ valueList"
      toJs: -> "[#{@literal.toJs()}, #{@valueList.toJs()}]"

  valueList: a
    pattern: "expression _comma_ valueList", toJs: -> "#{@expression.toJs()}, #{@valueList.toJs()}"
    m pattern: "literal _ valueList", toJs: -> "#{@literal.toJs()}, #{@valueList.toJs()}"
    m pattern: "expression", toJs: -> @expression.toJs()
