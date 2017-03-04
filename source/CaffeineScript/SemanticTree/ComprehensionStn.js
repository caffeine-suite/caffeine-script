let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    SemanticTree,
    ScopeStnMixin = require("./ScopeStnMixin"),
    BaseStn = require("./BaseStn"),
    arrayWithAllButLast,
    peek,
    Error,
    compactFlatten,
    UniqueIdentifierHandle;
  ({
    arrayWithAllButLast,
    peek,
    Error,
    compactFlatten,
    UniqueIdentifierHandle
  } = Caf.i(
    [
      "arrayWithAllButLast",
      "peek",
      "Error",
      "compactFlatten",
      "UniqueIdentifierHandle"
    ],
    [StandardImport, global]
  ));
  SemanticTree = require("./namespace");
  return ComprehensionStn = Caf.defClass(
    class ComprehensionStn extends ScopeStnMixin(BaseStn) {},
    function(ComprehensionStn, classSuper, instanceSuper) {
      this.prototype.transform = function() {
        let outputType,
          variableDefinition,
          body,
          iterable,
          whenClause,
          intoChild,
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
          valueIdentifer,
          keyIdentifer,
          intoIdentifer,
          brkIdentifer,
          useExtendedEach,
          valueVarDef,
          keyVarDef,
          intoVarDef,
          lastBodyStatement,
          bodyStatementsExceptLast,
          bodyWithDefault,
          whenClauseWrapper,
          allButLast,
          foundTest,
          baseIdentifierHandle;
        this.children = this.transformChildren();
        this.initLabeledChildren();
        ({
          outputType,
          variableDefinition,
          body,
          iterable,
          whenClause
        } = this.labeledChildren);
        intoChild = this.labeledChildren.into;
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
        valueIdentifer = "v";
        keyIdentifer = "k";
        intoIdentifer = "into";
        brkIdentifer = "brk";
        useExtendedEach = (() => {
          switch (outputType) {
            case "find":
              return true;
            default:
              return false;
          }
        })();
        variableDefinition = FunctionDefinitionArgsStn(
          valueVarDef = Caf.exists(variableDefinition) &&
            variableDefinition.children[0] ||
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: valueIdentifer })
            ),
          keyVarDef = Caf.exists(variableDefinition) &&
            variableDefinition.children[1] ||
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: keyIdentifer })
            ),
          intoVarDef = Caf.exists(variableDefinition) &&
            variableDefinition.children[2] ||
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: intoIdentifer })
            ),
          useExtendedEach &&
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: brkIdentifer })
            )
        );
        if (outputType === "object" || outputType === "array") {
          lastBodyStatement = body
            ? body.className === "StatementsStn"
                ? (bodyStatementsExceptLast = arrayWithAllButLast(
                    body.children
                  ), peek(body.children))
                : body
            : (bodyStatementsExceptLast = null, ValueStn(valueVarDef));
        } else {
          bodyWithDefault = body || ValueStn(valueVarDef);
        }
        whenClauseWrapper = whenClause
          ? (function(actionStn) {
              return ControlOperatorStn(
                { operand: "if" },
                whenClause,
                actionStn
              );
            })
          : (function(actionStn) {
              return actionStn;
            });
        return FunctionInvocationStn(
          IdentifierStn({ identifier: `Caf.${useExtendedEach ? "ee" : "e"}` }),
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
                    throw new Error(`not supported yet: ${outputType}`);
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
                      compactFlatten([
                        bodyStatementsExceptLast,
                        AssignmentStn(
                          AccessorStn(
                            IdentifierStn({ identifier: intoIdentifer }),
                            ValueStn(keyVarDef)
                          ),
                          lastBodyStatement
                        )
                      ])
                    )
                  );
                case "array":
                  return whenClauseWrapper(
                    StatementsStn(
                      compactFlatten([
                        bodyStatementsExceptLast,
                        FunctionInvocationStn(
                          AccessorStn(
                            IdentifierStn({ identifier: intoIdentifer }),
                            IdentifierStn({ identifier: "push" })
                          ),
                          lastBodyStatement
                        )
                      ])
                    )
                  );
                case "each":
                  return whenClauseWrapper(bodyWithDefault);
                case "find":
                  return whenClause
                    ? body
                        ? BinaryOperatorStn(
                            { operator: "&&" },
                            whenClause,
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              body
                            )
                          )
                        : BinaryOperatorStn(
                            { operator: "&&" },
                            whenClause,
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              valueVarDef
                            )
                          )
                    : body
                        ? (body.type === "Statements" &&
                            body.children.length > 1
                            ? (allButLast = StatementsStn(
                                body.children.slice(0, body.children.length - 1)
                              ), body = peek(body.children))
                            : undefined, foundTest = BinaryOperatorStn(
                            { operator: "&&" },
                            AssignmentStn(
                              IdentifierStn({
                                identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle(
                                  "_ret"
                                )
                              }),
                              body
                            ),
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              IdentifierStn({
                                identifierHandle: baseIdentifierHandle
                              })
                            )
                          ), allButLast
                            ? StatementsStn(allButLast, foundTest)
                            : foundTest)
                        : BinaryOperatorStn(
                            { operator: "&&" },
                            valueVarDef,
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              valueVarDef
                            )
                          );
              }
            })()
          )
        );
      };
    }
  );
});
