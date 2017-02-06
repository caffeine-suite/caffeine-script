Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, merge, present, escapeJavascriptString, BaseObject} = Foundation

FunctionDefinitionArgsStn = require './FunctionDefinitionArgsStn'
ScopeStnMixin = require './ScopeStnMixin'
StatementsStn = require './StatementsStn'

###
Thinking.

I want a FunctionDefinitionStn which is scopeless.
- It doesn't act like a scope for variables which are only assigned within it.
  - Those variables are letted in the enclosing scope.
- If it has args, it calls @scope.addIdentifierAssigned for each using the parent scope.
- The generated javascript uses temp variables for each of the args and then at the start
  of the function, it assigns those args to the actual-named variables bound in the enclosing
  scope.

WHY? There are 2 or more places where I am adding new control-structures which don't define scope
but are implemented with function-defs in javascript:
  - iterators (each, array, object, etc...)
  - promises
  - do block (?)
###
defineModule module, class FunctionDefinitionStn extends ScopeStnMixin require './BaseStn'

  constructor: (props, children) ->
    if children.length == 1
      [onlyChild] = children
      unless onlyChild instanceof FunctionDefinitionArgsStn.class
        children = [FunctionDefinitionArgsStn(), children[0]]

    [@arguments, @statements] = children
    super props, children

  cloneWithNewStatements: (statements)->
    new @class @props, [@arguments, StatementsStn compactFlatten statements]

  @getter
    needsParens: -> false
    needsParensAsStatement: -> !@props.bound
    argumentNames: ->
      @arguments?.argumentNames || []

  toJs: ->
    [argsDef, body] = @children
    statements = []
    argsDef = if argsDef

      statements = (statements for arg in argsDef.children when statements = arg.getFunctionPreBodyStatementsJs())
      argsDef.toJs()
    else "()"

    statements = compactFlatten [@getAutoLets(), statements, body?.toFunctionBodyJs()]
    body = if statements.length > 0
      "{#{statements.join '; '};}"
    else "{}"

    if @props.bound
      "#{argsDef} => #{body}"
    else
      "function#{argsDef} #{body}"
