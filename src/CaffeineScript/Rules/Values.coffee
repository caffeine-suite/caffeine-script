{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

{BracketAccessorStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    value: w "existanceTest nonAssignable assignable"

  @rule
    nonAssignable: a
      pattern: "assignable functionInvocation+"
      m pattern: "assignableIfExtended assignableExtension* functionInvocation?"
  ,
    stnFactory: "ValueStn"

  @rule
    assignable: a
      pattern: "simpleAssignable assignableExtension*"
      m pattern: "assignableIfExtended assignableExtension+"
  ,
    stnFactory: "ValueStn"
    stnProps: assignable: true

  # need this and thisProperty because one is assignable and the other is not.
  @rule
    this:         "/@/ !identifier"
    thisProperty: "/@/ identifier"
  ,
    stnFactory: "ThisStn"

  @rule
    assignableExtension: a
      pattern: 'functionInvocation+ assignableAccessor'
      m pattern: "assignableAccessor"

    accessor: w "assignableAccessor functionInvocation"

    assignableIfExtended: w "this literal"

    simpleAssignable: a
      pattern: "!reservedWord identifier"
      m pattern: "thisProperty"

    dotAccessor:
      pattern: "'.' identifier"
      toJs: -> ".#{@identifier.toJs()}"
      stnFactory: "DotAccessor"

    assignableAccessor: w "dotAccessor bracketAccessor"

    bracketAccessor:
      pattern: "openBracket_ expression _closeBracket"
      toJs: -> "[#{@expression.toJs()}]"
      stnFactory: "BracketAccessorStn"
