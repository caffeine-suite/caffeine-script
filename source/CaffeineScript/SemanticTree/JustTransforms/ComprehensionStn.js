"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "lowerCamelCase", "StnRegistry", "Object", "String"],
    [global, require("../../StandardImport")],
    (Error, lowerCamelCase, StnRegistry, Object, String) => {
      let SemanticTree, UniqueIdentifierHandle, ComprehensionStn;
      return (
        (SemanticTree = require("../../StnRegistry")),
        (UniqueIdentifierHandle = require("../UniqueIdentifierHandle")),
        (ComprehensionStn = Caf.defClass(
          class ComprehensionStn extends require("../ScopeStnMixin")(
            require("../BaseStn")
          ) {},
          function(ComprehensionStn, classSuper, instanceSuper) {
            let clauseAliases;
            this.prototype.validate = function() {
              let valueClauses,
                variableDefinition,
                comprehensionType,
                toClause,
                byClause,
                tilClause,
                fromClause,
                cafBase;
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
              ({ comprehensionType } = this);
              ({
                toClause,
                byClause,
                tilClause,
                fromClause
              } = this.labeledClauses);
              if (
                (toClause || byClause || tilClause) &&
                comprehensionType !== "array"
              ) {
                throw new Error(
                  `'to', 'by' and 'til' clauses not supported for '${Caf.toString(
                    comprehensionType
                  )}' comprehensions`
                );
              }
              if (!(fromClause || toClause || tilClause)) {
                throw new Error("'from', 'to' or 'til' clause require");
              }
              if (toClause && tilClause) {
                throw new Error("only one 'to' or 'til' clause allowed");
              }
              return byClause && !(tilClause || toClause)
                ? (() => {
                    throw new Error(
                      "'to' or 'til' clause required to use 'by'"
                    );
                  })()
                : undefined;
            };
            clauseAliases = { returning: "into", in: "from", do: "with" };
            this.getter({
              comprehensionType: function() {
                return this.labeledChildren.outputType.props.token;
              },
              labeledClauses: function() {
                let iterable, body, labeledClauses, cafTemp, cafTemp1;
                ({ iterable, body } = this.labeledChildren);
                labeledClauses = {};
                Caf.each2(
                  this.labeledChildren.valueClauses,
                  ({ type, value }) => {
                    let name, cafTemp;
                    type =
                      (cafTemp = clauseAliases[type]) != null ? cafTemp : type;
                    name = lowerCamelCase(type + "Clause");
                    if (labeledClauses[name]) {
                      throw new Error(
                        `no more than one '${Caf.toString(
                          type
                        )}' clause allowed`
                      );
                    }
                    return (labeledClauses[name] = value);
                  }
                );
                (cafTemp = labeledClauses.fromClause) != null
                  ? cafTemp
                  : (labeledClauses.fromClause = iterable);
                (cafTemp1 = labeledClauses.withClause) != null
                  ? cafTemp1
                  : (labeledClauses.withClause = body);
                return labeledClauses;
              }
            });
            this.prototype.postTransform = function() {
              let outputType, labeledClauses;
              this.initLabeledChildren();
              ({ outputType } = this.labeledChildren);
              ({ labeledClauses } = this);
              return labeledClauses.toClause || labeledClauses.tilClause
                ? this.generateArrayRange(labeledClauses)
                : (() => {
                    switch ((outputType = this.comprehensionType)) {
                      case "each":
                      case "array":
                      case "object":
                        return this.generateArrayOrEach(
                          outputType === "each" ? "each2" : outputType,
                          labeledClauses
                        );
                      case "find":
                        return this.generateFind(labeledClauses);
                    }
                  })();
            };
            this.prototype.resolveStnParams = function(...params) {
              let SimpleLiteralStn,
                FunctionDefinitionStn,
                variableDefinition,
                lastNonNulIndex,
                Null;
              ({ SimpleLiteralStn, FunctionDefinitionStn } = StnRegistry);
              ({ variableDefinition } = this.labeledChildren);
              lastNonNulIndex = 0;
              params = Caf.array(params, (p, i) => {
                let f;
                p = (() => {
                  switch (false) {
                    case !Caf.is(p, Object):
                      ({ f } = p);
                      return f
                        ? FunctionDefinitionStn(
                            { bound: true },
                            variableDefinition,
                            f
                          )
                        : undefined;
                    case !Caf.is(p, String):
                      return SimpleLiteralStn({ value: p });
                    default:
                      return p;
                  }
                })();
                if (p != null) {
                  lastNonNulIndex = i;
                }
                return p;
              });
              Null = null;
              params = params.slice(0, lastNonNulIndex + 1);
              return Caf.array(
                params,
                p =>
                  p != null
                    ? p
                    : Null != null
                      ? Null
                      : (Null = SimpleLiteralStn({ value: "null" }))
              );
            };
            this.prototype.generateArrayRange = function({
              withClause,
              whenClause,
              toClause,
              tilClause,
              byClause,
              fromClause,
              intoClause
            }) {
              let FunctionInvocationStn,
                IdentifierStn,
                FunctionDefinitionStn,
                SimpleLiteralStn;
              ({
                FunctionInvocationStn,
                IdentifierStn,
                FunctionDefinitionStn,
                SimpleLiteralStn
              } = StnRegistry);
              if (tilClause) {
                toClause = tilClause;
                tilClause = "true";
              }
              return FunctionInvocationStn(
                IdentifierStn({ identifier: "Caf.arrayRange" }),
                this.resolveStnParams(
                  fromClause != null ? fromClause : "0",
                  toClause,
                  { f: withClause },
                  { f: whenClause },
                  byClause,
                  tilClause,
                  intoClause
                )
              );
            };
            this.prototype.generateFind = function({
              fromClause,
              withClause,
              whenClause
            }) {
              let iterable,
                variableDefinition,
                FunctionInvocationStn,
                IdentifierStn,
                FunctionDefinitionStn,
                SimpleLiteralStn;
              ({ iterable, variableDefinition } = this.labeledChildren);
              ({
                FunctionInvocationStn,
                IdentifierStn,
                FunctionDefinitionStn,
                SimpleLiteralStn
              } = StnRegistry);
              return FunctionInvocationStn(
                IdentifierStn({ identifier: "Caf.find" }),
                fromClause,
                withClause
                  ? FunctionDefinitionStn(
                      { bound: true },
                      variableDefinition,
                      withClause
                    )
                  : whenClause
                    ? SimpleLiteralStn({ value: "null" })
                    : undefined,
                whenClause
                  ? FunctionDefinitionStn(
                      { bound: true },
                      variableDefinition,
                      whenClause
                    )
                  : undefined
              );
            };
            this.prototype.generateArrayOrEach = function(
              method,
              { fromClause, intoClause, withClause, whenClause, withKeyClause }
            ) {
              let FunctionInvocationStn,
                StatementsStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn,
                variableDefinition,
                Null,
                cafBase;
              ({
                FunctionInvocationStn,
                StatementsStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn
              } = StnRegistry);
              ({ variableDefinition } = this.labeledChildren);
              if (
                (Caf.exists(variableDefinition) &&
                  (Caf.exists((cafBase = variableDefinition.children)) &&
                    cafBase.length)) > 0 &&
                !variableDefinition.children[0].isSimpleIdentifier
              ) {
                withClause != null
                  ? withClause
                  : (withClause = StatementsStn(
                      variableDefinition.children[0]
                    ));
              }
              Null = SimpleLiteralStn({ value: "null" });
              return FunctionInvocationStn(
                IdentifierStn({ identifier: `Caf.${Caf.toString(method)}` }),
                fromClause,
                withClause
                  ? FunctionDefinitionStn(
                      { bound: true },
                      variableDefinition,
                      withClause
                    )
                  : whenClause || withKeyClause || intoClause
                    ? Null
                    : undefined,
                whenClause
                  ? FunctionDefinitionStn(
                      { bound: true },
                      variableDefinition,
                      whenClause
                    )
                  : withKeyClause || intoClause
                    ? Null
                    : undefined,
                intoClause != null
                  ? intoClause
                  : withKeyClause
                    ? Null
                    : undefined,
                withKeyClause
                  ? FunctionDefinitionStn(
                      { bound: true },
                      variableDefinition,
                      withKeyClause
                    )
                  : undefined
              );
            };
          }
        ))
      );
    }
  );
});
