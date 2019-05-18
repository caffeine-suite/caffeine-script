"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, require("../../StandardImport")],
    (compactFlatten, merge, Error) => {
      let SemanticTree, ClassStn;
      SemanticTree = require("../../StnRegistry");
      return (ClassStn = Caf.defClass(
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
            },
            body: function() {
              return this.labeledChildren.body;
            }
          });
          this.prototype.decorate = function() {
            let base;
            return Caf.each2(
              Caf.exists((base = this.body)) && base.children,
              stn =>
                Caf.each2(stn.children, objectPropValueStn => {
                  let propNameStn, propValueStn;
                  [propNameStn, propValueStn] = objectPropValueStn.children;
                  return propNameStn.type === "ObjectPropName" &&
                    propNameStn.propName === "constructor"
                    ? ((propValueStn.props.isConstructor = true),
                      Caf.each2(
                        propValueStn.find(/Super/),
                        superCallChild =>
                          (superCallChild.props.calledInConstructor = true)
                      ))
                    : undefined;
                }),
              stn => stn.type === "Object"
            );
          };
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
            className = classNameStn.identifier;
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
                  (statementsToCount = Caf.array(body.children, stn =>
                    stn.type === "Object"
                      ? Caf.array(stn.children, objectPropValueStn => {
                          let propNameStn,
                            propValueStn,
                            assignToStn,
                            propName,
                            isThisProp;
                          [
                            propNameStn,
                            propValueStn
                          ] = objectPropValueStn.children;
                          assignToStn = (() => {
                            switch (propNameStn.type) {
                              case "ObjectPropName":
                                ({ propName, isThisProp } = propNameStn);
                                return isThisProp
                                  ? ThisStn(
                                      IdentifierStn({ identifier: propName })
                                    )
                                  : propName === "constructor"
                                  ? ((constructorStn = propValueStn), null)
                                  : AccessorStn(
                                      ThisStn(
                                        IdentifierStn({
                                          identifier: "prototype"
                                        })
                                      ),
                                      IdentifierStn({ identifier: propName })
                                    );
                              case "ObjectLiteralAccessor":
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
                          return (
                            assignToStn &&
                            AssignmentStn(assignToStn, propValueStn)
                          );
                        })
                      : stn
                  ))
                )
              );
              statementCount = statementsToCount.length;
              if (constructorStn) {
                statementCount -= 1;
                constructorStn.props.isConstructor = true;
                Caf.each2(
                  constructorStn.find(/Super/),
                  superCallChild =>
                    (superCallChild.props.calledInConstructor = true)
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
            return AssignmentStn(
              IdentifierStn({ identifier: className }),
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
          this.prototype.toSourceNode = function() {
            let className, classExtends, body, classBody, temp;
            ({
              className,
              classExtends,
              body,
              classBody
            } = this.labeledChildren);
            return this.createSourceNode(
              "Caf.defClass(class ",
              className.toSourceNode(),
              " extends ",
              (temp =
                Caf.exists(classExtends) &&
                classExtends.toSourceNode({
                  expression: true,
                  dotBase: true
                })) != null
                ? temp
                : "Object",
              " {",
              Caf.exists(classBody) &&
                classBody.toSourceNode({ classBody: true }),
              "}",
              body ? [", ", body.toSourceNode()] : undefined,
              ")"
            );
          };
        }
      ));
    }
  );
});
