"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Extensions;
  ({ Extensions } = Caf.import(
    ["Extensions"],
    [global, require("../StandardImport"), require("caffeine-eight")]
  ));
  return function() {
    this.rule({ blocks: "block+" });
    this.rule({
      block: "_? block:actualBlock",
      blockEmptyOk: "_? block:actualBlockEmptyOk",
      toEolAndBlock: "_? block:actualToEolAndBlock"
    });
    return this.rule({
      actualBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "nonEmptyRoot"
      }),
      actualBlockEmptyOk: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "root"
      }),
      actualToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
        { rule: "nonEmptyRoot" }
      ),
      unparsedBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "anything"
      }),
      anything: { pattern: /(.|\n)*$/ }
    });
  };
});
