"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SemanticTree, upperCamelCase, Error;
  ({ upperCamelCase, Error } = Caf.import(["upperCamelCase", "Error"], [
    require("../StandardImport"),
    global
  ]));
  SemanticTree = require("../SemanticTree");
  return {
    tagMacro: {
      pattern: "/</ identifier />/ actualToEolAndBlock",
      getStnFactory: function() {
        let factoryName, factory;
        factoryName = upperCamelCase(this.identifier.text);
        factory = SemanticTree[factoryName] ||
          SemanticTree[factoryName + "Stn"];
        if (!factory) {
          throw new Error(
            `TagMacro: cannot find factory for: ${Caf.toString(
              this.identifier.text
            )}`
          );
        }
        return factory;
      }
    }
  };
});
