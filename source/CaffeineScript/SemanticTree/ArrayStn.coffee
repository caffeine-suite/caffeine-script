Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class ArrayStn extends require './BaseStn'

  @getter
    implicitArray: -> @props.implicitArray

  constructor: (props, children) ->
    # collapse implicit arrays into parents
    if children.length == 1 && children[0].props.implicitArray
      children = children[0].children
    super props, children

  toJs: ->  "[#{(c.toJsExpression() for c in @children).join ', '}]"