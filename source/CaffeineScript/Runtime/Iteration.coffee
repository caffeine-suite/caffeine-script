arrayIterableTest = (source) -> source?.length >= 0

module.exports =

  #########################
  # New Lib
  #########################
  ###
  IN:
    source:
      array-like (source.length is a number >= 0)
      null or undefined
      otherwise, properties are iterated

    out: the value that will be returned.
      out is initialized to source if out == undefined.
      This is for convenience and code-reduction in the "each-without-into-set" case.

    withBlock: (currentIterationValue, currentIterationKey, returning) -> ignored

  USE: object, array, each
  ###
  each: each = (source, out, withBlock) ->

    out = source if out == "undefined"

    if source?
      if arrayIterableTest source
        withBlock v, k, out for v, k in source
      else
        withBlock v, k, out for k, v of source

    out

  e: each


  ###
  enhanced-each

  Different from each :
    updating-out:   out is updated with the result of every withBlock call
    break-support:  withBlock is passed a forth argument: setShouldBreak

    NOTE: out is only initialized to source, if out == undefined. Any updated out
    could be set to undefined and that would be returned.

  setShouldBreak:
    IN: ()
    OUT: the undefined value
    EFFECT: this will be the last call to withBlock &
      the value returned by this last call will be the result
      of ee.

  This should be enough for all features:
    - "return" - requires a setShouldReturn function in the enclosing scope, and setShouldBreak
    - "next" - becomes a return-statement in withBlock - this works with the basic "e"
    - "break" - setShouldBreak();return out;
    - "break value" - setShouldBreak();return value;
    - "reduce" iteration - needs updating-out
    - "find" iteration - needs break-with-value

  Cons:
    possible performance and code-size hit:
    - ee requires more code in the withBlock: {...; return out;}
    - ee creates a setShouldBreak function every time

    But, with testing, we may decided those don't really matter.

  EXAMPLES:

    find v from o with v > 10

    Caf.ee o, null, (v, k, out, brk) ->
      brk v if v > 10


    reduce v1, v2 from o with f v1, v2

    # I think we need to remove the out = source default.

    Caf.ee o, undefined, (v2, k, v1, brk) ->
      if v1 == undefined
        v2
      else
        f v1, v2

  ###
  extendedEach: extendedEach = (source, out, withBlock) ->

    out = source if out == "undefined"

    if source?
      shouldBreak = false
      setShouldBreak = -> shouldBreak = true; undefined

      if arrayIterableTest source
        for v, k in source
          out = withBlock v, k, out, setShouldBreak
          break if shouldBreak
      else
        for k, v of source
          out = withBlock v, k, out, setShouldBreak
          break if shouldBreak

    out

  ee: extendedEach


  # # example: object v from o with v + 1
  # Caf.e(o, {}, function(v, k, into) {
  #   return into[k] = v + 1;
  # });

  # # example: object v from o when v > 3 with v + 1
  # Caf.e(o, {}, function(v, k, into) {
  #   if( v > 3 ) {
  #     return into[k] = v + 1;
  #   };
  # });

  # # example: object o
  # Caf.e(o, {}, function(v, k, into) {
  #   return into[k] = v;
  # });

  ###
  Notes:

  Comprehension loop variables are always going to mask any variables
  defined in a higher scope.

  With e2/e3 we put all the when, with and key blocks in the same function,
  so they naturally share one loop-scope.
  ###

  #########################
  # Old Lib
  #########################
  # returnFirst = (a) -> a
  # returnSecond = (a, b) -> b
  # # stops when withBlock returns false
  # eachWhile = (source, withBlock, whenBlock, into) ->

  #   into = source if into == undefined

  #   if source?
  #     if arrayIterableTest source
  #       if whenBlock
  #         for v, k in source when whenBlock v, k
  #           break unless withBlock v, k, into
  #       else
  #         for v, k in source
  #           break unless withBlock v, k, into
  #     else
  #       if whenBlock
  #         for k, v of source when whenBlock v, k
  #           break unless withBlock v, k, into
  #       else
  #         for k, v of source
  #           break unless withBlock v, k, into

  #   into

  # # each (iterate and return info which defaults to source)
  # e: e = (source, withBlock, whenBlock, into) ->

  #   into = source if into == undefined

  #   if source?
  #     if arrayIterableTest source
  #       if whenBlock then withBlock v, k, into for v, k in source when whenBlock v, k
  #       else              withBlock v, k, into for v, k in source
  #     else
  #       if whenBlock then withBlock v, k, into for k, v of source when whenBlock v, k
  #       else              withBlock v, k, into for k, v of source

  #   into

  # # object (create new object)
  # o: (source, withBlock, whenBlock, into, keyBlock) ->

  #   keyBlock ||= if arrayIterableTest source
  #     returnFirst
  #   else
  #     returnSecond

  #   withBlock ||= returnFirst

  #   e source,
  #     (v, k, into) -> into[keyBlock v, k, into] = withBlock v, k, into
  #     whenBlock
  #     into ? {}

  # # array (create new array)
  # a: (source, withBlock, whenBlock, into) ->

  #   withBlock ||= returnFirst

  #   e source,
  #     (v, k, into) -> into.push withBlock v, k, into
  #     whenBlock
  #     into ? []

  # # find
  # f: (source, withBlock, whenBlock, into) ->

  #   withBlock ||= returnFirst

  #   eachWhile source,
  #     if whenBlock then   (v, k) -> found   = withBlock v, k; false
  #     else                (v, k) -> !(found = withBlock v, k)
  #     whenBlock
  #     found = undefined

  #   found

  # # reduce
  # r: (source, withBlock, whenBlock, into) ->
  #   return into unless source?

  #   withBlock ||= returnSecond

  #   e source,
  #     if intoSet = into != undefined
  #           (v, k) -> into = withBlock into, v, k
  #     else  (v, k) -> into = if intoSet then withBlock into, v, k else intoSet = true; v
  #     whenBlock

  #   into
