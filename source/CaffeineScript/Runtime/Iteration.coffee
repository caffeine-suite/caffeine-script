arrayIterableTest = (source) -> source?.length >= 0
returnFirst = (a) -> a
returnSecond = (a, b) -> b

# stops when withBlock returns false
eachWhile = (source, withBlock, whenBlock, into) ->

  into = source if into == undefined

  if source?
    if arrayIterableTest source
      if whenBlock
        for v, k in source when whenBlock v, k
          break unless withBlock v, k, into
      else
        for v, k in source
          break unless withBlock v, k, into
    else
      if whenBlock
        for k, v of source when whenBlock v, k
          break unless withBlock v, k, into
      else
        for k, v of source
          break unless withBlock v, k, into

  into

module.exports =

  # each (iterate and return info which defaults to source)
  e: e = (source, withBlock, whenBlock, into) ->

    into = source if into == undefined

    if source?
      if arrayIterableTest source
        if whenBlock then withBlock v, k, into for v, k in source when whenBlock v, k
        else              withBlock v, k, into for v, k in source
      else
        if whenBlock then withBlock v, k, into for k, v of source when whenBlock v, k
        else              withBlock v, k, into for k, v of source

    into

  # object (create new object)
  o: (source, withBlock, whenBlock, into, keyBlock) ->

    keyBlock ||= if arrayIterableTest source
      returnFirst
    else
      returnSecond

    withBlock ||= returnFirst

    e source,
      (v, k, into) -> into[keyBlock v, k, into] = withBlock v, k, into
      whenBlock
      into ? {}

  # array (create new array)
  a: (source, withBlock, whenBlock, into) ->

    withBlock ||= returnFirst

    e source,
      (v, k, into) -> into.push withBlock v, k, into
      whenBlock
      into ? []

  # find
  f: (source, withBlock, whenBlock, into) ->

    withBlock ||= returnFirst

    eachWhile source,
      if whenBlock then   (v, k) -> found   = withBlock v, k; false
      else                (v, k) -> !(found = withBlock v, k)
      whenBlock
      found = undefined

    found

  # reduce
  r: (source, withBlock, whenBlock, into) ->
    return into unless source?

    withBlock ||= returnSecond

    e source,
      if intoSet = into != undefined
            (v, k) -> into = withBlock into, v, k
      else  (v, k) -> into = if intoSet then withBlock into, v, k else intoSet = true; v
      whenBlock

    into
