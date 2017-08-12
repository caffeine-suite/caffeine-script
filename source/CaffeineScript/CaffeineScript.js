"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let log;
  ({ log } = Caf.import(["log"], [global, require("art-standard-lib")]));
  require("./SemanticTree");
  return {
    version: require("../../package.json").version,
    compile: function(source, options = {}) {
      let transformedStn, stn, parseTree, e, cafError;
      return (() => {
        try {
          transformedStn = (stn = (parseTree = require("./CaffeineScriptParser").parse(
            source,
            options
          )).getStn())
            .validateAll()
            .transform();
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
            !(
              e.location != null ||
              e.sourceFile != null ||
              e.message.match(/parse|expect/i)
            )
          ) {
            log.error({ parseTree, stn, transformedStn });
          }
          return (() => {
            throw e;
          })();
        }
      })();
    }
  };
});
