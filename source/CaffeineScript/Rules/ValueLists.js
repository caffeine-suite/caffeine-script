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
    this.rule({ valueList: ["simpleValueList", "valueListBlock"] });
    this.rule({
      valueListBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "valueListBlockSubParse"
      }),
      valueListBlockSubParse: "end* listItemStatement*"
    });
    this.rule({
      simpleValueList: [
        { pattern: "element:listItemExpression _comma_ simpleValueList" },
        { pattern: "element:literal _ simpleValueList" },
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
