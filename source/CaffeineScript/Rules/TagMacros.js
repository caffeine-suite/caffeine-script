"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StnRegistry, upperCamelCase, Error;
  ({ upperCamelCase, Error } = Caf.import(
    ["upperCamelCase", "Error"],
    [global, require("../StandardImport")]
  ));
  StnRegistry = require("../StnRegistry");
  return {
    tagMacro: {
      pattern: "/</ identifier />/ actualToEolAndBlock",
      getStnFactory: function() {
        let factoryName, factory;
        factoryName = upperCamelCase(this.identifier.text);
        factory = StnRegistry[factoryName] || StnRegistry[factoryName + "Stn"];
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
