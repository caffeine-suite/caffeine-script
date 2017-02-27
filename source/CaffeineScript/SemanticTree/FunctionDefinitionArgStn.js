let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    FunctionDefinitionArgsStn = require("./FunctionDefinitionArgsStn"),
    BaseStn = require("./BaseStn");
  FunctionDefinitionArgsStn;
  return FunctionDefinitionArgStn = Caf.defClass(
    class FunctionDefinitionArgStn extends BaseStn {
      constructor(props, children) {
        super(...arguments);
        this.assignThisProperty = props.assignThisProperty;
        this.rest = props.rest;
        this.identifier = children[0];
        this.defaultValue = children[1];
      }
    },
    function(FunctionDefinitionArgStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.getter({
        argumentName: function() {
          return this.identifier.name;
        }
      });
      this.prototype.getFunctionPreBodyStatementsJs = function() {
        return this.assignThisProperty
          ? `this.${this.identifier.toJs()} = ${this.identifier.toJs()}`
          : undefined;
      };
      this.prototype.toJs = function() {
        return `${this.rest
          ? "..."
          : ""}${this.identifier.toJs()}${this.defaultValue
          ? ` = ${this.defaultValue.toJs()}`
          : ""}`;
      };
    }
  );
});
