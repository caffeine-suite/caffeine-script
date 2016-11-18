Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class DotAccessorStn extends require './BaseStn'

  constructor: (props, [@value, @identier]) ->
    super

  needsParens: false

  @getter
    isAccessor: -> true

  toJs: ->
    throw new Error "value and identier expected" unless @value and @identier
    if (identierString = @identier.toJs()).match /['"`]/
      "#{@value.toJsExpressionWithParens()}[#{identierString}]"
    else
      "#{@value.toJsExpressionWithParens()}.#{identierString}"
