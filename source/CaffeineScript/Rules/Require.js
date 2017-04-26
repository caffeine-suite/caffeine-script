"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    require: {
      pattern: "/&/ pathedRequire",
      stnProps: function() {
        return { require: this.pathedRequire.text };
      },
      stnFactory: "RequireStn"
    }
  };
});
