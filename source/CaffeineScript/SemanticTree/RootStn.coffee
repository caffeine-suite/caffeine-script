Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject, objectKeyCount} = Foundation

LetStn = require './LetStn'
ScopeStnMixin = require './ScopeStnMixin'
StatementsStn = require './StatementsStn'

defineModule module, class RootStn extends ScopeStnMixin require './BaseStn'

  constructor: (props, [@statements]) -> super

  cloneWithNewStatements: (statements)->
    new RootStn @props, [StatementsStn compactFlatten statements]

  transform: ->
    ret = super
    # needs to be after super for correct identifier-use detection
    ret.updateScope ret
    # log RootStn_transform_afterUpdateScope:
    #   old: @
    #   new: ret
    ret

  toJsModule: ->
    {identifiersUsedButNotAssigned} = @
    identifiersUsedButNotAssigned = ("#{k} = global.#{k}" for k, v of identifiersUsedButNotAssigned)

    statementsJs = @statements.toFunctionBodyJs()
    statements = compactFlatten [
      "let #{identifiersUsedButNotAssigned.join ', '}" if identifiersUsedButNotAssigned.length > 0
      @getAutoLets()
      statementsJs
    ]

    "Caf.defMod(module, () => {#{statements.join '; '};});"

  toJs: ->
    statementsJs = @statements.toJs()
    compactFlatten([
      @getAutoLets()
      statementsJs
    ]).join('; ') + ";"



