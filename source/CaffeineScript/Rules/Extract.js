"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      extractExpression: [
        "extractSource:value _ /extract/ _ extractionTarget",
        { stnFactory: "ExtractStn" }
      ],
      extractionTarget: "objectExtractionList",
      objectExtractionList: [
        "extractAction:extractAction _comma_ objectExtractionList",
        "extractAction:extractAction"
      ],
      extractAction: ["chainExtract", "extractToIdentifier"],
      chainExtract: [
        "extractSource:extractToIdentifier _ /extract/ _ extractionTarget",
        { stnFactory: "ExtractStn" }
      ],
      extractToIdentifier: [
        "identifier",
        { stnFactory: "ExtractToIdentifierStn" }
      ]
    };
  })();
});
