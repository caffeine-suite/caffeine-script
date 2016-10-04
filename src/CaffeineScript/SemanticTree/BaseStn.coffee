Foundation = require 'art-foundation'

{log, compact, compactFlatten, defineModule, createObjectTreeFactory, BaseObject, objectWithout, objectKeyCount, inspectedObjectLiteral, clone} = Foundation

defineModule module, class BaseStn extends BaseObject
  ####################
  # could go in BabelBridge standard BaseStn
  ####################
  @abstractClass()
  constructor: (props, @children) ->
    @parseTreeNode = props.parseTreeNode
    @props = objectWithout props, "parseTreeNode"

  @getter
    inspectedObjects: ->
      out = {}
      a = []
      a.push @props if objectKeyCount(@props) > 0
      out[@class.getName()] = a.concat (c.inspectedObjects for c in @children)
      out

  # so subclasses can add custom newInstance implementations
  @newInstance: (props, children) ->
    new @ props, children

  @postCreateConcreteClass: ({classModuleState, hotReloadEnabled})->
    super
    createObjectTreeFactory
      class: @
      (props, children) =>
        @newInstance props, children

  find: (stnClassPattern) ->
    a = for child in @children
      # log find_test_name: child.class.getName()
      if child.class.getName().match stnClassPattern
        # log find_found:child
        child
      else
        child.find stnClassPattern

    a = compactFlatten a
    if a.length == 0
      null
    else
      a

  ####################
  # Unique to CafScript
  ####################
  childrenToJs: (joiner = '')->
    (c.toJs() for c in @children).join joiner

  toJs: -> throw new Error "must override one of the toJs* functions"

  # return JS code that doesn't (have to) return a value
  toJsStatement: ->
    @toJs()

  # return JS code that can be used as js-expression (returns a value)
  toJsExpression: ->
    @toJs()

  # a string that can be inserted in the middle of an ES6 interpolation string: `...`
  toInterpolatedJsStringPart: -> "${#{@toJsExpression(skipParens: true)}}"
