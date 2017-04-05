let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport");
  return function() {
    return this.rule({ keywordLiteral: /(null|true|false)(?![a-zA-Z0-9]+)/ }, {
      stnFactory: "SimpleLiteralStn",
      stnProps: function() {
        return { value: this.toString() };
      }
    });
  };
});
