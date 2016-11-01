Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class DestructuringAssignmentStn extends require './BaseStn'

  toJs: ->
    {structure, value} = @labeledChildren
    "(#{structure.toJs()} = #{value.toJs()})"
