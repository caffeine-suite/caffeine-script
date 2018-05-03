"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "arrayWithAllButLast", "peek", "StnRegistry"],
    [global, require("../../StandardImport")],
    (Error, arrayWithAllButLast, peek, StnRegistry) => {
      let SemanticTree, UniqueIdentifierHandle, ComprehensionStn;
      return (
        (SemanticTree = require("../../StnRegistry")),
        (UniqueIdentifierHandle = require("../UniqueIdentifierHandle")),
        (ComprehensionStn = Caf.defClass(
          class ComprehensionStn extends require("../ScopeStnMixin")(
            require("../BaseStn")
          ) {},
          function(ComprehensionStn, classSuper, instanceSuper) {
            this.prototype.validate = function() {
              let valueClauseChildren,
                valueClauses,
                variableDefinition,
                cafBase;
              valueClauseChildren = {};
              ({ valueClauses, variableDefinition } = this.labeledChildren);
              if (
                (Caf.exists(variableDefinition) &&
                  variableDefinition.children.length) > 2
              ) {
                throw new Error(
                  `Can define at most two loop variables (value followed optionally by key). You defined: ${Caf.toString(
                    Caf.exists((cafBase = variableDefinition.parseTreeNode)) &&
                      cafBase.toString()
                  )}.`
                );
              }
              return Caf.each(valueClauses, undefined, valueClause => {
                let type;
                ({ type } = valueClause);
                if (valueClauseChildren[type]) {
                  throw new Error(
                    `no more than one '${Caf.toString(type)}' clause allowed`
                  );
                }
                valueClauseChildren[type] = true;
              });
            };
            this.prototype.postTransform = function() {
              let outputType,
                variableDefinition,
                body,
                iterable,
                intoChild,
                whenClause,
                AccessorStn,
                ArrayStn,
                AssignmentStn,
                BinaryOperatorStn,
                ControlOperatorStn,
                FunctionDefinitionArgsStn,
                FunctionDefinitionArgStn,
                FunctionDefinitionStn,
                FunctionInvocationStn,
                IdentifierStn,
                ObjectStn,
                SimpleLiteralStn,
                StatementsStn,
                useExtendedEach,
                basicEach,
                valueVarDef,
                keyVarDef,
                intoIdentifer,
                brkIdentifer,
                lastBodyStatement,
                bodyStatementsExceptLast,
                bodyWithDefault,
                whenClauseWrapper,
                allButLast,
                foundTest,
                baseIdentifierHandle;
              this.initLabeledChildren();
              ({
                outputType,
                variableDefinition,
                body,
                iterable
              } = this.labeledChildren);
              intoChild = whenClause = null;
              Caf.each(
                this.labeledChildren.valueClauses,
                undefined,
                valueClause => {
                  let type, value;
                  ({ type, value } = valueClause);
                  switch (type) {
                    case "into":
                    case "returning":
                      intoChild = value;
                      break;
                    case "when":
                      whenClause = value;
                  }
                }
              );
              outputType = Caf.exists(outputType) && outputType.props.token;
              ({
                AccessorStn,
                ArrayStn,
                AssignmentStn,
                BinaryOperatorStn,
                ControlOperatorStn,
                FunctionDefinitionArgsStn,
                FunctionDefinitionArgStn,
                FunctionDefinitionStn,
                FunctionInvocationStn,
                IdentifierStn,
                ObjectStn,
                SimpleLiteralStn,
                StatementsStn
              } = SemanticTree);
              useExtendedEach = (() => {
                switch (outputType) {
                  case "find":
                    return true;
                  default:
                    return false;
                }
              })();
              basicEach = outputType === "each";
              variableDefinition = FunctionDefinitionArgsStn(
                (valueVarDef =
                  (Caf.exists(variableDefinition) &&
                    variableDefinition.children[0]) ||
                  (!basicEach &&
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifierHandle: new UniqueIdentifierHandle("v", false)
                      })
                    ))),
                (keyVarDef =
                  (Caf.exists(variableDefinition) &&
                    variableDefinition.children[1]) ||
                  (!basicEach &&
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifierHandle: new UniqueIdentifierHandle("k", false)
                      })
                    ))),
                (useExtendedEach || !basicEach) &&
                  FunctionDefinitionArgStn(
                    (intoIdentifer = IdentifierStn({
                      identifierHandle: new UniqueIdentifierHandle(
                        "into",
                        false
                      )
                    }))
                  ),
                useExtendedEach &&
                  FunctionDefinitionArgStn(
                    (brkIdentifer = IdentifierStn({
                      identifierHandle: new UniqueIdentifierHandle("brk", false)
                    }))
                  )
              );
              return false
                ? this.generateEach({
                    variableDefinition,
                    valueVarDef,
                    keyVarDef,
                    whenClause,
                    intoChild
                  })
                : (outputType === "object" || outputType === "array"
                    ? (lastBodyStatement = body
                        ? body.className === "StatementsStn"
                          ? ((bodyStatementsExceptLast = arrayWithAllButLast(
                              body.children
                            )),
                            peek(body.children))
                          : body
                        : ((bodyStatementsExceptLast = null), valueVarDef))
                    : (bodyWithDefault = body || valueVarDef),
                  (whenClauseWrapper = whenClause
                    ? actionStn =>
                        StatementsStn(
                          ControlOperatorStn(
                            { operand: "if" },
                            whenClause,
                            actionStn
                          )
                        )
                    : actionStn => actionStn),
                  FunctionInvocationStn(
                    IdentifierStn({
                      identifier: `Caf.${Caf.toString(
                        useExtendedEach ? "extendedEach" : "each"
                      )}`
                    }),
                    iterable,
                    intoChild ||
                      (() => {
                        switch (outputType) {
                          case "object":
                            return ObjectStn();
                          case "array":
                            return ArrayStn();
                          case "each":
                            return SimpleLiteralStn({ value: "undefined" });
                          case "find":
                            return SimpleLiteralStn({ value: "undefined" });
                          case "reduce":
                            return null;
                          default:
                            return (() => {
                              throw new Error(
                                `not supported yet: ${Caf.toString(outputType)}`
                              );
                            })();
                        }
                      })(),
                    FunctionDefinitionStn(
                      { bound: true, returnIgnored: outputType !== "find" },
                      variableDefinition,
                      (() => {
                        switch (outputType) {
                          case "object":
                            return whenClauseWrapper(
                              StatementsStn(
                                bodyStatementsExceptLast,
                                AssignmentStn(
                                  AccessorStn(intoIdentifer, keyVarDef),
                                  lastBodyStatement
                                )
                              )
                            );
                          case "array":
                            return whenClauseWrapper(
                              StatementsStn(
                                bodyStatementsExceptLast,
                                FunctionInvocationStn(
                                  AccessorStn(
                                    intoIdentifer,
                                    IdentifierStn({ identifier: "push" })
                                  ),
                                  lastBodyStatement
                                )
                              )
                            );
                          case "each":
                            return whenClauseWrapper(body);
                          case "find":
                            return whenClause
                              ? body
                                ? StatementsStn(
                                    BinaryOperatorStn(
                                      { operator: "&&" },
                                      whenClause,
                                      StatementsStn(
                                        FunctionInvocationStn(brkIdentifer),
                                        body
                                      )
                                    )
                                  )
                                : StatementsStn(
                                    BinaryOperatorStn(
                                      { operator: "&&" },
                                      whenClause,
                                      StatementsStn(
                                        FunctionInvocationStn(brkIdentifer),
                                        valueVarDef
                                      )
                                    )
                                  )
                              : body
                                ? (body.type === "Statements" &&
                                  body.children.length > 1
                                    ? ((allButLast = body.children.slice(
                                        0,
                                        body.children.length - 1
                                      )),
                                      (body = peek(body.children)))
                                    : undefined,
                                  (foundTest =
                                    body.type === "Reference"
                                      ? BinaryOperatorStn(
                                          { operator: "&&" },
                                          body,
                                          StatementsStn(
                                            FunctionInvocationStn(brkIdentifer),
                                            body
                                          )
                                        )
                                      : BinaryOperatorStn(
                                          { operator: "&&" },
                                          AssignmentStn(
                                            IdentifierStn({
                                              identifierHandle: (baseIdentifierHandle = new UniqueIdentifierHandle(
                                                "_ret"
                                              ))
                                            }),
                                            body
                                          ),
                                          StatementsStn(
                                            FunctionInvocationStn(brkIdentifer),
                                            IdentifierStn({
                                              identifierHandle: baseIdentifierHandle
                                            })
                                          )
                                        )),
                                  StatementsStn(allButLast, foundTest))
                                : StatementsStn(
                                    BinaryOperatorStn(
                                      { operator: "&&" },
                                      valueVarDef,
                                      StatementsStn(
                                        FunctionInvocationStn(brkIdentifer),
                                        valueVarDef
                                      )
                                    )
                                  );
                        }
                      })()
                    )
                  ));
            };
            this.prototype.generateEach = function({
              variableDefinition,
              valueVarDef,
              keyVarDef,
              whenClause,
              intoChild
            }) {
              let FunctionInvocationStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn,
                withClause,
                iterable;
              ({
                FunctionInvocationStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn
              } = StnRegistry);
              ({ body: withClause, iterable } = this.labeledChildren);
              return FunctionInvocationStn(
                IdentifierStn({ identifier: "Caf.each2" }),
                iterable,
                intoChild != null
                  ? intoChild
                  : withClause || whenClause
                    ? SimpleLiteralStn({ value: "null" })
                    : undefined,
                withClause &&
                  FunctionDefinitionStn(
                    { bound: true },
                    variableDefinition,
                    withClause
                  ),
                whenClause &&
                  FunctionDefinitionStn(
                    { bound: true },
                    variableDefinition,
                    whenClause
                  )
              );
            };
          }
        ))
      );
    }
  );
});
