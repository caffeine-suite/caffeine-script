let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("./StandardImport"),
    BabelBridge = require("babel-bridge"),
    CafParseNodeBaseClass = require("./CafParseNodeBaseClass"),
    Parser,
    isFunction;
  ({ Parser, isFunction } = Caf.i(["Parser", "isFunction"], [
    StandardImport,
    BabelBridge,
    CafParseNodeBaseClass,
    global
  ]));
  return CaffeineScriptParser = Caf.defClass(
    class CaffeineScriptParser extends Parser {},
    function(CaffeineScriptParser, classSuper, instanceSuper) {
      let Rules = require("./Rules");
      this.nodeBaseClass = CafParseNodeBaseClass;
      Caf.e(Rules.modules, undefined, (mod, k, into) => {
        if (isFunction(mod)) {
          mod.call(this);
        } else {
          this.rule(mod);
        }
      });
    }
  );
});
