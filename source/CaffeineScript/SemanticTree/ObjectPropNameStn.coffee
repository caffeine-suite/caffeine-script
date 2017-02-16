Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

legalUnquotedPropName = /^(0|[1-9a-z_][0-9_a-z]*)$/i

defineModule module, class ObjectPropNameStn extends require './BaseStn'

  constructor: ->
    super
    [nameStn] = @children
    @props.value = if nameStn
      # TODO: we should validate
      nameStn.toJs()
    else
      @parseTreeNode.toString()

  toJs: ->
    # log {@labeledChildren, @children}
    [nameStn] = @children
    if nameStn
      str = nameStn.toJs()
      if nameStn.children.length > 0
        "[#{str}]"
      else
        str
    else
      value = @parseTreeNode.toString()
      value = escapeJavascriptString value unless value.match legalUnquotedPropName
      value
