"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      extractExpression: [
        "extractSource:value _ /extract/ conditionalExtract:conditionalExtract? _ extractionTarget",
        {
          stnFactory: "ExtractStn",
          stnProps: function() {
            return { conditional: !!this.conditionalExtract };
          }
        }
      ],
      conditionalExtract: /\?/,
      extractionTarget: "objectExtractionList",
      objectExtractionList: [
        "extractAction:extractAction _comma_ objectExtractionList",
        "extractAction:extractAction"
      ],
      extractAction: ["chainExtract", "extractToIdentifier"],
      chainExtract: [
        "extractSource:extractToIdentifier _ /extract/ conditionalExtract:conditionalExtract? _ extractionTarget",
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
  })();
});
