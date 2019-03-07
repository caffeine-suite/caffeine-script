"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["escapePropName", "peek"],
    [global, require("../../StandardImport")],
    (escapePropName, peek) => {
      let findModuleSync, RequireStn;
      ({ findModuleSync } = require("caffeine-mc"));
      return (RequireStn = Caf.defClass(
        class RequireStn extends require("../BaseStn") {},
        function(RequireStn, classSuper, instanceSuper) {
          this.getter({
            rawRequireString: function() {
              return this.props.require;
            },
            propName: function() {
              return escapePropName(
                /\//.test(this.rawRequireString)
                  ? peek(this.rawRequireString.split("/"))
                  : this.rawRequireString
              );
            },
            requireString: function() {
              return findModuleSync(this.rawRequireString, this.parser.options)
                .requireString;
            }
          });
          this.prototype.validate = function() {
            return this.requireString;
          };
          this.prototype.toSourceNode = function() {
            let requireString;
            ({ requireString } = this);
            return this.createSourceNode(
              `require('${Caf.toString(requireString)}')`
            ).withProps({
              moduleDependencies: {
                [`${Caf.toString(this.rawRequireString)}`]: requireString
              }
            });
          };
        }
      ));
    }
  );
});
