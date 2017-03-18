let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    StatementsStn = require("./StatementsStn"),
    ScopeStnMixin = require("./ScopeStnMixin"),
    BaseStn = require("./BaseStn"),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [StandardImport, global]));
  StatementsStn;
  return RootStn = Caf.defClass(
    class RootStn extends ScopeStnMixin(BaseStn) {
      constructor(props, children) {
        super(...arguments);
        this.statements = children[0];
      }
    },
    function(RootStn, classSuper, instanceSuper) {
      this.prototype.cloneWithNewStatements = function(statements) {
        return new RootStn(this.props, [
          StatementsStn(compactFlatten(statements))
        ]);
      };
      this.prototype.transform = function() {
        let ret;
        ret = instanceSuper.transform.apply(this, arguments);
        ret.updateScope(ret);
        return ret;
      };
      this.prototype.toJsModule = function() {
        let identifiersUsedButNotAssigned, statementsJs, lets, statements;
        ({ identifiersUsedButNotAssigned } = this);
        identifiersUsedButNotAssigned = Caf.e(
          identifiersUsedButNotAssigned,
          [],
          (v, k, into) => {
            into.push(`${Caf.toString(k)} = global.${Caf.toString(k)}`);
          }
        );
        statementsJs = this.statements.toFunctionBodyJs();
        lets = compactFlatten([
          identifiersUsedButNotAssigned,
          this.requiredIdentifierLets
        ]);
        statements = compactFlatten([
          lets.length > 0 ? `let ${Caf.toString(lets.join(", "))}` : undefined,
          statementsJs
        ]);
        return `let Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${Caf.toString(
          statements.join("; ")
        )};});`;
      };
      this.prototype.toJs = function() {
        let statementsJs;
        statementsJs = this.statements.toJs();
        return compactFlatten([this.getAutoLets(), statementsJs]).join("; ") +
          ";";
      };
    }
  );
});
