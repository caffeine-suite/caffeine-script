{a, m, w, compactFlatten, log, present} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

module.exports =
  root:
    pattern: 'statementOrBlankLine*'
    node:
      getStatements: ->
        s for s in @statementOrBlankLines when present s.toString()

      toJs: -> (js for s in @statementOrBlankLines when present js = s.toJs()).join("; ") + ";"
      toJsList: -> (js for s in @statementOrBlankLines when present js = s.toJs()).join ", "
      toFunctionBodyJs: ->
        (for s, i in lines = @statementOrBlankLines when present js = s.toJs notLastLine = i < lines.length - 1
          if notLastLine
            js
          else
            "return #{js}"
        ).join(";\n") + ";"
      toImplicitArrayOrValueJs: ->
        statements = @getStatements()
        if statements.length == 1
          statements[0].toJs()
        else
          "[#{(s.toJs() for s in statements).join ', '}]"

