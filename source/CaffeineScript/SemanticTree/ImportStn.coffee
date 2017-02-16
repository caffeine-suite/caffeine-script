Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation
ScopeStnMixin = require './ScopeStnMixin'

defineModule module, class ImportStn extends ScopeStnMixin require './BaseStn'

  updateScope: (@scope)->
    @bindAllUniqueIdentifiersRequested()

    [@importChildren..., @statementsChild] = @children

    for child in @importChildren
      child.updateScope @scope

    @scope.addChildScope @

    @statementsChild.updateScope @
    @importing = Object.keys @identifiersUsedButNotAssigned
    for id of @identifiersUsedButNotAssigned
      @scope.addIdentifierAssigned id
    null

  addIdentifierAssigned: (id, init) ->
    @scope.addIdentifierAssigned id, init

  jsExpressionUsesReturn: true

  @getter
    nonImportScope: ->
      {scope} = @
      {scope} = scope while scope.class == ImportStn
      scope

    importFromCaptureIdentifier: ->
      @_importFromCaptureIdentifier ||= @nonImportScope.bindUniqueIdentifier "parentImports"

  toJs: ->
    importFromCaptureIdentifier = null
    if p = @findParent "Import"
      {importFromCaptureIdentifier} = p
      true

    importFromCaptureIdentifier ||= "global"

    bodyJs = @statementsChild.toFunctionBodyJs();

    importsJs = (c.toJsExpression() for c in @importChildren)

    importingJs = "[#{("\"#{i}\"" for i in @importing).join ', '}]"

    imports = if @importing?.length > 0
      "({#{@importing.join ', '}} =
      Caf.i(#{importingJs},
      #{if @_importFromCaptureIdentifier then "#{@_importFromCaptureIdentifier} = " else ""}[#{importsJs.join ', '}, #{importFromCaptureIdentifier}])); "
    else ""

    "#{imports}#{bodyJs}"
    # "throw #{@childrenToJs()}"