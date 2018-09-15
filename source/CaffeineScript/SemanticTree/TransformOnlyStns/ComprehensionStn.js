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
      "AccessorStn",
      "StatementsStn",
      "AssignmentStn",
      "BinaryOperatorStn",
      "PureJsStn",
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
      AccessorStn,
      StatementsStn,
      AssignmentStn,
      BinaryOperatorStn,
      PureJsStn,
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
          let clauseAliases;
          this.prototype.validate = function() {
            let valueClauses,
              variableDefinition,
              comprehensionType,
              toClause,
              byClause,
              tilClause,
              fromClause,
              fromArrayClause,
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
              fromArrayClause
            } = this.labeledClauses);
            if (
              (toClause || byClause || tilClause || fromArrayClause) &&
              comprehensionType !== "array"
            ) {
              throw new Error(
                `'from-array', 'to', 'by' and 'til' clauses not supported for '${Caf.toString(
                  comprehensionType
                )}' comprehensions (clauses found: ${Caf.toString(
                  Caf.array(
                    this.labeledClauses,
                    clause => clause.clauseType,
                    clause => clause
                  ).join(", ")
                )})`
              );
            }
            if (!(fromClause || toClause || tilClause || fromArrayClause)) {
              throw new Error(
                `'from', 'from-array', 'to' or 'til' clause require (clauses found: ${Caf.toString(
                  Caf.array(
                    this.labeledClauses,
                    clause => clause.clauseType,
                    clause => clause
                  ).join(", ")
                )})`
              );
            }
            if (toClause && tilClause) {
              throw new Error(
                `only one 'to' or 'til' clause allowed (clauses found: ${Caf.toString(
                  Caf.array(
                    this.labeledClauses,
                    clause => clause.clauseType,
                    clause => clause
                  ).join(", ")
                )})`
              );
            }
            return byClause && !(tilClause || toClause)
              ? (() => {
                  throw new Error(
                    `'to' or 'til' clause required to use 'by' (clauses found: ${Caf.toString(
                      Caf.array(
                        this.labeledClauses,
                        clause => clause.clauseType,
                        clause => clause
                      ).join(", ")
                    )})`
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
              ? this.generateFromArray(labeledClauses)
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
          this.prototype.generateFromArray = function({
            fromArrayClause,
            intoClause,
            withClause,
            whenClause
          }) {
            let variableDefinition,
              fromId,
              intoId,
              iId,
              lengthId,
              valueId,
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
                IdentifierStn({ preferredIdentifier: "v" })
              ];
            }
            [valueId] = variableDefinition;
            invokeWithClauseAndPush = FunctionInvocationStn(
              AccessorStn(intoId, IdentifierStn("push")),
              withClause != null ? withClause : valueId
            );
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
              AssignmentStn(
                intoId,
                intoClause != null ? intoClause : PureJsStn("[]")
              ),
              WhileStn(
                BinaryOperatorStn({ operator: "<" }, iId, lengthId),
                StatementsStn(
                  LetStn(
                    Caf.array(variableDefinition, (v, i) =>
                      AssignmentStn(v, i === 0 ? AccessorStn(fromId, iId) : iId)
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
