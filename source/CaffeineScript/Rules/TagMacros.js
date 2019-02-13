"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, require("../StandardImport")],
    Error => {
      let StnRegistry;
      StnRegistry = require("../StnRegistry");
      return {
        tagMacro: {
          pattern: "/</ identifier />/ actualToEolAndBlock",
          getStnFactory: function() {
            return (() => {
              throw new Error("TagMacros are DEPRICATED");
            })();
          }
        }
      };
    }
  );
});
