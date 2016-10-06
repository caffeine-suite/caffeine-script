Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation
AssignmentStn = require './AssignmentStn'
DotAccessorStn = require './DotAccessorStn'
BracketAccessorStn = require './BracketAccessorStn'
ThisStn = require './ThisStn'
IdentifierStn = require './IdentifierStn'

defineModule module, class ClassStn extends require './BaseStn'

  constructor: (props, [@identifier, @extends, @body]) -> super

  transformBody: ->
    compactFlatten(for stn in @body.children
      if stn.type == "Object"
        for objectPropValueStn in stn.children
          [propNameStn, propValueStn] = objectPropValueStn.children
          assignToStn = switch propNameStn.type
            when "ObjectPropName"
              propName = propNameStn.toJs()
              if m = propName.match /^"@(.*)"$/
                [__, classPropName] = m
                ThisStn IdentifierStn identifier: classPropName
              else
                DotAccessorStn null,
                  ThisStn IdentifierStn identifier: "prototype"
                  IdentifierStn identifier: propName
            when "BracketAccessor"
              BracketAccessorStn null,
                ThisStn IdentifierStn identifier: "prototype"
                propNameStn.children
            else
              throw new Error "unknown object property name Stn type: #{propNameStn.type}"
          AssignmentStn assignToStn, propValueStn
      else
        stn
    )

  toJs: ->
    className = @identifier.toJs()
    out = "#{className} = Caf.defClass(class #{className}"
    if @extends
      out += " extends #{@extends.toJsExpression()}"

    initBodyJsStatements = if @body
      stn.toJs() for stn in @transformBody()
    else []

    initBodyJsStatements.push "return this;"

    out + " {}, function(){#{initBodyJsStatements.join '; '}})"
