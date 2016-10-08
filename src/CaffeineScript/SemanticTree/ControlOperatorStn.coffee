Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class ControlOperatorStn extends require './BaseStn'

  constructor: ({@operand, @joiner}, [@expression, @body, @elseBody]) ->
    super

  validate: ->
    switch @operand
      when "while", "until"
        throw new Error "else not expected after #{@operand}" if @elseBody
        throw new Error "then not expected after #{@operand}" if @joiner == "then"
      when "if", "unless"
        throw new Error "do not expected after #{@operand}" if @joiner == "do"
      else
        throw new Error "INTERNAL: invalid control-operator: #{inspect @operand}"

  toJs: (options = {})->
    {returnExpression} = options
    expression = @expression.toJsExpression()
    {operand} = @

    operand = switch operand
      when "until", "unless"
        expression = "!#{@applyParens expression}"
        if operand == "until" then "while" else "if"
      else operand

    if returnExpression
      if operand == "while"
        throw new Error "TODO"
      else
        "
        #{@applyParens expression} ?
        #{@body.toJsParenExpression()} :
        #{@elseBody?.toJsExpression() || 'undefined'}
        "
    else
      "
      #{operand}
      #{@applyRequiredParens expression}
      {#{@body.toJs()};}#{
        if @elseBody
          " else {#{@elseBody?.toJs()};}"
        else ""
      }
      "

  toJsExpression: ->
    @toJs returnExpression: true
