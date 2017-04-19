"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule({ generalValueList: ["valueList", "valueListBlock"] });
    this.rule({
      valueListBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "valueListBlockSubParse"
      }),
      valueListBlockSubParse: "end* listItemStatement*"
    });
    this.rule({
      valueList: [
        { pattern: "element:listItemExpression _comma_ valueList" },
        { pattern: "element:literal _ valueList" },
        { pattern: "element:listItemExpression" }
      ]
    });
    return this.rule({
      listItemStatement: [
        {
          pattern: "statementWithoutEnd newLineStatementExtension* ellipsis end",
          stnFactory: "ArraySpreadElementStn"
        },
        { pattern: "statementWithoutEnd newLineStatementExtension* end" }
      ],
      listItemExpression: [
        { pattern: "expression ellipsis", stnFactory: "ArraySpreadElementStn" },
        { pattern: "expression" }
      ]
    });
  };
});
