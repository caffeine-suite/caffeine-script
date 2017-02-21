let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    StatementsStn = require("./StatementsStn"),
    ScopeStnMixin = require("./ScopeStnMixin"),
    BaseStn = require("./BaseStn"),
    RootStn,
    compactFlatten;
  ({ RootStn, compactFlatten } = Caf.i(["RootStn", "compactFlatten"], [
    ArtFoundation,
    global
  ]));
  StatementsStn;
  return RootStn = Caf.defClass(
    class RootStn extends ScopeStnMixin(BaseStn) {
      constructor(props, children) {
        super(...arguments);
        this.statements = children[0];
      }
    },
    function() {
      this.prototype.cloneWithNewStatements = function(statements) {
        return new RootStn(this.props, [
          StatementsStn(compactFlatten(statements))
        ]);
      };
      this.prototype.transform = function() {
        let ret;
        ret = Caf.getSuper(this).transform.apply(this, arguments);
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
            into.push(`${k} = global.${k}`);
          }
        );
        statementsJs = this.statements.toFunctionBodyJs();
        lets = compactFlatten([
          identifiersUsedButNotAssigned,
          this.requiredIdentifierLets
        ]);
        statements = compactFlatten([
          lets.length > 0 ? `let ${lets.join(", ")}` : null,
          statementsJs
        ]);
        return `\
let Caf = require('caffeine-script-runtime');\n\
Caf.defMod(module, () => {${statements.join("; ")};});\
`;
      };
      this.prototype.toJs = function() {
        let statementsJs;
        statementsJs = this.statements.toJs();
        return compactFlatten([this.getAutoLets(), statementsJs]).join("; ") +
          ";";
      };
      return this;
    }
  );
});
