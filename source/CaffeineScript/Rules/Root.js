let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    root: {
      pattern: "lineStartComment* statement*",
      stnFactory: "StatementsStn"
    }
  };
});
