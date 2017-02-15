Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation
ScopeStnMixin = require './ScopeStnMixin'

defineModule module, class ImportStn extends ScopeStnMixin require './BaseStn'

  updateScope: (@scope)->
    @bindAllUniqueIdentifiersRequested()
    @children[0].updateScope @scope

    @scope.addChildScope @

    @children[1].updateScope @
    @importing = Object.keys @identifiersUsedButNotAssigned
    for id of @identifiersUsedButNotAssigned
      @addIdentifierAssigned id
    null

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

    [importFrom, statements] = @children
    bodyJs = compactFlatten([@getAutoLets(), statements.toFunctionBodyJs()]).join "; "

    imports = if @importing?.length > 0
      "({#{@importing.join ', '}} =
      Caf.i(#{JSON.stringify @importing},
      #{if @_importFromCaptureIdentifier then "#{@_importFromCaptureIdentifier} = " else ""}[#{importFrom.toJs()}, #{importFromCaptureIdentifier}])); "
    else ""

    "#{imports}#{bodyJs}"
    # "throw #{@childrenToJs()}"