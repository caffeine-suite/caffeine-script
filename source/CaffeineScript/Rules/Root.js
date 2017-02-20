let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return {
    root: { pattern: "end? statement* end?", stnFactory: "StatementsStn" }
  };
});
