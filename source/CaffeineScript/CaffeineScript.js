"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "mergeInto"],
    [global, require("art-standard-lib")],
    (log, mergeInto) => {
      require("./SemanticTree");
      return {
        version: require("../../package.json").version,
        compile: function(source, options = {}) {
          let bare,
            inlineMap,
            sourceMap,
            sourceFile,
            sourceRoot,
            transformedStn,
            stn,
            parseTree,
            e,
            temp;
          return (() => {
            try {
              ({
                bare,
                inlineMap,
                sourceMap,
                sourceFile,
                sourceRoot
              } = options);
              transformedStn = (stn = (parseTree = require("./CaffeineScriptParser").parse(
                source,
                options
              )).getStn())
                .validateAll()
                .transform();
              return transformedStn.toJsUsingSourceNode({
                module: !bare,
                bare,
                inlineMap,
                sourceMap,
                sourceFile,
                sourceRoot
              });
            } catch (error) {
              e = error;
              if (
                !(
                  e.location != null ||
                  e.sourceFile != null ||
                  e.message.match(/parse|expect/i)
                )
              ) {
                log.error({
                  CaffeineScriptBETA: {
                    message:
                      "Uh-oh! There was an internal error compiling your file. We'd love to fix it. Could you submit an issue with a copy of the code that won't compile?\n\nSubmit issues here: https://github.com/caffeine-suite/caffeine-script/issues\n\nSorry for the inconvenience. Thank you so much for trying CaffeineScript!",
                    options,
                    parseTree,
                    stn,
                    transformedStn
                  }
                });
              }
              if (options.debug) {
                (temp = e.info) != null ? temp : (e.info = {});
                mergeInto(e.info, { options, parseTree, stn, transformedStn });
              }
              return (() => {
                throw e;
              })();
            }
          })();
        }
      };
    }
  );
});
