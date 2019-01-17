"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          array: ["'[]' _? valueList", "'[]'"],
          brackedArray:
            "openBracket_ valueList _comma_optionalNewLine? _closeBracket",
          implicitArray: [
            "start:expression optionalComma simpleValueList _comma_?",
            "start:literal _ simpleValueList _comma_?",
            { stnFactory: "ArrayStn", stnProps: { implicitArray: true } }
          ],
          implicitArrayWithoutImplicitObjects: [
            "start:expression optionalComma simpleValueListWithoutImplicitObjects",
            "start:literal _ simpleValueListWithoutImplicitObjects",
            { stnFactory: "ArrayStn", stnProps: { implicitArray: true } }
          ]
        },
        { stnFactory: "ArrayStn" }
      );
    };
  })();
});
