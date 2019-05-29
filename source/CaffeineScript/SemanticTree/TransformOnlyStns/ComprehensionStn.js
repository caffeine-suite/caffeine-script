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
      "DestructuringAssignmentStn",
      "AssignmentStn",
      "NumberLiteralStn",
      "IdentifierStn",
      "PureJsStn",
      "FunctionInvocationStn",
      "AccessorStn",
      "StatementsStn",
      "IfStn",
      "BinaryOperatorStn",
      "ForStn",
      "WhileStn",
      "ForInControlStn",
      "floatEq",
      "Math",
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
      DestructuringAssignmentStn,
      AssignmentStn,
      NumberLiteralStn,
      IdentifierStn,
      PureJsStn,
      FunctionInvocationStn,
      AccessorStn,
      StatementsStn,
      IfStn,
      BinaryOperatorStn,
      ForStn,
      WhileStn,
      ForInControlStn,
      floatEq,
      Math,
      UnaryOperatorStn
    ) => {
      let ComprehensionStn;
      return (ComprehensionStn = Caf.defClass(
        class ComprehensionStn extends require("../ScopeStnMixin")(
          require("../BaseStn")
        ) {},
        function(ComprehensionStn, classSuper, instanceSuper) {
          let getComprehensionsFound,
            supportedClauseLabels,
            clauseAliases,
            autoDestructuringAssignment;
          getComprehensionsFound = function(labeledClauses) {
            return `(clauses found: ${Caf.toString(
              Caf.array(
                labeledClauses,
                clause => clause.clauseType,
                clause => clause
              ).join(", ")
            )})`;
          };
          supportedClauseLabels = Caf.object(
            [
              "byClause",
              "fromClause",
              "fromArrayClause",
              "fromObjectClause",
              "intoClause",
              "shortClause",
              "skipClause",
              "tilClause",
              "toClause",
              "withClause",
              "withKeyClause",
              "whenClause",
              "injectClause"
            ],
            () => true
          );
          this.prototype.validate = function() {
            let valueClauses,
              variableDefinition,
              comprehensionType,
              maxVarDefs,
              isReduce,
              toClause,
              byClause,
              tilClause,
              fromClause,
              fromArrayClause,
              fromObjectClause,
              withKeyClause,
              skipClause,
              shortClause,
              sourceCounts,
              base,
              temp;
            ({ valueClauses, variableDefinition } = this.labeledChildren);
            ({ comprehensionType } = this);
            if (
              (Caf.exists(variableDefinition) &&
                variableDefinition.children.length) >
              (maxVarDefs = (isReduce = comprehensionType === "reduce") ? 3 : 2)
            ) {
              throw new Error(
                `Can define at most ${Caf.toString(
                  maxVarDefs
                )} variables for ${Caf.toString(
                  comprehensionType
                )} comprehensions. Allowed variables: ${Caf.toString(
                  isReduce ? "accumulator, " : undefined
                )}"value and key", in that order. You defined: ${Caf.toString(
                  Caf.exists((base = variableDefinition.parseTreeNode)) &&
                    base.toString()
                )}."`
              );
            }
            Caf.find(
              this.labeledClauses,
              (__, clauseName) =>
                (() => {
                  throw new Error(
                    `Invalid Comprehension clause: ${Caf.toString(clauseName)}`
                  );
                })(),
              (__, clauseName) => !supportedClauseLabels[clauseName]
            );
            temp = this.labeledClauses;
            toClause = temp.toClause;
            byClause = temp.byClause;
            tilClause = temp.tilClause;
            fromClause = temp.fromClause;
            fromArrayClause = temp.fromArrayClause;
            fromObjectClause = temp.fromObjectClause;
            withKeyClause = temp.withKeyClause;
            skipClause = temp.skipClause;
            shortClause = temp.shortClause;
            if (fromArrayClause) {
              switch (comprehensionType) {
                case "array":
                case "object":
                case "each":
                case "find":
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
            if ((toClause || tilClause) && (skipClause || shortClause)) {
              throw new Error(
                "Invalid Comprehension: 'skip' and 'short' clauses are not supported for 'to' and 'til' comprehensions (yet)'"
              );
            }
            if (withKeyClause && comprehensionType !== "object") {
              throw new Error(
                `Invalid Comprehension: The 'with-key' clause is only compatbile with 'object' comprehensions ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            sourceCounts = 0;
            if (fromClause || toClause || tilClause) {
              sourceCounts++;
            }
            if (fromArrayClause) {
              sourceCounts++;
            }
            if (fromObjectClause) {
              sourceCounts++;
            }
            if (!(sourceCounts === 1)) {
              throw new Error(
                `Invalid Comprehension: Exactly one 'from/to/til', 'to/from-array' or 'to/from-object' clause expected ${Caf.toString(
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
            if (
              !(toClause || tilClause) &&
              byClause &&
              !(byClause.compileTimeValue != null)
            ) {
              throw new Error(
                'Comprehension not supported: Non-constant by-clauses with array-iteration are not supported yet. Try making it a range iteration: array i in 0 til myArray.length by myByClause with v = myArray[i]"'
              );
            }
            return (byClause || skipClause || shortClause) &&
              !(tilClause || toClause || fromClause || fromArrayClause)
              ? (() => {
                  throw new Error(
                    `Invalid Comprehension: 'to', 'til', 'from' or 'from-array' clauses required when using 'by', 'skip' or 'short' clauses.  ${Caf.toString(
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
              let iterable, body, labeledClauses, temp1, temp2;
              if (!this._labeledClauses) {
                ({ iterable, body } = this.labeledChildren);
                this._labeledClauses = labeledClauses = {};
                Caf.each2(
                  this.labeledChildren.valueClauses,
                  ({ type, value }) => {
                    let name, temp;
                    type = (temp = clauseAliases[type]) != null ? temp : type;
                    name = lowerCamelCase(type + "Clause");
                    if (labeledClauses[name]) {
                      throw new Error(
                        `no more than one '${Caf.toString(
                          type
                        )}' clause allowed`
                      );
                    }
                    value.clauseType = type;
                    return (labeledClauses[name] = value);
                  }
                );
                (temp1 = labeledClauses.fromClause) != null
                  ? temp1
                  : (labeledClauses.fromClause = iterable);
                (temp2 = labeledClauses.withClause) != null
                  ? temp2
                  : (labeledClauses.withClause = body);
              }
              return this._labeledClauses;
            },
            generatesInlineIteration: function() {
              let labeledClauses, raw, temp, temp1, temp2, temp3, temp4, temp5;
              if (!this._generatesInlineIteration) {
                labeledClauses = this.labeledClauses;
                raw =
                  (temp =
                    (temp1 =
                      (temp2 =
                        (temp3 =
                          (temp4 =
                            (temp5 = labeledClauses.byClause) != null
                              ? temp5
                              : labeledClauses.shortClause) != null
                            ? temp4
                            : labeledClauses.skipClause) != null
                          ? temp3
                          : labeledClauses.fromObjectClause) != null
                        ? temp2
                        : labeledClauses.toClause) != null
                      ? temp1
                      : labeledClauses.tilClause) != null
                    ? temp
                    : labeledClauses.fromArrayClause;
                this._generatesInlineIteration = !!raw;
              }
              return this._generatesInlineIteration;
            }
          });
          this.prototype.postTransform = function() {
            let labeledClauses,
              comprehensionType,
              byClause,
              shortClause,
              skipClause,
              fromObjectClause,
              toClause,
              tilClause,
              fromArrayClause;
            this.initLabeledChildren();
            ({ labeledClauses, comprehensionType } = this);
            ({
              byClause,
              shortClause,
              skipClause,
              fromObjectClause,
              toClause,
              tilClause,
              fromArrayClause
            } = labeledClauses);
            return byClause ||
              shortClause ||
              skipClause ||
              fromObjectClause ||
              toClause ||
              tilClause ||
              fromArrayClause
              ? this.generateInlineIteration(comprehensionType, labeledClauses)
              : (() => {
                  switch (comprehensionType) {
                    case "each":
                    case "array":
                    case "object":
                    case "reduce":
                      return this.generateRuntimeBackedIteration(
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
            return Caf.array(params, p =>
              p != null
                ? p
                : Null != null
                ? Null
                : (Null = SimpleLiteralStn({ value: "null" }))
            );
          };
          autoDestructuringAssignment = function(toChild, fromChild) {
            let stn, base, base1, temp;
            stn =
              (Caf.exists((base = toChild.children)) &&
                (Caf.exists((base1 = base[0])) && base1.type)) ===
              "ObjectDestructuring"
                ? (([toChild] = toChild.children), DestructuringAssignmentStn)
                : AssignmentStn;
            return stn(
              (temp = toChild.identifierStn) != null ? temp : toChild,
              fromChild
            );
          };
          this.prototype.generateInlineIteration = function(
            comprehensionType,
            {
              fromArrayClause,
              shortClause,
              skipClause,
              fromClause,
              tilClause,
              toClause,
              byClause,
              fromObjectClause,
              intoClause,
              withClause,
              whenClause,
              withKeyClause
            }
          ) {
            let variableDefinition,
              toClauseEquality,
              byClauseCompileTimeValue,
              fromCompileTimeValue,
              toCompileTimeValue,
              shortClauseCompileTimeValue,
              skipClauseCompileTimeValue,
              reverseArray,
              fromId,
              toId,
              byClauseIsNegative,
              byClauseIsPositive,
              byClauseIsZero,
              byId,
              intoId,
              iId,
              valueId,
              withClauseProvided,
              returnNullIfFalse,
              valueStn,
              keyValueStn,
              invokeWithClauseAndPush,
              skippableStns,
              loopStn,
              positiveByTest,
              negativeByTest;
            ({ variableDefinition } = this.labeledChildren);
            variableDefinition =
              Caf.exists(variableDefinition) && variableDefinition.children;
            if (toClause || tilClause) {
              fromClause != null
                ? fromClause
                : (fromClause = NumberLiteralStn({ value: "0" }));
              toClauseEquality = tilClause ? ((toClause = tilClause), "") : "=";
              if (skipClause) {
                throw new Error(
                  "skip-clause not supported (yet) in to/til iteration"
                );
              }
              if (shortClause) {
                throw new Error(
                  "short-clause not supported (yet) in to/til iteration"
                );
              }
              byClauseCompileTimeValue =
                Caf.exists(byClause) && byClause.compileTimeValue;
              fromCompileTimeValue = fromClause.compileTimeValue;
              toCompileTimeValue = toClause.compileTimeValue;
              if (fromCompileTimeValue != null && toCompileTimeValue != null) {
                if (!byClause) {
                  byClauseCompileTimeValue = (() => {
                    switch (false) {
                      case !(fromCompileTimeValue < toCompileTimeValue):
                        return 1;
                      case !(fromCompileTimeValue > toCompileTimeValue):
                        return -1;
                      default:
                        return 0;
                    }
                  })();
                }
              }
            } else {
              if (byClause || shortClause || skipClause) {
                byClauseCompileTimeValue =
                  Caf.exists(byClause) && byClause.compileTimeValue;
                shortClauseCompileTimeValue =
                  Caf.exists(shortClause) && shortClause.compileTimeValue;
                skipClauseCompileTimeValue =
                  Caf.exists(skipClause) && skipClause.compileTimeValue;
                fromArrayClause != null
                  ? fromArrayClause
                  : (fromArrayClause = fromClause);
                if (
                  byClauseCompileTimeValue != null &&
                  byClauseCompileTimeValue < 0
                ) {
                  if (
                    !(shortClause && !(shortClauseCompileTimeValue != null))
                  ) {
                    toCompileTimeValue =
                      shortClauseCompileTimeValue != null
                        ? shortClauseCompileTimeValue
                        : 0;
                    shortClause = null;
                  }
                  reverseArray = true;
                }
              }
              if (fromArrayClause) {
                if (skipClause) {
                  if (skipClauseCompileTimeValue != null) {
                    skipClause = null;
                    fromCompileTimeValue = skipClauseCompileTimeValue;
                  }
                } else {
                  fromCompileTimeValue = 0;
                }
              }
              fromId = IdentifierStn({ preferredIdentifier: "from" });
            }
            if (!(toCompileTimeValue != null)) {
              toId = IdentifierStn({ preferredIdentifier: "to" });
            }
            if (byClauseCompileTimeValue != null) {
              switch (false) {
                case !(byClauseCompileTimeValue < 0):
                  byClauseIsNegative = true;
                  break;
                case !(byClauseCompileTimeValue > 0):
                  byClauseIsPositive = true;
                  break;
                case !(byClauseCompileTimeValue === 0):
                  byClauseIsZero = true;
              }
            } else {
              if (toClause || byClause) {
                byId = IdentifierStn({ preferredIdentifier: "by" });
              }
            }
            if (!(comprehensionType === "each" && toClause && !intoClause)) {
              intoId = IdentifierStn({ preferredIdentifier: "into" });
            }
            iId = IdentifierStn({
              preferredIdentifier: fromObjectClause ? "k" : "i",
              addToLets: !fromObjectClause
            });
            if (!variableDefinition) {
              variableDefinition = [
                IdentifierStn({ preferredIdentifier: "v" })
              ];
            }
            [valueId] = variableDefinition;
            withClauseProvided = !!withClause;
            returnNullIfFalse = false;
            withClause != null
              ? withClause
              : (withClause = valueStn = valueId.valueStn);
            if (fromObjectClause) {
              keyValueStn != null ? keyValueStn : (keyValueStn = iId.valueStn);
              withKeyClause != null
                ? withKeyClause
                : (withKeyClause = keyValueStn);
            }
            intoId &&
              (intoClause = AssignmentStn(
                intoId,
                intoClause != null
                  ? intoClause
                  : (() => {
                      switch (comprehensionType) {
                        case "object":
                          return PureJsStn("{}");
                        case "each":
                          return fromId || toClause;
                        case "array":
                          return PureJsStn("[]");
                        default:
                          return PureJsStn("null");
                      }
                    })()
              ));
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
                            withKeyClause != null ? withKeyClause : valueStn
                          ),
                          withClause
                        );
                      case "find":
                        return whenClause || !withClauseProvided
                          ? (whenClause != null
                              ? whenClause
                              : (whenClause = withClause),
                            StatementsStn(
                              AssignmentStn(intoId, withClause),
                              PureJsStn("break")
                            ))
                          : ((returnNullIfFalse = true),
                            IfStn(
                              AssignmentStn(intoId, withClause),
                              PureJsStn("break")
                            ));
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
              fromId &&
                AssignmentStn(
                  fromId,
                  fromArrayClause != null ? fromArrayClause : fromObjectClause
                ),
              intoClause,
              true
                ? ((skippableStns = [
                    toId &&
                      (() => {
                        switch (false) {
                          case !(toCompileTimeValue != null):
                            return AssignmentStn(
                              toId,
                              NumberLiteralStn({ value: toCompileTimeValue })
                            );
                          case !fromObjectClause:
                            return null;
                          case !fromArrayClause:
                            return AssignmentStn(
                              toId,
                              shortClause
                                ? reverseArray
                                  ? shortClause
                                  : BinaryOperatorStn(
                                      { operator: "-" },
                                      AccessorStn(
                                        fromId,
                                        IdentifierStn("length")
                                      ),
                                      shortClause
                                    )
                                : AccessorStn(fromId, IdentifierStn("length"))
                            );
                          case !toClause:
                            return AssignmentStn(toId, toClause);
                        }
                      })(),
                    (() => {
                      switch (false) {
                        case !fromArrayClause:
                          return AssignmentStn(
                            iId,
                            reverseArray
                              ? BinaryOperatorStn(
                                  { operator: "-" },
                                  AccessorStn(fromId, IdentifierStn("length")),
                                  skipClause
                                    ? BinaryOperatorStn(
                                        { operator: "+" },
                                        skipClause,
                                        NumberLiteralStn({ value: 1 })
                                      )
                                    : NumberLiteralStn({
                                        value:
                                          1 +
                                          (skipClauseCompileTimeValue != null
                                            ? skipClauseCompileTimeValue
                                            : 0)
                                      })
                                )
                              : skipClause != null
                              ? skipClause
                              : NumberLiteralStn({
                                  value: fromCompileTimeValue
                                })
                          );
                        case !toClause:
                          return AssignmentStn(
                            iId,
                            fromClause != null
                              ? fromClause
                              : (fromClause = NumberLiteralStn({ value: "0" }))
                          );
                      }
                    })(),
                    byId &&
                      AssignmentStn(
                        byId,
                        byClause ||
                          IfStn(
                            BinaryOperatorStn({ operator: "<" }, iId, toId),
                            NumberLiteralStn({ value: "1" }),
                            NumberLiteralStn({ value: "-1" })
                          )
                      ),
                    !byClauseIsZero
                      ? ((loopStn = fromObjectClause ? ForStn : WhileStn),
                        loopStn(
                          { captureResultsAs: intoId },
                          fromObjectClause
                            ? ForInControlStn(
                                { let: true },
                                keyValueStn != null
                                  ? keyValueStn
                                  : (keyValueStn = iId.valueStn),
                                fromId
                              )
                            : fromArrayClause
                            ? BinaryOperatorStn(
                                { operator: reverseArray ? ">=" : "<" },
                                iId,
                                toId != null
                                  ? toId
                                  : NumberLiteralStn({
                                      value: toCompileTimeValue
                                    })
                              )
                            : ((positiveByTest = BinaryOperatorStn(
                                {
                                  operator: `<${Caf.toString(toClauseEquality)}`
                                },
                                iId,
                                toId ||
                                  NumberLiteralStn({
                                    value: toCompileTimeValue
                                  })
                              )),
                              (negativeByTest = BinaryOperatorStn(
                                {
                                  operator: `>${Caf.toString(toClauseEquality)}`
                                },
                                iId,
                                toId ||
                                  NumberLiteralStn({
                                    value: toCompileTimeValue
                                  })
                              )),
                              (() => {
                                switch (false) {
                                  case !byClauseIsPositive:
                                    return positiveByTest;
                                  case !byClauseIsNegative:
                                    return negativeByTest;
                                  default:
                                    return BinaryOperatorStn(
                                      { operator: "||" },
                                      BinaryOperatorStn(
                                        { operator: "&&" },
                                        BinaryOperatorStn(
                                          { operator: ">" },
                                          byId,
                                          NumberLiteralStn({ value: "0" })
                                        ),
                                        positiveByTest
                                      ),
                                      BinaryOperatorStn(
                                        { operator: "&&" },
                                        BinaryOperatorStn(
                                          { operator: "<" },
                                          byId,
                                          NumberLiteralStn({ value: "0" })
                                        ),
                                        negativeByTest
                                      )
                                    );
                                }
                              })()),
                          StatementsStn(
                            (Caf.exists(variableDefinition) &&
                              variableDefinition.length) > 0
                              ? fromObjectClause
                                ? Caf.array(variableDefinition, (v, i) => {
                                    let temp;
                                    return autoDestructuringAssignment(
                                      (temp = v.identifierStn) != null
                                        ? temp
                                        : v,
                                      i === 0
                                        ? AccessorStn(fromId, keyValueStn)
                                        : iId
                                    );
                                  })
                                : Caf.array(variableDefinition, (v, i) => {
                                    let temp;
                                    return autoDestructuringAssignment(
                                      (temp = v.identifierStn) != null
                                        ? temp
                                        : v,
                                      !toClause && i === 0
                                        ? AccessorStn(fromId, iId.getValueStn())
                                        : iId
                                    );
                                  })
                              : undefined,
                            whenClause
                              ? IfStn(whenClause, invokeWithClauseAndPush)
                              : invokeWithClauseAndPush,
                            !fromObjectClause
                              ? byId ||
                                (byClauseCompileTimeValue != null &&
                                  !floatEq(
                                    1,
                                    Math.abs(byClauseCompileTimeValue)
                                  ))
                                ? byClauseCompileTimeValue &&
                                  byClauseCompileTimeValue < 0
                                  ? AssignmentStn(
                                      { operator: "-" },
                                      iId,
                                      NumberLiteralStn({
                                        value: Math.abs(
                                          byClauseCompileTimeValue
                                        )
                                      })
                                    )
                                  : AssignmentStn(
                                      { operator: "+" },
                                      iId,
                                      byId ||
                                        NumberLiteralStn({
                                          value: byClauseCompileTimeValue
                                        })
                                    )
                                : byClauseCompileTimeValue < 0
                                ? UnaryOperatorStn(
                                    { operand: "--", tail: true },
                                    iId
                                  )
                                : UnaryOperatorStn(
                                    { operand: "++", tail: true },
                                    iId
                                  )
                              : undefined
                          )
                        ))
                      : undefined
                  ]),
                  fromId
                    ? IfStn(
                        UnaryOperatorStn({ operand: "?" }, fromId),
                        StatementsStn(skippableStns)
                      )
                    : skippableStns)
                : undefined,
              returnNullIfFalse
                ? BinaryOperatorStn(
                    { operator: "||" },
                    intoId,
                    PureJsStn("null")
                  )
                : intoId ||
                    toId ||
                    NumberLiteralStn({ value: toCompileTimeValue })
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
          this.prototype.generateRuntimeBackedIteration = function(
            method,
            {
              fromClause,
              intoClause,
              injectClause,
              withClause,
              whenClause,
              withKeyClause
            }
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
                intoClause != null ? intoClause : injectClause,
                { f: withKeyClause }
              )
            );
          };
        }
      ));
    }
  );
});
