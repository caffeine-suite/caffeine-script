Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class InterpolatedStringStn extends require './BaseStn'

  toJs: -> "`#{(c.toInterpolatedJsStringPart() for c in @children).join ''}`"