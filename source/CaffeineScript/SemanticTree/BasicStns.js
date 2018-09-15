"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, require("../StandardImport")],
    merge => {
      return merge(require("./PlaceholderStns"), require("./StnsGeneratingJs"));
    }
  );
});
