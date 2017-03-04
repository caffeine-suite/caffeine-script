let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule({ blocks: "block+" });
    this.rule({
      block: "_? block:actualBlock",
      toEolAndBlock: "_? block:actualToEolAndBlock"
    });
    return this.rule({
      actualBlock: Extensions.IndentBlocks.getPropsToSubparseBlock(),
      actualToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(),
      unparsedBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "anything"
      }),
      anything: { pattern: /(.|\n)*$/ }
    });
  };
});
