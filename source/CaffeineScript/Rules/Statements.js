"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree"),
    ControlOperatorStn;
  ({ ControlOperatorStn } = Caf.import(["ControlOperatorStn"], [
    StandardImport,
    BabelBridge,
    SemanticTree,
    global
  ]));
  return {
    statement: [
      "statementWithoutEnd newLineStatementExtension* end",
      "importStatement"
    ],
    tailControlOperator: /\ +(if|while|until|unless) +/,
    tailControlOperatorComplexExpression: "tailControlOperator implicitArrayOrExpression",
    statementWithoutEnd: [
      "lineStartExpression",
      "implicitArrayOrExpression !tailControlOperator",
      {
        pattern: "implicitArrayOrExpression tailControlOperatorComplexExpression+",
        getStn: function() {
          let stn;
          stn = this.implicitArrayOrExpression.getStn();
          Caf.each(this.tailControlOperatorComplexExpressions, undefined, (
            tco,
            k,
            into
          ) => {
            stn = ControlOperatorStn(
              { operand: tco.tailControlOperator.toString().trim() },
              tco.implicitArrayOrExpression.getStn(),
              stn
            );
          });
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
      pattern: "/import/ _ valueList end root",
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
    statementSemi: "statementWithoutEnd _? ';' _?"
  };
});
