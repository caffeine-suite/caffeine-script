let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation");
  return function() {
    return this.rule({
      _: "/ +/ comment?",
      end: "lineEndComment",
      comment: [
        { pattern: "/##[^\n]*/ unparsedBlock*" },
        { pattern: "/#(?!#)[^\n]*/" }
      ],
      _end: /( *(\n|;|$))+/,
      lineStartComment: ["comment _end", "_end"],
      lineEndComment: "_? comment? _end lineStartComment*"
    });
  };
});
