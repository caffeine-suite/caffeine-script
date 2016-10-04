{a, m, w, compactFlatten, log, present} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{StatementsStn} = require '../SemanticTree'

module.exports =
  root: a
    pattern: 'statement* lineComment*'
    node:
      getStatements: ->
        s for s in @statement when present s.toString()

      toJs: ->
        @getStn().toJs()
        # (js for s in @statement when present js = s.toJs()).join("; ") + ";"

      stnFactory: StatementsStn

      toJsList: -> (js for s in @statement when present js = s.toJs()).join ", "

      toFunctionBodyJs: ->
        (for s, i in lines = @statement when present js = s.toJs notLastLine = i < lines.length - 1
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
