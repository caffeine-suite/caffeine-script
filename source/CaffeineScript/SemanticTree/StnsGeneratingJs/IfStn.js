"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function(test, body, elseClause) {
    return require("./ControlOperatorStn")(
      { operand: "if" },
      test,
      body,
      elseClause
    );
  };
});
