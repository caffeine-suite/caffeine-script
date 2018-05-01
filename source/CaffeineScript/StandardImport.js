"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("art-standard-lib").merge(
    require("art-class-system"),
    require("./Lib"),
    require("art-standard-lib"),
    {
      StnRegistry: require("./StnRegistry"),
      javaScriptReservedWords: require("./JavaScriptReservedWords")
    }
  );
});
