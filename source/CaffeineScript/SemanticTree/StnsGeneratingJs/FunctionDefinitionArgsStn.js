"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let FunctionDefinitionArgsStn;
    return (FunctionDefinitionArgsStn = Caf.defClass(
      class FunctionDefinitionArgsStn extends require("../BaseStn") {},
      function(FunctionDefinitionArgsStn, classSuper, instanceSuper) {
        this.getter({
          argumentNameList: function() {
            return Caf.array(
              this.children,
              c => c.argumentName,
              c => c.argumentName
            );
          }
        });
        this.prototype.toSourceNode = function(options) {
          return this.createSourceNode(
            "(",
            Caf.array(this.children, (c, i) => {
              let sn;
              sn = c.toSourceNode();
              return i > 0 ? [", ", sn] : sn;
            }),
            ")"
          );
        };
      }
    ));
  })();
});
