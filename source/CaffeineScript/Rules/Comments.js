let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport");
  return function() {
    return this.rule(
      {
        _: "/ +/ comment?",
        end: "lineEndComment",
        comment: [
          { pattern: "/##[^\n]*/ unparsedBlock*" },
          { pattern: "/#(?!#)[^\n]*/" }
        ],
        _end: /( *(\n|; *|$))+/,
        lineStartComment: ["comment _end", "_end"],
        lineEndComment: "_? comment? _end lineStartComment*"
      },
      {
        getPresent: function() {
          return false;
        }
      }
    );
  };
});
