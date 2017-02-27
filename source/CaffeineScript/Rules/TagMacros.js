let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    SemanticTree = require("../SemanticTree"),
    upperCamelCase,
    Error;
  ({ upperCamelCase, Error } = Caf.i(["upperCamelCase", "Error"], [
    ArtFoundation,
    global
  ]));
  SemanticTree;
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
            `TagMacro: cannot find factory for: ${this.identifier.text}`
          );
        }
        return factory;
      }
    }
  };
});
