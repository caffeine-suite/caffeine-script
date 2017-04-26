"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    findModuleSync,
    RequireStn,
    BaseStn = require("./BaseStn");
  ({ findModuleSync } = require("caffeine-mc"));
  return RequireStn = Caf.defClass(
    class RequireStn extends BaseStn {},
    function(RequireStn, classSuper, instanceSuper) {
      this.getter({
        rawRequireString: function() {
          return this.props.require;
        },
        requireString: function() {
          return findModuleSync(
            this.rawRequireString,
            this.parser.options
          ).requireString;
        }
      });
      this.prototype.toJs = function() {
        return `require('${Caf.toString(this.requireString)}')`;
      };
      this.prototype.toJsExpressionWithParens = function() {
        return this.toJs();
      };
    }
  );
});
