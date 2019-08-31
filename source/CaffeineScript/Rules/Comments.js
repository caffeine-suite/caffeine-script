"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          _: "/ +/ comment?",
          end: "lineEndComment",
          _OrEnd: ["_", "end"],
          comment: [
            { pattern: "/##[^\n]*/ unparsedBlock*" },
            { pattern: / *\#([ \t][^\n]*|(?=\n|$))/ }
          ],
          _end: /( *(\n|; *|$))+|( *(?=[\)}]))/,
          lineStartComment: ["comment _end", "_end"],
          lineEndComment: "_? comment? _end lineStartComment*"
        },
        {
          getPresent: function() {
            return false;
          }
        },
        { onlyCommentsRemain: "lineEndComment /$/" }
      );
    };
  })();
});
