{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

{BracketAccessorStn} =  require '../SemanticTree'

module.exports =

  value: w "existanceTest nonAssignable assignable"

  functionInvocation: a
    pattern: "_ arguments",                         toJs: -> "(#{@arguments.toJs()})"
    m pattern: "openParen_ arguments? _closeParen", toJs: -> "(#{@arguments?.toJs() || ""})"
    m pattern: "block",                             toJs: -> "(#{@block.toJsList()})"

  assignableExtension: a
    pattern: 'functionInvocation+ assignableAccessor'
    m pattern: "assignableAccessor"

  accessor: w "assignableAccessor functionInvocation"

  nonAssignable: a
    pattern: "assignable functionInvocation+"
    m pattern: "assignableIfExtended assignableExtension* functionInvocation?"

  assignable: a
    pattern: "simpleAssignable assignableExtension*"
    m pattern: "assignableIfExtended assignableExtension+"

  assignableIfExtended: w "this literal"

  this:
    pattern: "/@/ !identifier"
    toJs: -> "this"

  simpleAssignable: a
    pattern: "!reservedWord identifier"
    m pattern: "thisProperty"

  thisProperty:
    pattern: "/@/ identifier"
    toJs: -> "this.#{@identifier}"

  assignableAccessor: a
    pattern: "'.' identifier",                          toJs: -> ".#{@identifier.toJs()}"
    m pattern: "bracketAccessor"

  bracketAccessor:
    pattern: "openBracket_ expression _closeBracket"
    toJs: -> "[#{@expression.toJs()}]"
    getStn: ->
      BracketAccessorStn @expression.getStn()
