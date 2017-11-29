"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SemanticTree, ClassStn, Error, compactFlatten, merge;
  ({ Error, compactFlatten, merge } = Caf.import(
    ["Error", "compactFlatten", "merge"],
    [global, require("../../StandardImport")]
  ));
  SemanticTree = require("../../StnRegistry");
  return (ClassStn = Caf.defClass(
    class ClassStn extends require("../BaseStn") {},
    function(ClassStn, classSuper, instanceSuper) {
      this.prototype.postTransform = function() {
        let className,
          classExtends,
          body,
          FunctionDefinitionArgsStn,
          StatementsStn,
          FunctionDefinitionStn,
          IdentifierStn,
          FunctionDefinitionArgStn,
          AssignmentStn,
          AccessorStn,
          ThisStn,
          constructorStn,
          classSuperHandle,
          instanceSuperHandle,
          statementsToCount,
          statementCount,
          superCallChildren,
          classBody,
          children;
        ({ className, classExtends, body } = this.labeledChildren);
        ({
          FunctionDefinitionArgsStn,
          StatementsStn,
          FunctionDefinitionStn,
          IdentifierStn,
          FunctionDefinitionArgStn,
          AssignmentStn,
          AccessorStn,
          ThisStn
        } = SemanticTree);
        className = className.transform();
        classExtends = Caf.exists(classExtends) && classExtends.transform();
        if ((body = Caf.exists(body) && body.transform())) {
          constructorStn = null;
          body = FunctionDefinitionStn(
            { label: "body", returnIgnored: true },
            FunctionDefinitionArgsStn(
              FunctionDefinitionArgStn(
                IdentifierStn({ identifier: className.toJs() })
              ),
              FunctionDefinitionArgStn(
                IdentifierStn({ identifier: (classSuperHandle = "classSuper") })
              ),
              FunctionDefinitionArgStn(
                IdentifierStn({
                  identifier: (instanceSuperHandle = "instanceSuper")
                })
              )
            ),
            StatementsStn(
              (statementsToCount = Caf.each(
                body.children,
                [],
                (stn, k, into) => {
                  into.push(
                    stn.type === "Object"
                      ? Caf.each(
                          stn.children,
                          [],
                          (objectPropValueStn, k, into) => {
                            let propNameStn,
                              propValueStn,
                              assignToStn,
                              propName,
                              m,
                              __,
                              classPropName;
                            [
                              propNameStn,
                              propValueStn
                            ] = objectPropValueStn.children;
                            assignToStn = (() => {
                              switch (propNameStn.type) {
                                case "ObjectPropName":
                                  propName = propNameStn.toJs();
                                  return (m = propName.match(/^"@(.*)"$/))
                                    ? (([__, classPropName] = m),
                                      ThisStn(
                                        IdentifierStn({
                                          identifier: classPropName
                                        })
                                      ))
                                    : propName === "constructor"
                                      ? ((constructorStn = propValueStn), null)
                                      : AccessorStn(
                                          ThisStn(
                                            IdentifierStn({
                                              identifier: "prototype"
                                            })
                                          ),
                                          IdentifierStn({
                                            identifier: propName
                                          })
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
                              assignToStn &&
                                AssignmentStn(assignToStn, propValueStn)
                            );
                          }
                        )
                      : stn
                  );
                }
              ))
            )
          );
          statementCount = statementsToCount.length;
          if (constructorStn) {
            statementCount -= 1;
            constructorStn.props.isConstructor = true;
            if ((superCallChildren = constructorStn.find("Super"))) {
              if (!(superCallChildren.length === 1)) {
                throw new Error("at most one super call in constructor");
              }
              superCallChildren[0].props.calledInConstructor = true;
            }
            classBody = StatementsStn({ label: "classBody" }, constructorStn);
          }
          if (statementsToCount <= 0) {
            body = null;
          }
          children = compactFlatten([className, classExtends, body, classBody]);
        } else {
          children = this.transformChildren();
        }
        return new AssignmentStn(
          new IdentifierStn({ identifier: className.toJs() }),
          new ClassStn(
            merge(this.props, { classSuperHandle, instanceSuperHandle }),
            children
          )
        );
      };
      this.prototype.toJs = function() {
        let className, classExtends, body, classBody, out, classBodyJs;
        ({ className, classExtends, body, classBody } = this.labeledChildren);
        className = className.toJs();
        out = `Caf.defClass(class ${Caf.toString(
          className
        )} extends ${Caf.toString(
          (Caf.exists(classExtends) && classExtends.toJsExpression()) ||
            "Object"
        )}`;
        classBodyJs = `{${Caf.toString(
          (Caf.exists(classBody) && classBody.toJs()) || ""
        )}}`;
        return body
          ? out + ` ${Caf.toString(classBodyJs)}, ${Caf.toString(body.toJs())})`
          : out + ` ${Caf.toString(classBodyJs)})`;
      };
    }
  ));
});
