let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("semantic-tree");
  return function() {
    return this.rule({ lineStartExpression: "multilineImplicitObject" });
  };
});
