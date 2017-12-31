"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions", "Error"],
    [global, require("../StandardImport"), require("caffeine-eight")],
    (Extensions, Error) => {
      return {
        functionDefinition: [
          "args:argsDefinition? _arrow_ body:functionDefinitionBodyBlock?",
          {
            stnFactory: "FunctionDefinitionStn",
            stnProps: function() {
              return {
                bound: (() => {
                  switch (this._arrow_.text.match(/(=>|~>|->)/)[0]) {
                    case "=>":
                      return true;
                    case "~>":
                      return false;
                    case "->":
                      return "auto";
                    default:
                      return (() => {
                        throw new Error();
                      })();
                  }
                })()
              };
            }
          }
        ],
        functionDefinitionBodyBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
          { allowPartialMatch: true }
        ),
        argsDefinition: [
          "openParen_ argDefList? _closeParen",
          { stnFactory: "FunctionDefinitionArgsStn" }
        ],
        argDefList: [
          "argDef _comma_ argDefList",
          "argDef _ argDefList",
          "argDef"
        ],
        argDef: [
          "at:/@/? target:identifier argIdentifierExtension?",
          "target:destructuringTarget argIdentifierExtension?",
          {
            stnFactory: "FunctionDefinitionArgStn",
            stnProps: function() {
              let cafBase;
              return {
                rest: !!(
                  Caf.exists((cafBase = this.argIdentifierExtension)) &&
                  cafBase.ellipsis
                ),
                assignThisProperty: !!this.at
              };
            }
          }
        ],
        argIdentifierExtension: ["defaultValue", "ellipsis"],
        defaultValue: { pattern: "_equals_ expression" },
        superFunctionInvocation: [
          "openParen_ simpleValueList? _closeParen",
          "_? valueList"
        ],
        functionInvocationExtension: [
          "existanceTest:questionMark? openParen_ values:simpleValueList? _closeParen",
          "existanceTest:questionMark? !/[-+]/ _? values:valueList",
          {
            stnFactory: "FunctionInvocationStn",
            stnExtension: true,
            stnProps: function() {
              return { existanceTest: !!this.existanceTest };
            },
            stnChildren: function() {
              let cafBase;
              return Caf.exists((cafBase = this.values)) && cafBase.getStn();
            }
          }
        ]
      };
    }
  );
});
