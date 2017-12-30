"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StatementsStn, RootStn, compactFlatten;
  ({ compactFlatten } = Caf.import(
    ["compactFlatten"],
    [global, require("../../StandardImport")]
  ));
  StatementsStn = require("./StatementsStn");
  return (RootStn = Caf.defClass(
    class RootStn extends require("../ScopeStnMixin")(require("../BaseStn")) {
      constructor(props, children) {
        super(...arguments);
        this._scopeHasBeenUpdated = false;
        this.statements = children[0];
      }
    },
    function(RootStn, classSuper, instanceSuper) {
      this.prototype.cloneWithNewStatements = function(statements) {
        return new RootStn(this.props, [
          StatementsStn(compactFlatten(statements))
        ]);
      };
      this.prototype.updateScope = function() {
        return !this._scopeHasBeenUpdated
          ? instanceSuper.updateScope.call(this, this)
          : undefined;
      };
      this.prototype.toJsModule = function() {
        let identifiersUsedButNotAssigned, statementsJs, lets, statements;
        this.updateScope();
        ({ identifiersUsedButNotAssigned } = this);
        identifiersUsedButNotAssigned = Caf.each(
          identifiersUsedButNotAssigned,
          [],
          (v, k, cafInto) => {
            cafInto.push(`${Caf.toString(k)} = global.${Caf.toString(k)}`);
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
        return `"use strict"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${Caf.toString(
          statements.join("; ")
        )};});`;
      };
      this.prototype.toJs = function() {
        let statements;
        this.updateScope();
        statements = this.statements.toJs();
        return (
          compactFlatten([this.getAutoLets(), statements]).join("; ") + ";"
        );
      };
      this.prototype.toBareJs = function() {
        let statements;
        this.updateScope();
        statements = this.statements.toJs();
        return (
          compactFlatten([
            "Caf = require('caffeine-script-runtime')",
            this.getBareInitializers(),
            statements
          ]).join(";\n") + ";"
        );
      };
    }
  ));
});
