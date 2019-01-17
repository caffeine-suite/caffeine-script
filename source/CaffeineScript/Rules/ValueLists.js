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
          valueListBlockSubParse: "end* listItemStatement+"
        });
        this.rule({
          simpleValueList: [
            "element:listItemExpression optionalComma simpleValueList",
            "element:listItemExpression _comma_ valueListBlock",
            "element:listItemExpression"
          ],
          simpleValueListWithoutImplicitObjects:
            "!implicitObjectStart simpleValueListWithoutImplicitObjectOptions",
          simpleValueListWithoutImplicitObjectOptions: [
            "element:listItemExpression optionalComma simpleValueListWithoutImplicitObjects",
            "element:listItemExpression _comma_ valueListBlock",
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
                "lineStartStatementWithoutEnd newLineStatementExtension* _comma_? end"
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
