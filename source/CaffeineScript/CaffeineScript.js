let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Package = require("../../package");
  return {
    version: Package.version,
    compile: function(source, options) {
      let CaffeineScriptParser = require("./CaffeineScriptParser");
      return {
        compiled: {
          js: CaffeineScriptParser.parse(source, options)
            .getStn()
            .transform()
            .toJsModule()
        }
      };
    }
  };
});
