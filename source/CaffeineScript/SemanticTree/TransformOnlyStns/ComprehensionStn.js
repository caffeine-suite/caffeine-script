"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Error",
      "lowerCamelCase",
      "Object",
      "FunctionDefinitionStn",
      "String",
      "SimpleLiteralStn",
      "FunctionInvocationStn",
      "IdentifierStn",
      "AssignmentStn",
      "PureJsStn",
      "AccessorStn",
      "StatementsStn",
      "BinaryOperatorStn",
      "WhileStn",
      "LetStn",
      "IfStn",
      "UnaryOperatorStn"
    ],
    [global, require("./StandardImport")],
    (
      Error,
      lowerCamelCase,
      Object,
      FunctionDefinitionStn,
      String,
      SimpleLiteralStn,
      FunctionInvocationStn,
      IdentifierStn,
      AssignmentStn,
      PureJsStn,
      AccessorStn,
      StatementsStn,
      BinaryOperatorStn,
      WhileStn,
      LetStn,
      IfStn,
      UnaryOperatorStn
    ) => {
      let ComprehensionStn;
      return (ComprehensionStn = Caf.defClass(
        class ComprehensionStn extends require("../ScopeStnMixin")(
          require("../BaseStn")
        ) {},
        function(ComprehensionStn, classSuper, instanceSuper) {
          let getComprehensionsFound, clauseAliases;
          getComprehensionsFound = function(labeledClauses) {
            return `(clauses found: ${Caf.toString(
              Caf.array(
                labeledClauses,
                clause => clause.clauseType,
                clause => clause
              ).join(", ")
            )})`;
          };
          this.prototype.validate = function() {
            let valueClauses,
              variableDefinition,
              comprehensionType,
              toClause,
              byClause,
              tilClause,
              fromClause,
              fromArrayClause,
              withKeyClause,
              base;
            ({ valueClauses, variableDefinition } = this.labeledChildren);
            if (
              (Caf.exists(variableDefinition) &&
                variableDefinition.children.length) > 2
            ) {
              throw new Error(
                `Can define at most two loop variables (value followed optionally by key). You defined: ${Caf.toString(
                  Caf.exists((base = variableDefinition.parseTreeNode)) &&
                    base.toString()
                )}.`
              );
            }
            ({ comprehensionType } = this);
            ({
              toClause,
              byClause,
              tilClause,
              fromClause,
              fromArrayClause,
              withKeyClause
            } = this.labeledClauses);
            if (fromArrayClause) {
              switch (comprehensionType) {
                case "array":
                case "object":
                case "each":
                  null;
                  break;
                default:
                  throw new Error(
                    `Invalid Comprehension: The 'from-array' clause is only compatible with 'array' or 'object' comprehensions ${Caf.toString(
                      getComprehensionsFound(this.labeledClauses)
                    )}`
                  );
              }
            }
            if (withKeyClause && comprehensionType !== "object") {
              throw new Error(
                `Invalid Comprehension: The 'with-key' clause is only compatbile with 'object' comprehensions ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            if (
              (toClause || byClause || tilClause) &&
              comprehensionType !== "array"
            ) {
              throw new Error(
                `Invalid Comprehension: 'from-array', 'to', 'by' and 'til' clauses not supported for '${Caf.toString(
                  comprehensionType
                )}' comprehensions ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            if (!(fromClause || toClause || tilClause || fromArrayClause)) {
              throw new Error(
                `Invalid Comprehension: 'from', 'from-array', 'to' or 'til' clause require  ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            if (toClause && tilClause) {
              throw new Error(
                `Invalid Comprehension: only one 'to' or 'til' clause allowed  ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            return byClause && !(tilClause || toClause)
              ? (() => {
                  throw new Error(
                    `Invalid Comprehension: 'to' or 'til' clauses required when using a 'by' clause.  ${Caf.toString(
                      getComprehensionsFound(this.labeledClauses)
                    )}`
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
              let iterable, body, labeledClauses, temp, temp1;
              ({ iterable, body } = this.labeledChildren);
              labeledClauses = {};
              Caf.each2(
                this.labeledChildren.valueClauses,
                ({ type, value }) => {
                  let name, temp;
                  type = (temp = clauseAliases[type]) != null ? temp : type;
                  name = lowerCamelCase(type + "Clause");
                  if (labeledClauses[name]) {
                    throw new Error(
                      `no more than one '${Caf.toString(type)}' clause allowed`
                    );
                  }
                  value.clauseType = type;
                  return (labeledClauses[name] = value);
                }
              );
              (temp = labeledClauses.fromClause) != null
                ? temp
                : (labeledClauses.fromClause = iterable);
              (temp1 = labeledClauses.withClause) != null
                ? temp1
                : (labeledClauses.withClause = body);
              return labeledClauses;
            }
          });
          this.prototype.postTransform = function() {
            let labeledClauses, comprehensionType;
            this.initLabeledChildren();
            ({ labeledClauses, comprehensionType } = this);
            return labeledClauses.fromArrayClause
              ? this.generateFromArray(comprehensionType, labeledClauses)
              : labeledClauses.toClause || labeledClauses.tilClause
                ? this.generateArrayRange(labeledClauses)
                : (() => {
                    switch (comprehensionType) {
                      case "each":
                      case "array":
                      case "object":
                        return this.generateArrayOrEach(
                          comprehensionType === "each"
                            ? "each2"
                            : comprehensionType,
                          labeledClauses
                        );
                      case "find":
                        return this.generateFind(labeledClauses);
                    }
                  })();
          };
          this.prototype.resolveStnParams = function(...params) {
            let variableDefinition, lastNonNulIndex, Null;
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
          this.prototype.generateFromArray = function(
            comprehensionType,
            {
              fromArrayClause,
              intoClause,
              withClause,
              whenClause,
              withKeyClause
            }
          ) {
            let variableDefinition,
              fromId,
              intoId,
              iId,
              lengthId,
              valueId,
              valueStn,
              invokeWithClauseAndPush;
            ({ variableDefinition } = this.labeledChildren);
            variableDefinition =
              Caf.exists(variableDefinition) && variableDefinition.children;
            fromId = IdentifierStn({ preferredIdentifier: "from" });
            intoId = IdentifierStn({ preferredIdentifier: "into" });
            iId = IdentifierStn({ preferredIdentifier: "i" });
            lengthId = IdentifierStn({ preferredIdentifier: "length" });
            if (!variableDefinition) {
              variableDefinition = [
                IdentifierStn({ preferredIdentifier: "v", addToLets: false })
              ];
            }
            [valueId] = variableDefinition;
            withClause != null
              ? withClause
              : (withClause =
                  valueStn != null
                    ? valueStn
                    : (valueStn = valueId.getValueStn()));
            intoClause = AssignmentStn(
              intoId,
              intoClause != null
                ? intoClause
                : (() => {
                    switch (comprehensionType) {
                      case "object":
                        return PureJsStn("{}");
                      case "each":
                        return fromId;
                      default:
                        return PureJsStn("[]");
                    }
                  })()
            );
            invokeWithClauseAndPush =
              comprehensionType === "each"
                ? withClause
                : (() => {
                    switch (comprehensionType) {
                      case "array":
                        return FunctionInvocationStn(
                          AccessorStn(intoId, IdentifierStn("push")),
                          withClause
                        );
                      case "object":
                        return AssignmentStn(
                          AccessorStn(
                            intoId,
                            withKeyClause != null
                              ? withKeyClause
                              : valueStn != null
                                ? valueStn
                                : (valueStn = valueId.getValueStn())
                          ),
                          withClause
                        );
                      default:
                        return (() => {
                          throw new Error(
                            `comprehensionType: ${Caf.toString(
                              comprehensionType
                            )} not supported (yet?) with from-array clauses`
                          );
                        })();
                    }
                  })();
            return StatementsStn(
              AssignmentStn(
                fromId,
                BinaryOperatorStn(
                  { operator: "||" },
                  fromArrayClause,
                  PureJsStn("[]")
                )
              ),
              AssignmentStn(
                lengthId,
                AccessorStn(fromId, IdentifierStn("length"))
              ),
              AssignmentStn(iId, PureJsStn("0")),
              intoClause,
              WhileStn(
                BinaryOperatorStn({ operator: "<" }, iId, lengthId),
                StatementsStn(
                  LetStn(
                    Caf.array(variableDefinition, (v, i) =>
                      AssignmentStn(
                        v,
                        i === 0 ? AccessorStn(fromId, iId.getValueStn()) : iId
                      )
                    )
                  ),
                  whenClause
                    ? IfStn(whenClause, invokeWithClauseAndPush)
                    : invokeWithClauseAndPush,
                  UnaryOperatorStn({ operand: "++", tail: true }, iId)
                )
              ),
              intoId
            );
          };
          this.prototype.generateFind = function({
            fromClause,
            withClause,
            whenClause
          }) {
            let iterable, variableDefinition;
            ({ iterable, variableDefinition } = this.labeledChildren);
            return FunctionInvocationStn(
              IdentifierStn({ identifier: "Caf.find" }),
              this.resolveStnParams(
                fromClause,
                { f: withClause },
                { f: whenClause }
              )
            );
          };
          this.prototype.generateArrayOrEach = function(
            method,
            { fromClause, intoClause, withClause, whenClause, withKeyClause }
          ) {
            let variableDefinition, base;
            ({ variableDefinition } = this.labeledChildren);
            if (
              (Caf.exists(variableDefinition) &&
                (Caf.exists((base = variableDefinition.children)) &&
                  base.length)) > 0 &&
              !variableDefinition.children[0].isSimpleIdentifier
            ) {
              withClause != null
                ? withClause
                : (withClause = StatementsStn(variableDefinition.children[0]));
            }
            return FunctionInvocationStn(
              IdentifierStn({ identifier: `Caf.${Caf.toString(method)}` }),
              this.resolveStnParams(
                fromClause,
                { f: withClause },
                { f: whenClause },
                intoClause,
                { f: withKeyClause }
              )
            );
          };
        }
      ));
    }
  );
});
