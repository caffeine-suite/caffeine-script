"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("../../StandardImport").mergeWithSelf(require("../BasicStns"));
});
