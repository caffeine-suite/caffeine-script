let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
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
          ? `this.${Caf.toString(this.identifier.toJs())} = ${Caf.toString(
              this.identifier.toJs()
            )}`
          : undefined;
      };
      this.prototype.toJs = function() {
        return `${Caf.toString(this.rest ? "..." : "")}${Caf.toString(
          this.identifier.toJs()
        )}${Caf.toString(
          this.defaultValue
            ? ` = ${Caf.toString(this.defaultValue.toJs())}`
            : ""
        )}`;
      };
    }
  );
});
