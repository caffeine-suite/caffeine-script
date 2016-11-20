Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation
AssignmentStn = require './AssignmentStn'
AccessorStn = require './AccessorStn'
ThisStn = require './ThisStn'
IdentifierStn = require './IdentifierStn'
StatementsStn = require './StatementsStn'
FunctionDefinitionStn = require './FunctionDefinitionStn'

defineModule module, class ClassStn extends require './BaseStn'

  transform: ->
    {className, classExtends, body} = @labeledChildren
    # log labeledChildren:@labeledChildren, className: @className
    className = className.transform()
    classExtends = classExtends?.transform()

    if body = body?.transform()
      body = FunctionDefinitionStn label: "body", StatementsStn null,
        for stn in body.children
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
                    AccessorStn null,
                      ThisStn IdentifierStn identifier: "prototype"
                      IdentifierStn identifier: propName
                when "BracketAccessor"
                  AccessorStn null,
                    ThisStn IdentifierStn identifier: "prototype"
                    propNameStn.children
                else
                  throw new Error "unknown object property name Stn type: #{propNameStn.type}"
              AssignmentStn assignToStn, propValueStn
          else
            stn
        ThisStn()

      children = compactFlatten [className, classExtends, body]
    else
      children = @children
    new ClassStn @props, children


  toJs: ->
    {className, classExtends, body} = @labeledChildren
    className = className.toJs()
    out = "#{className} = Caf.defClass(class #{className}"
    if classExtends
      out += " extends #{classExtends.toJsExpression()}"

    if body
      out + " {}, #{body.toJs()})"
    else
      out + " {})"
