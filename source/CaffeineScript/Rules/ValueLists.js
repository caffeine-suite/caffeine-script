"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Extensions;
  ({ Extensions } = Caf.import(
    ["Extensions"],
    [global, require("../StandardImport"), require("caffeine-eight")]
  ));
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
          pattern:
            "statementWithoutEnd newLineStatementExtension* ellipsis end",
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
