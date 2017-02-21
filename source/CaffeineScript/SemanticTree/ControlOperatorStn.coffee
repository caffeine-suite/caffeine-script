Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, formattedInspect, isFunction, BaseObject} = Foundation

defineModule module, class ControlOperatorStn extends require './BaseStn'

  constructor: ({@operand, @joiner}, [@expression, @body, @elseBody]) ->
    super
    @validate()

  validate: ->
    switch @operand
      when "while", "until"
        throw new Error "else not expected after #{@operand}" if @elseBody
        throw new Error "then not expected after #{@operand}" if @joiner == "then"
      when "if", "unless"
        throw new Error "do not expected after #{@operand}" if @joiner == "do"
      else
        throw new Error "INTERNAL: invalid control-operator: #{formattedInspect @operand}"

  toJs: (options = {})->
    {returnExpression, returnValueIsIgnored} = options
    expression = @expression.toJsExpression()
    {operand} = @

    operand = switch operand
      when "until", "unless"
        expression = "!#{@applyParens expression}"
        if operand == "until" then "while" else "if"
      else operand

    if returnExpression
      if operand == "while"
        if returnValueIsIgnored
          "
          (() => {while
          #{@applyRequiredParens expression}
          {#{@body.toFunctionBodyJs false};};})()
          "
        else
          tempVarIdentifier = @scope.uniqueIdentifier
          "
          (() => {while
          #{@applyRequiredParens expression}
          {#{@body.toFunctionBodyJs "#{tempVarIdentifier} ="};};
          return #{tempVarIdentifier}})()
          "
      else
        if @elseBody
          "
          #{@applyParens expression} ?
          #{@body.toJsParenExpression()} :
          #{@elseBody.toJsParenExpression()}
          "
        else
          "
          #{@applyParens expression} &&
          #{@body.toJsParenExpression()}
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

  toJsParenExpression: ->
    @applyRequiredParens @toJs returnExpression: true

  toJsExpression: (returnValueIsIgnored) ->
    @toJs returnExpression: true, returnValueIsIgnored: returnValueIsIgnored
