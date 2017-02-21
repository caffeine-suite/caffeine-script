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


  findFileInPackage: (options = @parser.options) ->
    {sourceFile, sourceFiles, sourceRoot} = options

    if (sourceFile ||= sourceFiles?[0]) && sourceRoot
      Path ||= require 'path'
      Fs ||= require 'fs'

      {normalizedIdentifier} = @

      directory = sourceDir = Path.resolve Path.dirname sourceFile
      sourceRoot = Path.resolve sourceRoot

      found = null
      shouldContinue = true
      while shouldContinue
        found = find files = Fs.readdirSync(directory), (name) ->
          [baseName] = name.split '.'
          normalizedName = upperCamelCase baseName
          if normalizedName == normalizedIdentifier
            relative = Path.relative sourceDir, directory
            relative = Path.join relative, baseName
            relative = "./#{relative}" unless relative.match /^\./
            relative
        if found || directory == sourceRoot
          shouldContinue = false
        directory = Path.dirname directory
      found

  toJs: ->
    @rawIdentifier