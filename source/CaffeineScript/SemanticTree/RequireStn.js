let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    Path = require("path"),
    Fs = require("fs"),
    realRequire,
    findModuleSync,
    BaseStn = require("./BaseStn"),
    peek;
  ({ peek } = Caf.i(["peek"], [StandardImport, global]));
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
          `require('${Caf.toString(this.requireString)}')`
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.getter({
        identifierAssignedName: function() {
          return peek(this.props.require.split("/"));
        },
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
        return this.identifierAssignedName;
      };
      this.prototype.toJsExpressionWithParens = function() {
        return this.toJs();
      };
    }
  );
});
