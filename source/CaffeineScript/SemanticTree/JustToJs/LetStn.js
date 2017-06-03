"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Error = global.Error,
    LetStn;
  return (LetStn = Caf.defClass(
    class LetStn extends require("../BaseStn") {},
    function(LetStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let identifiers, identifier;
        ({ identifiers, identifier } = this.props);
        return identifiers
          ? (
              !(identifiers.length > 0)
                ? (() => {
                    throw new Error("LetStn identifiers empty");
                  })()
                : undefined,
              `let ${Caf.toString(identifiers.join(", "))}`
            )
          : identifier
            ? `let ${Caf.toString(identifier)}`
            : (() => {
                throw new Error("LetStn needs props!");
              })();
      };
    }
  ));
});
