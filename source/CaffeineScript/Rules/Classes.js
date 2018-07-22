"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return {
      classDefinition: {
        pattern:
          "/class/ _ className:identifier classExtends:_extendsClause? _? body:actualBlockEmptyOk?",
        stnFactory: "ClassStn"
      },
      _extendsClause: { pattern: "_ /extends/ _ expressionWithOneLessBlock" }
    };
  })();
});
