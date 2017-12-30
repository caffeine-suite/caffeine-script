"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SemanticTree,
    UniqueIdentifierHandle,
    ComprehensionStn,
    Error,
    arrayWithAllButLast,
    peek;
  ({ Error, arrayWithAllButLast, peek } = Caf.import(
    ["Error", "arrayWithAllButLast", "peek"],
    [global, require("../../StandardImport")]
  ));
  SemanticTree = require("../../StnRegistry");
  UniqueIdentifierHandle = require("../UniqueIdentifierHandle");
  return (ComprehensionStn = Caf.defClass(
    class ComprehensionStn extends require("../ScopeStnMixin")(
      require("../BaseStn")
    ) {},
    function(ComprehensionStn, classSuper, instanceSuper) {
      this.prototype.validate = function() {
        let valueClauseChildren;
        valueClauseChildren = {};
        return Caf.each(
          this.labeledChildren.valueClauses,
          undefined,
          (valueClause, k, into) => {
            let type;
            ({ type } = valueClause);
            if (valueClauseChildren[type]) {
              throw new Error(
                `no more than one '${Caf.toString(type)}' clause allowed`
              );
            }
            valueClauseChildren[type] = true;
          }
        );
      };
      this.prototype.postTransform = function() {
        let outputType,
          variableDefinition,
          body,
          iterable,
          intoChild,
          whenClause,
          iterationFunction,
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
          ValueStn,
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
          (valueClause, k, into) => {
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
        iterationFunction = outputType.slice(0, 1);
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
          StatementsStn,
          ValueStn
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
                identifierHandle: new UniqueIdentifierHandle("into", false)
              }))
            ),
          useExtendedEach &&
            FunctionDefinitionArgStn(
              (brkIdentifer = IdentifierStn({
                identifierHandle: new UniqueIdentifierHandle("brk", false)
              }))
            )
        );
        if (outputType === "object" || outputType === "array") {
          lastBodyStatement = body
            ? body.className === "StatementsStn"
              ? ((bodyStatementsExceptLast = arrayWithAllButLast(
                  body.children
                )),
                peek(body.children))
              : body
            : ((bodyStatementsExceptLast = null), ValueStn(valueVarDef));
        } else {
          bodyWithDefault = body || ValueStn(valueVarDef);
        }
        whenClauseWrapper = whenClause
          ? actionStn => {
              return ControlOperatorStn(
                { operand: "if" },
                whenClause,
                actionStn
              );
            }
          : actionStn => {
              return actionStn;
            };
        return FunctionInvocationStn(
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
                        AccessorStn(intoIdentifer, ValueStn(keyVarDef)),
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
                      ? BinaryOperatorStn(
                          { operator: "&&" },
                          whenClause,
                          StatementsStn(
                            FunctionInvocationStn(brkIdentifer),
                            body
                          )
                        )
                      : BinaryOperatorStn(
                          { operator: "&&" },
                          whenClause,
                          StatementsStn(
                            FunctionInvocationStn(brkIdentifer),
                            valueVarDef
                          )
                        )
                    : body
                      ? (body.type === "Statements" && body.children.length > 1
                          ? ((allButLast = StatementsStn(
                              body.children.slice(0, body.children.length - 1)
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
                        allButLast
                          ? StatementsStn(allButLast, foundTest)
                          : foundTest)
                      : BinaryOperatorStn(
                          { operator: "&&" },
                          valueVarDef,
                          StatementsStn(
                            FunctionInvocationStn(brkIdentifer),
                            valueVarDef
                          )
                        );
              }
            })()
          )
        );
      };
    }
  ));
});
