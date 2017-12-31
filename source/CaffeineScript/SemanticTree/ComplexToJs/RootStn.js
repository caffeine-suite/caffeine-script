"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten"],
    [global, require("../../StandardImport")],
    compactFlatten => {
      let StatementsStn, RootStn;
      return (
        (StatementsStn = require("./StatementsStn")),
        (RootStn = Caf.defClass(
          class RootStn extends require("../ScopeStnMixin")(
            require("../BaseStn")
          ) {
            constructor(props, children) {
              super(...arguments);
              this._scopeHasBeenUpdated = false;
              this.statements = children[0];
            }
          },
          function(RootStn, classSuper, instanceSuper) {
            this.prototype.isImports = true;
            this.prototype.cloneWithNewStatements = function(statements) {
              return new RootStn(this.props, [
                StatementsStn(compactFlatten(statements))
              ]);
            };
            this.prototype.rootUpdateScope = function() {
              return !this._scopeHasBeenUpdated
                ? ((this._scopeHasBeenUpdated = true), this.updateScope(this))
                : undefined;
            };
            this.prototype.toJsModule = function() {
              let identifiersToImport, statementsJs, lets, statements;
              this.rootUpdateScope();
              identifiersToImport = Caf.each(
                this.generateImportMap(),
                [],
                (v, k, cafInto) => {
                  cafInto.push(
                    `${Caf.toString(k)} = global.${Caf.toString(k)}`
                  );
                }
              );
              statementsJs = this.statements.toFunctionBodyJs();
              lets = compactFlatten([
                identifiersToImport,
                this.requiredIdentifierLets
              ]);
              statements = compactFlatten([
                lets.length > 0
                  ? `let ${Caf.toString(lets.join(", "))}`
                  : undefined,
                statementsJs
              ]);
              return `"use strict"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${Caf.toString(
                statements.join("; ")
              )};});`;
            };
            this.prototype.toJs = function() {
              let statements;
              this.rootUpdateScope();
              statements = this.statements.toJs();
              return (
                compactFlatten([this.getAutoLets(), statements]).join("; ") +
                ";"
              );
            };
            this.prototype.toBareJs = function() {
              let statements;
              this.rootUpdateScope();
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
        ))
      );
    }
  );
});
