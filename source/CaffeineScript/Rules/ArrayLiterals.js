"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          array: ["'[]' _? valueList", "'[]'"],
          brackedArray: "openBracket_ valueList _comma_? _closeBracket",
          implicitArray: [
            {
              pattern: "start:expression _comma_ simpleValueList _comma_?",
              stnFactory: "ArrayStn",
              stnProps: { implicitArray: true }
            },
            {
              pattern: "start:literal _ simpleValueList _comma_?",
              stnFactory: "ArrayStn",
              stnProps: { implicitArray: true }
            }
          ],
          implicitArrayWithoutImplicitObjects: [
            "start:expression _comma_ simpleValueListWithoutImplicitObjects",
            "start:literal _ simpleValueListWithoutImplicitObjects",
            { stnFactory: "ArrayStn", stnProps: { implicitArray: true } }
          ]
        },
        { stnFactory: "ArrayStn" }
      );
    };
  })();
});
