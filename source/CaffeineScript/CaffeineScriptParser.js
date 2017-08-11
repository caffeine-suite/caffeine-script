"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let CaffeineScriptParser, Parser, isFunction, Error;
  ({ Parser, isFunction, Error } = Caf.import(
    ["Parser", "isFunction", "Error"],
    [
      global,
      require("./StandardImport"),
      require("caffeine-eight"),
      require("./CafParseNodeBaseClass")
    ]
  ));
  return (CaffeineScriptParser = Caf.defClass(
    class CaffeineScriptParser extends Parser {},
    function(CaffeineScriptParser, classSuper, instanceSuper) {
      let mixedIndentationRegexp, tabIndentationRegexp, spaceIndentationRegexp;
      this.nodeBaseClass = require("./CafParseNodeBaseClass");
      Caf.each(require("./Rules").modules, undefined, (mod, k, into) => {
        if (isFunction(mod)) {
          mod.call(this);
        } else {
          this.rule(mod);
        }
      });
      mixedIndentationRegexp = /(^|\n)( +\t|\t+ )/;
      tabIndentationRegexp = /(^|\n)\t/;
      spaceIndentationRegexp = /(^|\n) /;
      this.prototype.hasMixedIndentation = function(source) {
        return (
          mixedIndentationRegexp.test(source) ||
          (tabIndentationRegexp.test(source) &&
            spaceIndentationRegexp.test(source))
        );
      };
      this.prototype.normalizeIndentation = function(source) {
        let e;
        if (this.hasMixedIndentation(source)) {
          e = new Error(
            "file must only contain spaces OR tabs for indentation, not both"
          );
          e.failureIndex = 0;
          throw e;
        }
        return source.replace(/\t/g, " ");
      };
      this.prototype.parse = function(source, options) {
        return instanceSuper.parse.call(
          this,
          this.normalizeIndentation(source),
          options
        );
      };
    }
  ));
});
