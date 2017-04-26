"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let log;
  ({ log } = Caf.import(["log"], [require("art-standard-lib"), global]));
  return {
    version: require("../../package.json").version,
    compile: function(source, options = {}) {
      let parseTree, stn, transformedStn, e, cafError;
      return (() => {
        try {
          parseTree = require("./CaffeineScriptParser").parse(source, options);
          stn = parseTree.getStn();
          transformedStn = stn.transform();
          return {
            compiled: {
              js: options.bare
                ? transformedStn.toBareJs()
                : transformedStn.toJsModule()
            }
          };
        } catch (cafError) {
          e = cafError;
          if (
            !(e.location != null ||
              e.sourceFile != null ||
              e.message.match(/parse|expect/i))
          ) {
            log.error({
              parseTree: parseTree,
              stn: stn,
              transformedStn: transformedStn
            });
          }
          return (() => {
            throw e;
          })();
        }
      })();
    }
  };
});
