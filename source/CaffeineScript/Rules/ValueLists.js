"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, require("../StandardImport"), require("caffeine-eight")],
    Extensions => {
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
            "element:listItemExpression _comma_ simpleValueList",
            "element:literal _ simpleValueList",
            "element:listItemExpression"
          ]
        });
        return this.rule({
          listItemStatement: [
            {
              pattern:
                "statementWithoutEnd newLineStatementExtension* ellipsis end",
              stnFactory: "ArraySpreadElementStn"
            },
            {
              pattern:
                "lineStartStatementWithoutEnd newLineStatementExtension* end"
            }
          ],
          listItemExpression: [
            {
              pattern: "expression ellipsis",
              stnFactory: "ArraySpreadElementStn"
            },
            { pattern: "expression" }
          ]
        });
      };
    }
  );
});
