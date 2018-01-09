"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let NewInstanceStn;
    return (NewInstanceStn = Caf.defClass(
      class NewInstanceStn extends require("../BaseStn") {},
      function(NewInstanceStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          let child, childJs;
          [child] = this.children;
          childJs = (() => {
            switch (child.type) {
              case "FunctionInvocation":
              case "Reference":
              case "GlobalIdentifier":
              case "This":
                return child.toJs({ newObjectFunctionInvocation: true });
              default:
                return `(${Caf.toString(child.toJs())})`;
            }
          })();
          return Caf.exists(options) && options.dotBase
            ? `(new ${Caf.toString(childJs)})`
            : `new ${Caf.toString(childJs)}`;
        };
      }
    ));
  })();
});
