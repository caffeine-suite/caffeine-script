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
      out[@class.getName()] = if @children.length == 0
        @props
      else
        a = []
        a.push @props if objectKeyCount(@props) > 0
        a.concat (c.inspectedObjects for c in @children)
      out
    type: -> @class.type

  @postCreate: ->
    [@type] = @getName().split /Stn$/
    super

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

  transformChildren: ->
    ret = null
    for child, i in @children
      if child != newChild = child.transform()
        ret ?= @children.slice()
        ret[i] = newChild
    ret || @children

  transform: ->
    if @children != newChildren = @transformChildren()
      new @class @props, newChildren
    else
      @

  # return JS code that can be used as js-expression (returns a value)
  # for statements: a; b; return c;
  toJsExpression: ->
    @toJs()

  toJsExpressionWithParens: ->
    js = @toJsExpression()
    if @getNeedsParens()
      "(#{js})"
    else
      js

  # return JS code that can be used as js-expression (returns a value)
  # for statements: (a,b,c)
  toJsParenExpression: ->
    @toJs()

  # a string that can be inserted in the middle of an ES6 interpolation string: `...`
  toInterpolatedJsStringPart: -> "${#{@toJsExpression(skipParens: true)}}"

  needsParens: true
  needsParensAsStatement: false

  getNeedsParens: -> @needsParens
  getNeedsParensAsStatement: -> @needsParensAsStatement

  @applyRequiredParens: applyRequiredParens = (expr) ->
    "(#{expr})"

  @applyParens: applyParens = (expr) ->
    if expr.match ///
        ^(

        \([^)]*\) |

        \[[^\]]*\] |

        ([!~-]*[_a-z0-9.]*)(\([^)]*\))?

        )$
        ///i
      expr
    else
      "(#{expr})"

  applyRequiredParens: applyRequiredParens
  applyParens: applyParens

  @getter
    normalizedOperand: ->
      switch op = @props.operand
        when "and" then "&&"
        when "or"  then "||"
        when "==", "is"   then "==="
        when "!=", "isnt" then "!=="
        when "not" then "!"
        else op

