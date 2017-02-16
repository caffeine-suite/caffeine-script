isNonNegativeInt = (x) -> (x | 0 == x) && x >= 0
arrayIterableTest = (source) -> source && isNonNegativeInt source.length

###
Notes:

Comprehension loop variables are always going to mask any variables
defined in a higher scope.

With e/ee we put all the when, with and key blocks in the same function,
so they naturally share one loop-scope.
###

module.exports =

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

    # example: object v from o with v + 1
    Caf.e(o, {}, function(v, k, into) {
      return into[k] = v + 1;
    });

    # example: object v from o when v > 3 with v + 1
    Caf.e(o, {}, function(v, k, into) {
      if( v > 3 ) {
        return into[k] = v + 1;
      };
    });

    # example: object o
    Caf.e(o, {}, function(v, k, into) {
      return into[k] = v;
    });

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


