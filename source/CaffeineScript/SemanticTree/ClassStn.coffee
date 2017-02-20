Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, compact, present, escapeJavascriptString, BaseObject} = Foundation
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
      constructor = null
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
                    if propName == "constructor"
                      constructor = propValueStn
                      null
                    else
                      AccessorStn null,
                        ThisStn IdentifierStn identifier: "prototype"
                        IdentifierStn identifier: propName
                when "Accessor"
                  AccessorStn null,
                    ThisStn IdentifierStn identifier: "prototype"
                    propNameStn.children
                else
                  throw new Error "unknown object property name Stn type: #{propNameStn.type}"
              assignToStn && AssignmentStn assignToStn, propValueStn
          else
            stn
        ThisStn()

      if constructor
        constructor.props.defineWithKeyword = "constructor"
        constructor.props.isConstructor = true
        if superCallChildren = constructor.find "Super"
          throw new Error "at most one super call in constructor" unless superCallChildren.length == 1
          superCallChildren[0].props.calledInConstructor = true

        classBody = StatementsStn
          label: "classBody"
          constructor

      children = compactFlatten [className, classExtends, body, classBody]
    else
      children = @transformChildren()
    new ClassStn @props, children


  toJs: ->
    {className, classExtends, body, classBody} = @labeledChildren
    className = className.toJs()
    out = "#{className} = Caf.defClass(class #{className}"
    if classExtends
      out += " extends #{classExtends.toJsExpression()}"

    classBodyJs = "{#{classBody?.toJs()||''}}"

    if body
      out + " #{classBodyJs}, #{body.toJs()})"
    else
      out + " #{classBodyJs})"
