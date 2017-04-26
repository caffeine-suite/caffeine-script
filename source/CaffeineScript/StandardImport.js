"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("art-standard-lib").merge(
    require("art-standard-lib"),
    require("art-class-system")
  );
});
