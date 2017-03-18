let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    AssignmentStn = require("./AssignmentStn"),
    AccessorStn = require("./AccessorStn"),
    ThisStn = require("./ThisStn"),
    IdentifierStn = require("./IdentifierStn"),
    StatementsStn = require("./StatementsStn"),
    FunctionDefinitionStn = require("./FunctionDefinitionStn"),
    FunctionDefinitionArgsStn = require("./FunctionDefinitionArgsStn"),
    FunctionDefinitionArgStn = require("./FunctionDefinitionArgStn"),
    UniqueIdentifierHandle = require("./UniqueIdentifierHandle"),
    BaseStn = require("./BaseStn"),
    Error,
    compactFlatten,
    merge;
  ({ Error, compactFlatten, merge } = Caf.i(
    ["Error", "compactFlatten", "merge"],
    [StandardImport, global]
  ));
  AssignmentStn;
  AccessorStn;
  ThisStn;
  IdentifierStn;
  StatementsStn;
  FunctionDefinitionStn;
  FunctionDefinitionArgsStn;
  FunctionDefinitionArgStn;
  UniqueIdentifierHandle;
  return ClassStn = Caf.defClass(class ClassStn extends BaseStn {}, function(
    ClassStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.transform = function() {
      let className,
        classExtends,
        body,
        classSuperHandle,
        instanceSuperHandle,
        statementsToCount,
        statementCount,
        superCallChildren,
        classBody,
        children;
      ({ className, classExtends, body } = this.labeledChildren);
      className = className.transform();
      classExtends = Caf.exists(classExtends) && classExtends.transform();
      if (body = Caf.exists(body) && body.transform()) {
        constructor = null;
        body = FunctionDefinitionStn(
          { label: "body", returnIgnored: true },
          FunctionDefinitionArgsStn(
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: className.toJs() })
            ),
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: classSuperHandle = "classSuper" })
            ),
            FunctionDefinitionArgStn(
              IdentifierStn({
                identifier: instanceSuperHandle = "instanceSuper"
              })
            )
          ),
          StatementsStn(
            statementsToCount = Caf.e(body.children, [], (stn, k, into) => {
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
                                `unknown object property name Stn type: ${Caf.toString(
                                  propNameStn.type
                                )}`
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
            })
          )
        );
        statementCount = statementsToCount.length;
        if (constructor) {
          statementCount -= 1;
          constructor.props.isConstructor = true;
          if (superCallChildren = constructor.find("Super")) {
            if (!(superCallChildren.length === 1)) {
              throw new Error("at most one super call in constructor");
            }
            superCallChildren[0].props.calledInConstructor = true;
          }
          classBody = StatementsStn({ label: "classBody" }, constructor);
        }
        if (statementsToCount <= 0) {
          body = null;
        }
        children = compactFlatten([className, classExtends, body, classBody]);
      } else {
        children = this.transformChildren();
      }
      return new ClassStn(
        merge(this.props, {
          classSuperHandle: classSuperHandle,
          instanceSuperHandle: instanceSuperHandle
        }),
        children
      );
    };
    this.prototype.toJs = function() {
      let className, classExtends, body, classBody, out, classBodyJs;
      ({ className, classExtends, body, classBody } = this.labeledChildren);
      className = className.toJs();
      out = `${Caf.toString(className)} = Caf.defClass(class ${Caf.toString(
        className
      )}`;
      if (classExtends) {
        out += ` extends ${Caf.toString(classExtends.toJsExpression())}`;
      }
      classBodyJs = `{${Caf.toString(
        Caf.exists(classBody) && classBody.toJs() || ""
      )}}`;
      return body
        ? out + ` ${Caf.toString(classBodyJs)}, ${Caf.toString(body.toJs())})`
        : out + ` ${Caf.toString(classBodyJs)})`;
    };
  });
});
