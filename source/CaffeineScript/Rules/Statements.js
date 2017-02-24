let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree"),
    ControlOperatorStn;
  ({ ControlOperatorStn } = Caf.i(["ControlOperatorStn"], [
    ArtFoundation,
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
    tailControlOperatorComplexExpression: "tailControlOperator complexExpression",
    statementWithoutEnd: [
      "lineStartExpression",
      "complexExpression !tailControlOperator",
      {
        pattern: "complexExpression tailControlOperatorComplexExpression+",
        getStn: function() {
          let stn;
          stn = this.complexExpression.getStn();
          Caf.e(this.tailControlOperatorComplexExpressions, undefined, (
            tco,
            k,
            into
          ) => {
            stn = ControlOperatorStn(
              { operand: tco.tailControlOperator.toString().trim() },
              tco.complexExpression.getStn(),
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
      "end &dot valueExtension+ binaryOperatorSequenceExtension?"
    ],
    lineOfStatements: {
      pattern: "statementSemi* statementWithoutEnd",
      stnFactory: "StatementsStn"
    },
    statementSemi: "statementWithoutEnd _? ';' _?"
  };
});
