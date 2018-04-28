"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, require("../../StandardImport")],
    (compactFlatten, merge, Error) => {
      let SemanticTree, ClassStn;
      return (
        (SemanticTree = require("../../StnRegistry")),
        (ClassStn = Caf.defClass(
          class ClassStn extends require("../BaseStn") {},
          function(ClassStn, classSuper, instanceSuper) {
            this.getter({
              className: function() {
                return this.props.className;
              },
              classSuperHandle: function() {
                return this.props.classSuperHandle;
              },
              instanceSuperHandle: function() {
                return this.props.instanceSuperHandle;
              }
            });
            this.prototype.postTransform = function() {
              let classNameStn,
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
                className,
                constructorStn,
                classSuperHandle,
                instanceSuperHandle,
                statementsToCount,
                statementCount,
                classBody,
                children;
              ({
                className: classNameStn,
                classExtends,
                body
              } = this.labeledChildren);
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
              className = classNameStn.toJs();
              if (body) {
                constructorStn = null;
                body = FunctionDefinitionStn(
                  { label: "body", returnIgnored: true },
                  FunctionDefinitionArgsStn(
                    FunctionDefinitionArgStn(
                      IdentifierStn({ identifier: className })
                    ),
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifier: (classSuperHandle = "classSuper")
                      })
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
                      (stn, cafK, cafInto) => {
                        cafInto.push(
                          stn.type === "Object"
                            ? Caf.each(
                                stn.children,
                                [],
                                (objectPropValueStn, cafK, cafInto) => {
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
                                            ? ((constructorStn = propValueStn),
                                              null)
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
                                      case "ObjectLiteralAccessor":
                                        return AccessorStn(
                                          ThisStn(
                                            IdentifierStn({
                                              identifier: "prototype"
                                            })
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
                                  cafInto.push(
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
                  Caf.each(
                    constructorStn.find(/Super/),
                    undefined,
                    superCallChild => {
                      superCallChild.props.calledInConstructor = true;
                    }
                  );
                  classBody = StatementsStn(
                    { label: "classBody" },
                    constructorStn
                  );
                }
                if (statementsToCount <= 0) {
                  body = null;
                }
                children = compactFlatten([
                  classNameStn,
                  classExtends,
                  body,
                  classBody
                ]);
              } else {
                children = this.children;
              }
              return new AssignmentStn(
                new IdentifierStn({ identifier: className }),
                new ClassStn(
                  merge(this.props, {
                    className,
                    classSuperHandle,
                    instanceSuperHandle
                  }),
                  children
                )
              );
            };
            this.prototype.toJs = function() {
              let className, classExtends, body, classBody, out, classBodyJs;
              ({
                className,
                classExtends,
                body,
                classBody
              } = this.labeledChildren);
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
                ? out +
                    ` ${Caf.toString(classBodyJs)}, ${Caf.toString(
                      body.toJs()
                    )})`
                : out + ` ${Caf.toString(classBodyJs)})`;
            };
          }
        ))
      );
    }
  );
});
