Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

ArrayStn = require './ArrayStn'

defineModule module, class ObjectStn extends require './BaseStn'

  toJs: ->  "{#{(c.toJs() for c in @children).join ', '}}"

  toJsStatement: -> "(#{@toJs()})"


  # TODO: sometimes this should merge with a parent implicit array OR
  # a parent argument list
  splitObjectsAtSameProps = (children) ->
    currentDefined = {}
    listOfObjectLiterals = [currentOrder = []]

    for child in children
      if found = child.find /ObjectPropNameStn/
        [{props:{value}}] = found
        if currentDefined[value]
          # start new
          currentDefined = {}
          listOfObjectLiterals.push currentOrder = []
        currentDefined[value] = true
      currentOrder.push child

    listOfObjectLiterals

  @newInstance: (props, children) ->
    listOfObjectLiterals = splitObjectsAtSameProps children

    if listOfObjectLiterals.length == 1
      new @ props, children
    else
      new ArrayStn null,
        for c in listOfObjectLiterals
          new @ props, c