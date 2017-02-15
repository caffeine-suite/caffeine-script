Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject, dashCase, upperCamelCase} = Foundation

defineModule module, class RequireStn extends require './BaseStn'

  updateScope: (@scope) ->
    @scope.addIdentifierAssigned @jsIdentifier, "require('#{@npmIdentifier}')"
    super

  @getter
    jsIdentifier: -> upperCamelCase @rawIdentifier
    npmIdentifier: -> dashCase @rawIdentifier
    rawIdentifier: -> @children[0].props.identifier

  toJs: -> @jsIdentifier