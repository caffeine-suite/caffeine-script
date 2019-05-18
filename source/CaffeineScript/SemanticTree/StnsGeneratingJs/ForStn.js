"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return require("art-object-tree-factory").createObjectTreeFactory(
    { name: "ForStn" },
    function(props, body) {
      return require("./WhileStn")({ operand: "for" }, props, body);
    }
  );
});
