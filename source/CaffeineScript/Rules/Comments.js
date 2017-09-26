"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function() {
    return this.rule(
      {
        _: "/ +/ comment?",
        end: "lineEndComment",
        onelinerEnd: "_? comment? /; */ comment?",
        comment: [
          { pattern: "/##[^\n]*/ unparsedBlock*" },
          { pattern: /\ *#([^\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/ }
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
