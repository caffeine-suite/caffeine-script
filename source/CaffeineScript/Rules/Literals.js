let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport");
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
