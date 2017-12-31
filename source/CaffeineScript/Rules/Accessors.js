"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          dotAccessor:
            "existanceTest:questionMark? dot key:identifier assignmentExtension?",
          bracketAccessor:
            "existanceTest:questionMark? openBracket_ key:expression _closeBracket assignmentExtension?"
        },
        {
          stnFactory: "AccessorStn",
          stnExtension: true,
          stnProps: function() {
            return { existanceTest: !!this.existanceTest };
          },
          stnChildren: function() {
            return this.key.getStn();
          }
        }
      );
    };
  })();
});
