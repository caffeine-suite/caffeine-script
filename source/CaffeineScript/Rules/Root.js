"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    root: {
      pattern: "lineStartComment* statement*",
      stnFactory: "StatementsStn"
    },
    nonEmptyRoot: {
      pattern: "lineStartComment* statement+",
      stnFactory: "StatementsStn"
    }
  };
});
