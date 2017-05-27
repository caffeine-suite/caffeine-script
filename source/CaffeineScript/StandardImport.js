"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("art-standard-lib").merge(
    require("art-class-system"),
    require("art-standard-lib")
  );
});
