Foundation = require 'art-foundation'

{log, compact, isString, compactFlatten, defineModule, createObjectTreeFactory, BaseObject, objectWithout, objectKeyCount, inspectedObjectLiteral, clone} = Foundation

defineModule module, class BaseStn extends BaseObject
  ####################
  # could go in BabelBridge standard BaseStn
  ####################
  @abstractClass()

  ###
  IN:
    props should be a plain-object-structure with an object as the root
    children should be a compact, flat array of Stns

  TODO: I'd like to make setting the parseTreeNode cleaner.
  ###
  noChildren = []
  constructor: (props, @children = noChildren) ->
    @parseTreeNode = props.parseTreeNode
    @props = objectWithout props, "parseTreeNode"
    if @children
      @labeledChildren = {}
      for child in @children
        child.parent = @
        @labeledChildren[child.label] = child

  @getter
    label: -> @props.label
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

  findParent: (stnTypePattern) ->
    {parent} = @
    while parent
      value = parent.class.type
      if value == stnTypePattern || value.match stnTypePattern
        return parent
      {parent} = parent
    null

  find: (stnTypePattern) ->
    a = for child in @children
      # log find_test_name: child.class.getName()
      value = child.class.type
      if value == stnTypePattern || value.match stnTypePattern
        child
      else
        child.find stnTypePattern

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

  doJs: (args, body) ->
    throw "TODO" if args
    body = body.toFunctionBodyJs() unless isString body

    "(function() {#{body};})()"

  toFunctionBodyJs: ->
    "return #{@toJsExpression()}"

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

  getUnusedVariableName: (root) -> @scope.getUnusedVariableName root

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

  updateScope: (@scope) ->
    child.updateScope @scope for child in @children







