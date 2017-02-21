let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
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
      valueListBlockSubParse: "end* statement*"
    });
    this.rule({
      valueList: [
        { pattern: "element:arrayValue _comma_ valueList" },
        { pattern: "element:literal _ valueList" },
        { pattern: "element:arrayValue" }
      ]
    });
    return this.rule({
      arrayValue: [
        { pattern: "identifier etc", stnFactory: "ArraySpreadElementStn" },
        { pattern: "expression" }
      ]
    });
  };
});
