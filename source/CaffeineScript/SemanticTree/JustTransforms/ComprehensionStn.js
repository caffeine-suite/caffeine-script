"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "lowerCamelCase", "StnRegistry"],
    [global, require("../../StandardImport")],
    (Error, lowerCamelCase, StnRegistry) => {
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
              return Caf.each2(valueClauses, valueClause => {
                let type;
                ({ type } = valueClause);
                if (valueClauseChildren[type]) {
                  throw new Error(
                    `no more than one '${Caf.toString(type)}' clause allowed`
                  );
                }
                return (valueClauseChildren[type] = true);
              });
            };
            clauseAliases = { returning: "into", in: "from", do: "with" };
            this.prototype.postTransform = function() {
              let outputType, body, labeledClauses, cafTemp;
              this.initLabeledChildren();
              ({ outputType, body } = this.labeledChildren);
              labeledClauses = {};
              Caf.each2(
                this.labeledChildren.valueClauses,
                ({ type, value }) => {
                  let cafTemp;
                  type =
                    (cafTemp = clauseAliases[type]) != null ? cafTemp : type;
                  return (labeledClauses[
                    lowerCamelCase(type + "Clause")
                  ] = value);
                }
              );
              (cafTemp = labeledClauses.withClause) != null
                ? cafTemp
                : (labeledClauses.withClause = body);
              return (() => {
                switch (
                  (outputType =
                    Caf.exists(outputType) && outputType.props.token)
                ) {
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
            this.prototype.generateFind = function({ withClause, whenClause }) {
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
                iterable,
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
              { intoClause, withClause, whenClause, withKeyClause }
            ) {
              let FunctionInvocationStn,
                StatementsStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn,
                iterable,
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
              ({ iterable, variableDefinition } = this.labeledChildren);
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
                iterable,
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
