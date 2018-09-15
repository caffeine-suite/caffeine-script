"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function(test, body) {
    return require("./ControlOperatorStn")({ operand: "while" }, test, body);
  };
});
