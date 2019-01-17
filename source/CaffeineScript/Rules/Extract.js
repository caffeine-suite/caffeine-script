"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, require("../StandardImport"), require("caffeine-eight")],
    Extensions => {
      return {
        extractExpression: [
          "extractSource:value _ /extract/ conditionalExtract:conditionalExtract? extractActions",
          {
            stnFactory: "ExtractStn",
            stnProps: function() {
              return { conditional: !!this.conditionalExtract };
            }
          }
        ],
        extractActions: ["_ extractionTarget", "_? extractBodyBlock"],
        extractBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
          rule: "extractBody"
        }),
        extractBody: "end* extractBodyLine+",
        extractBodyLine: "extractionTarget end",
        conditionalExtract: /\?/,
        extractionTarget: "objectExtractionList",
        objectExtractionList: [
          "extractAction:extractAction _comma_optionalNewLine objectExtractionList",
          "extractAction:extractAction"
        ],
        extractAction: ["chainExtract", "extractToIdentifier"],
        chainExtract: [
          "extractSource:extractToIdentifier _ /extract/ conditionalExtract:conditionalExtract? extractActions",
          {
            stnFactory: "ExtractStn",
            stnProps: function() {
              return { conditional: !!this.conditionalExtract };
            }
          }
        ],
        extractDefault: "_? '=' _? expression",
        extractAs: "_ 'as' _ identifier",
        extractPathExtension: "dot extractPathExtension:identifier",
        extractToIdentifier: [
          "bastIdentifier:identifier extractPathExtension* extractAs:extractAs? extractDefault:extractDefault?",
          { stnFactory: "ExtractToIdentifierStn" }
        ]
      };
    }
  );
});
