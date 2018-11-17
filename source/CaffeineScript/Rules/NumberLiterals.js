"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          numberLiteral: /([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?|0b[01]+|0o[0-7]+|0x[0-9a-f]+)(?![$\w\u007f-\uffff])(?!\.[0-9])/i
        },
        {
          stnFactory: "NumberLiteralStn",
          stnProps: function() {
            return { value: this.toString().replace(/^(-?)0+(\d)/, "$1$2") };
          }
        }
      );
    };
  })();
});
