"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        { keywordLiteral: /(undefined|NaN|null|true|false)(?![a-zA-Z0-9]+)/ },
        {
          stnFactory: "SimpleLiteralStn",
          stnProps: function() {
            return { value: this.toString() };
          }
        }
      );
    };
  })();
});
