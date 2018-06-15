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
        "extractAction:extractToIdentifier _comma_ objectExtractionList",
        "extractAction:extractToIdentifier"
      ],
      extractToIdentifier: [
        "element:identifier",
        { stnFactory: "ExtractToIdentifierStn" }
      ]
    };
  })();
});
