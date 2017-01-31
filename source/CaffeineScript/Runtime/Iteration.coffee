arrayIterableTest = (source) -> source?.length >= 0
returnFirst = (a) -> a
returnSecond = (a, b) -> b

# stops when withBlock returns false
eachWhile = (source, withBlock, whenBlock, into) ->

  into = source if into == undefined

  if arrayIterableTest source
    if whenBlock
      for v, k in source when w = whenBlock v, k
        break unless withBlock v, k, into, w
    else
      for v, k in source
        break unless withBlock v, k, into
  else
    if whenBlock
      for k, v of source when w = whenBlock v, k
        break unless withBlock v, k, into, w
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
        if whenBlock then withBlock v, k, into, w for v, k in source when w = whenBlock v, k
        else              withBlock v, k, into    for v, k in source
      else
        if whenBlock then withBlock v, k, into, w for k, v of source when w = whenBlock v, k
        else              withBlock v, k, into    for k, v of source

    into

  # object (create new object)
  o: (source, withBlock, whenBlock, into, keyBlock) ->

    keyBlock ||= if arrayIterableTest source
      returnFirst
    else
      returnSecond

    withBlock ||= returnFirst

    e source,
      (v, k, into, w) -> into[keyBlock v, k, into, w] = withBlock v, k, into, w
      whenBlock
      into ? {}

  # array (create new array)
  a: (source, withBlock, whenBlock, into) ->

    withBlock ||= returnFirst

    e source,
      (v, k, into, w) -> into.push withBlock v, k, into, w
      whenBlock
      into ? []

  # find
  f: (source, withBlock, whenBlock, into) ->

    withBlock ||= returnFirst

    eachWhile source,
      if whenBlock then   (v, k, into, w) -> found   = withBlock v, k, null, w; false
      else                (v, k, into, w) -> !(found = withBlock v, k, null, w)
      whenBlock
      found = undefined

    found

  # reduce
  r: (source, withBlock, whenBlock, into) ->
    return into unless source?

    e source,
      if intoSet = into != undefined
            (v, k, __, w)-> into = withBlock into, v, k, w
      else  (v, k, __, w)-> into = if intoSet then withBlock into, v, k, w else intoSet = true; v
      whenBlock

    into
