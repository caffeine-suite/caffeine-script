Foundation = require 'art-foundation'

{log, compact, defineModule, createObjectTreeFactory, BaseObject, objectKeyCount, inspectedObjectLiteral, clone} = Foundation

defineModule module, class BaseStn extends BaseObject
  @abstractClass()
  constructor: (@props, @children) ->

  toJs: -> throw new Error "must override one of the toJs* functions"

  # return JS code that doesn't (have to) return a value
  toJsStatement: ->
    @toJs()

  # return JS code that can be used as js-expression (returns a value)
  toJsExpression: ->
    @toJs()

  # a string that can be inserted in the middle of an ES6 interpolation string: `...`
  toInterpolatedJsStringPart: -> "${#{@toJsExpression()}}"

  @getter
    inspectedObjects: ->
      out = {}
      o = out[@class.getName()] = clone @props
      o.children = (c.inspectedObjects for c in @children) if @children.length > 0
      out

  @postCreateConcreteClass: ({classModuleState, hotReloadEnabled})->
    super
    createObjectTreeFactory
      class: @
      (props, children) =>
        new @ props, children
