"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          assignmentExtension:
            "_? assignmentOperator singleValueOrImplicitArray"
        },
        {
          stnFactory: "AssignmentStn",
          stnExtension: true,
          stnProps: function() {
            let rawOp, match;
            rawOp = this.assignmentOperator.toString();
            return { operator: (match = rawOp.match(/(\S*)=/)) && match[1] };
          }
        }
      );
    };
  })();
});
