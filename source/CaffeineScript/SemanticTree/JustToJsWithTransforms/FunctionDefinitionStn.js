"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "log"],
    [global, require("../../StandardImport")],
    (compactFlatten, log) => {
      let StnRegistry, FunctionDefinitionStn;
      return (
        (StnRegistry = require("../../StnRegistry")),
        (FunctionDefinitionStn = Caf.defClass(
          class FunctionDefinitionStn extends require("../ScopeStnMixin")(
            require("../BaseStn")
          ) {
            constructor(props, children, pretransformedStn) {
              let onlyChild;
              if (children.length === 1) {
                [onlyChild] = children;
                if (
                  !(
                    onlyChild instanceof
                    StnRegistry.FunctionDefinitionArgsStn.class
                  )
                ) {
                  children = [
                    StnRegistry.FunctionDefinitionArgsStn(),
                    children[0]
                  ];
                }
              }
              super(props, children, pretransformedStn);
              this.arguments = children[0];
              this.statements = children[1];
              this._updatingArgumentScope = false;
            }
          },
          function(FunctionDefinitionStn, classSuper, instanceSuper) {
            this.prototype.cloneWithNewStatements = function(statements) {
              return new this.class(this.props, [
                this.arguments,
                StnRegistry.StatementsStn(compactFlatten(statements))
              ]);
            };
            this.getter({
              needsParens: function() {
                return false;
              },
              needsParensAsStatement: function() {
                return !this.props.bound;
              },
              childrenToUpdateScope: function() {
                return compactFlatten([this.statements]);
              }
            });
            this.prototype.updateScope = function() {
              instanceSuper.updateScope.apply(this, arguments);
              return this.arguments
                ? (Caf.each(
                    this.arguments.argumentNameList,
                    {},
                    (name, cafK, cafInto) => {
                      cafInto[cafK] = this.addArgumentName(name);
                    }
                  ),
                  (this._updatingArgumentScope = true),
                  this.arguments.updateScope(this),
                  (this._updatingArgumentScope = false))
                : undefined;
            };
            this.prototype.addIdentifierAssigned = function(identifier) {
              return this._updatingArgumentScope
                ? this.addArgumentName(identifier)
                : instanceSuper.addIdentifierAssigned.apply(this, arguments);
            };
            this.prototype.postTransform = function() {
              let foundParent;
              if (this.props.bound === "auto") {
                this.props.bound = (foundParent = this.pretransformedStn.findParent(
                  /Class|FunctionDefinition/
                ))
                  ? foundParent.type === "Class"
                    ? false
                    : true
                  : false;
              }
              return instanceSuper.postTransform.apply(this, arguments);
            };
            this.getter({
              body: function() {
                return this.children[1];
              },
              args: function() {
                return this.children[0];
              },
              statementStns: function() {
                let cafBase;
                return Caf.exists((cafBase = this.body)) && cafBase.children;
              },
              argumentStns: function() {
                let cafBase;
                return Caf.exists((cafBase = this.args)) && cafBase.children;
              }
            });
            this.prototype.getPostTransformStatementStns = function() {
              let SuperStn,
                ArraySpreadElementStn,
                ReferenceStn,
                IdentifierStn,
                isConstructor,
                statementStns,
                preBodyStatements,
                lastSuperContainingStatementIndex;
              ({
                SuperStn,
                ArraySpreadElementStn,
                ReferenceStn,
                IdentifierStn
              } = require("../../StnRegistry"));
              ({ isConstructor } = this.props);
              ({ statementStns } = this);
              preBodyStatements = null;
              Caf.each(this.argumentStns, undefined, arg => {
                let stn;
                if ((stn = arg.generatePreBodyStatementStn())) {
                  (preBodyStatements != null
                    ? preBodyStatements
                    : (preBodyStatements = [])
                  ).push(stn);
                }
              });
              return compactFlatten(
                isConstructor
                  ? (log("isConstructor"),
                    (lastSuperContainingStatementIndex = null),
                    log({ statementStns }),
                    Caf.each(statementStns, undefined, (v, i) => {
                      if (
                        v.type === "Super" ||
                        v.find(/Super/, /FunctionDefinition|Class/)
                      ) {
                        lastSuperContainingStatementIndex = i;
                      }
                    }),
                    lastSuperContainingStatementIndex != null &&
                    lastSuperContainingStatementIndex >= 0
                      ? (log("have super"),
                        preBodyStatements
                          ? (log(
                              "insert preBodyStatements just after the last super-containting statement"
                            ),
                            [
                              statementStns.slice(
                                0,
                                lastSuperContainingStatementIndex + 1
                              ),
                              preBodyStatements,
                              statementStns.slice(
                                lastSuperContainingStatementIndex + 1,
                                statementStns.length
                              )
                            ])
                          : statementStns)
                      : (log("no super, insert one first"),
                        [
                          SuperStn(
                            ArraySpreadElementStn(
                              ReferenceStn(
                                IdentifierStn({ identifier: "arguments" })
                              )
                            )
                          ),
                          preBodyStatements,
                          statementStns
                        ]))
                  : preBodyStatements
                    ? (log("not constructor, but have preBodyStatements"),
                      [preBodyStatements, statementStns])
                    : (log("just return statementStns"), statementStns)
              );
            };
            this.prototype.getBodyJs = function() {
              let returnIgnored,
                isConstructor,
                argsDef,
                body,
                preBodyStatements,
                bodyJsArray,
                statements,
                lastSuperContainingStatementIndex,
                beforeSuper,
                afterSuper,
                superJs;
              ({ returnIgnored, isConstructor } = this.props);
              returnIgnored || (returnIgnored = isConstructor);
              [argsDef, body] = this.children;
              preBodyStatements = Caf.each(
                Caf.exists(argsDef) && argsDef.children,
                [],
                (arg, cafK, cafInto) => {
                  cafInto.push(arg.getFunctionPreBodyStatementsJs());
                }
              );
              bodyJsArray =
                Caf.exists(body) && body.toFunctionBodyJsArray(!returnIgnored);
              statements = compactFlatten(
                isConstructor
                  ? ((lastSuperContainingStatementIndex = Caf.extendedEach(
                      bodyJsArray,
                      undefined,
                      (v, i, cafInto, cafBrk) => {
                        return v.match(/^super\(/) && (cafBrk(), i);
                      }
                    )),
                    lastSuperContainingStatementIndex != null &&
                    lastSuperContainingStatementIndex >= 0
                      ? ((beforeSuper = bodyJsArray.slice(
                          0,
                          lastSuperContainingStatementIndex
                        )),
                        (afterSuper = bodyJsArray.slice(
                          lastSuperContainingStatementIndex + 1,
                          bodyJsArray.length
                        )),
                        (superJs =
                          bodyJsArray[lastSuperContainingStatementIndex]),
                        [
                          this.getAutoLets(),
                          beforeSuper,
                          superJs,
                          preBodyStatements,
                          afterSuper
                        ])
                      : [
                          this.getAutoLets(),
                          "super(...arguments)",
                          preBodyStatements,
                          bodyJsArray
                        ])
                  : [this.getAutoLets(), preBodyStatements, bodyJsArray]
              );
              return statements.length > 0
                ? `${Caf.toString(statements.join("; "))};`
                : "";
            };
            this.prototype.getArgsJs = function() {
              let cafTemp, cafBase;
              return (cafTemp =
                Caf.exists((cafBase = this.children[0])) && cafBase.toJs()) !=
                null
                ? cafTemp
                : "()";
            };
            this.prototype.toJs = function() {
              let isConstructor, bound;
              ({ isConstructor, bound } = this.props);
              return bound
                ? `${Caf.toString(this.getArgsJs())} => {${Caf.toString(
                    this.getBodyJs()
                  )}}`
                : `${Caf.toString(
                    isConstructor ? "constructor" : "function"
                  )}${Caf.toString(this.getArgsJs())} {${Caf.toString(
                    this.getBodyJs()
                  )}}`;
            };
          }
        ))
      );
    }
  );
});
