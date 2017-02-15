arraySlice = Array.prototype.slice

isArguments = (o) ->
  o.constructor == Object &&
  (typeof o.callee is "function") &&
  (typeof o.length is "number")

isArrayOrArguments = (o) ->
  o && (o.constructor == Array || isArguments o)

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

keepAll = -> true
flattenIfNeeded = (array, keepTester = keepAll, output)->
  if needsFlatteningOrCompacting array, keepTester
    doFlattenInternal array, keepTester, output
  else if output
    output.push v for v in array
    output
  else if array.constructor != Array
    arraySlice.call array
  else
    array

module.exports = class ArrayCompactFlatten
  @keepUnlessNullOrUndefined: keepUnlessNullOrUndefined = (a) -> a != null && a != undefined

  @compact: compact = (array, keepTester = keepUnlessNullOrUndefined) =>
    for a in array
      unless keepTester a
        # needs compacting
        return (a for a in array when keepTester a)

    # already compact
    array

  @flatten: flatten = (firstArg)->
    flattenIfNeeded if arguments.length == 1
      if isArrayOrArguments firstArg
        firstArg
      else
        [firstArg]
    else
      arguments

  @compactFlatten: (array, keepTester = keepUnlessNullOrUndefined)->
    flattenIfNeeded array, keepTester
