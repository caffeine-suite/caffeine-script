arraySlice = Array.prototype.slice

isArguments = (o) ->
  o &&
  (typeof o.callee is "function") &&
  (typeof o.length is "number")

isPlainArray = Array.isArray || (o) => o.constructor == Array

isArrayOrArguments = (o) ->
  o && (isPlainArray(o) || isArguments o)

doFlattenInternal = (array, keepTester, output) ->
  output ||= []
  for a in array
    if isArrayOrArguments a
      flattenIfNeeded a, keepTester, output
    else if keepTester a
      output.push a
  output

needsFlatteningOrCompacting = (array, keepTester) ->
  for a in array when isArrayOrArguments(a) || !keepTester a
    return true
  false

flattenIfNeeded = (array, keepTester, output)->
  if needsFlatteningOrCompacting array, keepTester
    doFlattenInternal array, keepTester, output
  else if output
    output.push v for v in array
    output
  else if array.constructor != Array
    arraySlice.call array
  else
    array

keepAll = -> true
keepUnlessNullOrUndefined = (a) -> a != null && a != undefined

module.exports = class ArrayCompactFlatten

  @compact: (array, keepTester = keepUnlessNullOrUndefined) ->
    for a in array
      unless keepTester a
        # needs compacting
        return (a for a in array when keepTester a)

    # already compact
    array

  @flatten: (firstArg)->
    flattenIfNeeded if arguments.length == 1
        if isArrayOrArguments firstArg
          firstArg
        else
          [firstArg]
      else
        arguments
    , keepAll

  @compactFlatten: (array, keepTester = keepUnlessNullOrUndefined) ->
    flattenIfNeeded array, keepTester
