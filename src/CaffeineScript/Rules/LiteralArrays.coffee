{a, m, w, escapeJavascriptString, log, present} = require "art-foundation"

module.exports =
  structuredLiteral: w "array object"

  array: a
    pattern: "openBracket_ valueList _comma_? _closeBracket"
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
    pattern: "start:expression _comma_ valueList _comma_?"
    toJs: ->
      if present vlJs = @valueList.toJs()
        "[#{@start.toJs()}, #{vlJs}]"
      else
        "[#{@start.toJs()}]"

    m
      pattern: "start:literal _ valueList _comma_?"
      toJs: -> "[#{@start.toJs()}, #{@valueList.toJs()}]"

  valueList: a
    pattern: "expression _comma_ valueList", toJs: ->
      js = @expression.toJs()
      js += ", #{vlJs}" if present vlJs = @valueList.toJs()
      js
    m pattern: "literal _ valueList", toJs: -> "#{@literal.toJs()}, #{@valueList.toJs()}"
    m pattern: "expression", toJs: -> @expression.toJs()
    # m pattern: /[\s\n]*$/
