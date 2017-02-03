Foundation = require 'art-foundation'
ScopeStnMixin = require './ScopeStnMixin'

{peek, log, formattedInspect, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ComprehensionStn extends ScopeStnMixin require './BaseStn'

  # updateScope: (@scope) ->
  #   if @lValue.type == "Reference"
  #     @scope.addIdentifierAssigned @lValue.toJs()
  #   super

  ###
  TODO
  capture-loop-variables (CLV):
    Some circumstances require capturing the loop variables:

    - when-block assigns to any of the loop variables
      (and the with-block reads the one or more of those assigned variables)
      (or there is no with-block and the when-block assigns to the value-loop-variable)
      Basically, I think the first pass is: when-block-assigns-to-any-loop-variable.

    - there is already a same-named variable in the enclosing scope as one of the loop variables

    If we detect we should capture-loop-variables, we need to:

    - declare that we assign to the loop variables. This will create the correct lets, taking into
      account if any of the loop variables matches an enclosing-scope-variable.

    - capture all loop variables in the when-block, if present, otherwise in the with-block.
      If the when-block is present, then the with-block's arguments become empty - it just uses
      the captured values.

      - generate an unused variable name for each loop variable, perferrably similar to each, then:
      - (_value, _key, _into, _whenResult) => {value = _value; key = _key; into = _into; whenResult = _whenResult}
      - but only for the loop-variables declared.

    - Explicitly create the default with-block if only the when-block is present so that it can
      use the captured value-variable rather than the one passed to it by the iteration function.
      This covers the special case of the when-block assigning to the value-variable.

  TODO explicit iterationTypes:
    ExampleA: object v from array a
    ExampleB: object v from object a
    ExampleC: object v from iter a

    I really need to test if that has any practical performance gain.

    It would dramatically increase the size of the iteration library
    to take into account all those sub-options.

    Not sure it's worth it.

    My intention is to provide the standard javascript 'while' loop for performance - and
    for the ability to use returns and breaks. The only change is while returns a value,
      probably the value returned from the last execution of the body or undefined.

    If we do explicit iterationTypes, my intention is the lib names be:

    oFromA
    oFromO
    oFromI

    and so on for o, a, f, r, e >> 3x the functions

  ###
  toJs: ->
    {
      outputType
      variableDefinition
      body
      iterable
      whenClause
    } = @labeledChildren
    outputType = outputType?.props.token

    log {variableDefinition}

    func = outputType.slice 0,1

    varDefString = if variableDefinition
      variableDefinition.toJs()
    else
      "v"

    withFunctionStr = if body
      "(#{varDefString}) =>
      {#{body.toFunctionBodyJs()};}"

    whenFunctionString = if whenClause
      "(#{varDefString}) =>
      {#{whenClause.toFunctionBodyJs()};}"

    params = [
      iterable.toJsExpression()
      withFunctionStr
      whenFunctionString
    ]
    params.pop() while (!peek params)
    params = for p in params
      p || "null"

    cafLibInvocation = "Caf.#{func}(#{params.join ', '})"

    if present lets = @getAutoLets()
      "(() => {#{lets}; return #{cafLibInvocation};})()"
    else
      cafLibInvocation

