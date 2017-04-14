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
    this.rule(
      {
        array: [
          "openBracket_ valueListBlock _closeBracket",
          {
            pattern: "'[]' _? valueListToEolAndBlock",
            getImplicitArray: function() {
              return false;
            }
          },
          "'[]'"
        ],
        brackedArray: "openBracket_ valueList _comma_? _closeBracket",
        implicitArray: [
          {
            pattern: "start:expression _comma_ valueList _comma_?",
            getImplicitArray: function() {
              return this;
            },
            stnFactory: "ArrayStn",
            stnProps: { implicitArray: true }
          },
          {
            pattern: "start:literal _ valueList _comma_?",
            getImplicitArray: function() {
              return this;
            },
            stnFactory: "ArrayStn",
            stnProps: { implicitArray: true }
          }
        ]
      },
      { stnFactory: "ArrayStn" }
    );
    this.rule({
      valueListBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "valueListBlockSubParse"
      }),
      valueListToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
        { rule: "valueListBlockSubParse" }
      ),
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
