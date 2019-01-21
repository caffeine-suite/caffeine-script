"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.object(require("./JavaScriptReservedWordList"), () => true);
});
