"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let findModuleSync, RequireStn;
    return (
      ({ findModuleSync } = require("caffeine-mc")),
      (RequireStn = Caf.defClass(
        class RequireStn extends require("../BaseStn") {},
        function(RequireStn, classSuper, instanceSuper) {
          this.getter({
            rawRequireString: function() {
              return this.props.require;
            },
            propName: function() {
              return this.rawRequireString;
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
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              `require('${Caf.toString(this.requireString)}')`
            );
          };
        }
      ))
    );
  })();
});
