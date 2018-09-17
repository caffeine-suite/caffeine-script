"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function(insideForParens, body) {
    return require("./ControlOperatorStn")(
      { operand: "for" },
      insideForParens,
      body
    );
  };
});
