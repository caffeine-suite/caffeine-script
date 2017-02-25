let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    AssignmentStn = require("./AssignmentStn"),
    AccessorStn = require("./AccessorStn"),
    ThisStn = require("./ThisStn"),
    IdentifierStn = require("./IdentifierStn"),
    StatementsStn = require("./StatementsStn"),
    FunctionDefinitionStn = require("./FunctionDefinitionStn"),
    BaseStn = require("./BaseStn"),
    Error,
    compactFlatten,
    ClassStn;
  ({ Error, compactFlatten, ClassStn } = Caf.i(
    ["Error", "compactFlatten", "ClassStn"],
    [ArtFoundation, global]
  ));
  AssignmentStn;
  AccessorStn;
  ThisStn;
  IdentifierStn;
  StatementsStn;
  FunctionDefinitionStn;
  return ClassStn = Caf.defClass(class ClassStn extends BaseStn {}, function() {
    this.prototype.transform = function() {
      let className, classExtends, body, superCallChildren, classBody, children;
      ({ className, classExtends, body } = this.labeledChildren);
      className = className.transform();
      classExtends = Caf.exists(classExtends) && classExtends.transform();
      if (body = Caf.exists(body) && body.transform()) {
        constructor = null;
        body = FunctionDefinitionStn(
          { label: "body" },
          StatementsStn(
            Caf.e(body.children, [], (stn, k, into) => {
              into.push(
                stn.type === "Object"
                  ? Caf.e(stn.children, [], (objectPropValueStn, k, into) => {
                      let propNameStn,
                        propValueStn,
                        assignToStn,
                        propName,
                        m,
                        __,
                        classPropName;
                      [propNameStn, propValueStn] = objectPropValueStn.children;
                      assignToStn = (() => {
                        switch (propNameStn.type) {
                          case "ObjectPropName":
                            propName = propNameStn.toJs();
                            return (m = propName.match(/^"@(.*)"$/))
                              ? ([__, classPropName] = m, ThisStn(
                                  IdentifierStn({ identifier: classPropName })
                                ))
                              : propName === "constructor"
                                  ? (constructor = propValueStn, null)
                                  : AccessorStn(
                                      ThisStn(
                                        IdentifierStn({
                                          identifier: "prototype"
                                        })
                                      ),
                                      IdentifierStn({ identifier: propName })
                                    );
                          case "Accessor":
                            return AccessorStn(
                              ThisStn(
                                IdentifierStn({ identifier: "prototype" })
                              ),
                              propNameStn.children
                            );
                          default:
                            return (() => {
                              throw new Error(
                                `unknown object property name Stn type: ${propNameStn.type}`
                              );
                            })();
                        }
                      })();
                      into.push(
                        assignToStn && AssignmentStn(assignToStn, propValueStn)
                      );
                    })
                  : stn
              );
            }),
            ThisStn()
          )
        );
        if (constructor) {
          constructor.props.isConstructor = true;
          if (superCallChildren = constructor.find("Super")) {
            if (!(superCallChildren.length === 1)) {
              throw new Error("at most one super call in constructor");
            }
            superCallChildren[0].props.calledInConstructor = true;
          }
          classBody = StatementsStn({ label: "classBody" }, constructor);
        }
        children = compactFlatten([className, classExtends, body, classBody]);
      } else {
        children = this.transformChildren();
      }
      return new ClassStn(this.props, children);
    };
    this.prototype.toJs = function() {
      let className, classExtends, body, classBody, out, classBodyJs;
      ({ className, classExtends, body, classBody } = this.labeledChildren);
      className = className.toJs();
      out = `${className} = Caf.defClass(class ${className}`;
      if (classExtends) {
        out += ` extends ${classExtends.toJsExpression()}`;
      }
      classBodyJs = `{${Caf.exists(classBody) && classBody.toJs() || ""}}`;
      return body
        ? out + ` ${classBodyJs}, ${body.toJs()})`
        : out + ` ${classBodyJs})`;
    };
    return this;
  });
});
