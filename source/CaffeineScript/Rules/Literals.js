"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    literal: [
      "keywordLiteral",
      "numberLiteral",
      "stringLiteral",
      "regExpLiteral",
      "bracketedObject",
      "brackedArray"
    ]
  };
});
