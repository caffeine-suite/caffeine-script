"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ControlOperatorStn;
  ({ ControlOperatorStn } = Caf.import(
    ["ControlOperatorStn"],
    [
      global,
      require("../StandardImport"),
      require("caffeine-eight"),
      require("../StnRegistry")
    ]
  ));
  return {
    statement: [
      "statementWithoutEnd newLineStatementExtension* end",
      "importStatement"
    ],
    tailControlOperator: /\ +(if|while|until|unless) +/,
    tailControlOperatorComplexExpression:
      "tailControlOperator implicitArrayOrExpression",
    statementWithoutEnd: [
      "lineStartExpression",
      "implicitArrayOrExpression !tailControlOperator",
      {
        pattern:
          "implicitArrayOrExpression tailControlOperatorComplexExpression+",
        getStn: function() {
          let stn;
          stn = this.implicitArrayOrExpression.getStn();
          Caf.each(
            this.tailControlOperatorComplexExpressions,
            undefined,
            tco => {
              stn = ControlOperatorStn(
                { operand: tco.tailControlOperator.toString().trim() },
                tco.implicitArrayOrExpression.getStn(),
                stn
              );
            }
          );
          return stn;
        }
      }
    ],
    newLineStart: {
      pattern: /( *\n)+/,
      getPresent: function() {
        return false;
      }
    },
    importStatement: {
      pattern: "/import/ _? valueList end root",
      stnFactory: "ImportStn"
    },
    newLineStatementExtension: [
      "end lineStartBinaryOperatorAndExpression",
      "end &/\\??\\./ valueExtension+ binaryOperatorSequenceExtension?"
    ],
    lineOfStatements: {
      pattern: "statementSemi* statementWithoutEnd",
      stnFactory: "StatementsStn"
    },
    lineOfStatementsOrBlock: ["lineOfStatements", "statementBlock"],
    statementSemi: "statementWithoutEnd _? ';' _?"
  };
});
