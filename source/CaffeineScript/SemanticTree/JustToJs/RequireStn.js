"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let findModuleSync, RequireStn;
  ({ findModuleSync } = require("caffeine-mc"));
  return (RequireStn = Caf.defClass(
    class RequireStn extends require("../BaseStn") {},
    function(RequireStn, classSuper, instanceSuper) {
      this.getter({
        rawRequireString: function() {
          return this.props.require;
        },
        requireString: function() {
          return findModuleSync(this.rawRequireString, this.parser.options)
            .requireString;
        }
      });
      this.prototype.validate = function() {
        return this.requireString;
      };
      this.prototype.toJs = function() {
        return `require('${Caf.toString(this.requireString)}')`;
      };
    }
  ));
});
