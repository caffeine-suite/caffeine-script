"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    root: {
      pattern: "lineStartComment* statement:lineStartStatement*",
      stnFactory: "StatementsStn"
    },
    nonEmptyRoot: {
      pattern: "lineStartComment* statement:lineStartStatement+",
      stnFactory: "StatementsStn"
    }
  };
});
