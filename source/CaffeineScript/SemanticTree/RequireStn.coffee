Foundation = require 'art-foundation'
Path = null
Fs = null

{log, find, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject, dashCase, upperCamelCase} = Foundation

defineModule module, class RequireStn extends require './BaseStn'

  updateScope: (@scope) ->
    @scope.addIdentifierAssigned @rawIdentifier, "require('#{@requireString}')"
    super

  @getter
    normalizedIdentifier: -> upperCamelCase @rawIdentifier
    npmIdentifier: -> dashCase @rawIdentifier
    rawIdentifier: -> @children[0].props.identifier
    requireString: ->
      if relativeFile = @findFileInPackage()
        relativeFile
      else
        @npmIdentifier


  findFileInPackage: ({sourceFiles, sourceRoot} = @parser.options) ->
    return unless (sourceFile = sourceFiles?[0]) && sourceRoot
    Path ||= require 'path'
    Fs ||= require 'fs'

    {normalizedIdentifier} = @

    directory = sourceDir = Path.resolve Path.dirname sourceFile
    sourceRoot = Path.resolve sourceRoot
    # log findFileInPackage: {sourceRoot, sourceDir}
    while true
      found = find files = Fs.readdirSync(directory), (name) ->
        [baseName] = name.split '.'
        normalizedName = upperCamelCase baseName
        if normalizedName == normalizedIdentifier
          relative = Path.relative sourceDir, directory
          relative = Path.join relative, baseName
          relative = "./#{relative}" unless relative.match /^\./
          relative
      return found if found
      break if directory == sourceRoot
      directory = Path.dirname directory
    null

  toJs: ->
    @rawIdentifier