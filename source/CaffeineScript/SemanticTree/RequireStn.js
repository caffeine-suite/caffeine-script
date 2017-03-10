let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    Path = require("path"),
    Fs = require("fs"),
    realRequire,
    findModuleSync,
    BaseStn = require("./BaseStn");
  Path;
  Fs;
  realRequire = eval("require");
  ({ findModuleSync } = require("caffeine-mc"));
  return RequireStn = Caf.defClass(
    class RequireStn extends BaseStn {},
    function(RequireStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.identifierAssignedName,
          `require('${this.requireString}')`
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.getter({
        identifierAssignedName: function() {
          return this.children[0].props.identifier;
        },
        rawRequireString: function() {
          return this.children[0].props.identifier;
        },
        requireString: function() {
          return findModuleSync(
            this.rawRequireString,
            this.parser.options
          ).requireString;
        }
      });
      this.prototype.toJs = function() {
        return this.identifierAssignedName;
      };
    }
  );
});
