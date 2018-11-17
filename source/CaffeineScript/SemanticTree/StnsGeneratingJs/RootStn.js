"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "present"],
    [global, require("../../StandardImport")],
    (compactFlatten, present) => {
      let StatementsStn, RootStn;
      StatementsStn = require("./StatementsStn");
      return (RootStn = Caf.defClass(
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
          this.getter({
            statementsSourceNodes: function() {
              return this.statements.toSourceNode();
            }
          });
          this.prototype.toSourceNode = function(options = {}) {
            let identifiersToImport,
              statementsSourceNode,
              lets,
              statementsSourceNodes,
              autoLets;
            this.rootUpdateScope();
            return options.bare
              ? this.createSourceNode(
                  "Caf = global.Caf || require('caffeine-script-runtime');\n",
                  this.getBareInitializers(),
                  this.statementsSourceNodes
                )
              : options.module
              ? ((identifiersToImport = Caf.array(
                  this.generateImportMap(),
                  (v, k) => `${Caf.toString(k)} = global.${Caf.toString(k)}`
                )),
                (statementsSourceNode = this.statements.toSourceNode({
                  returnAction: true
                })),
                (lets = compactFlatten([
                  identifiersToImport,
                  this.requiredIdentifierLets
                ])),
                this.createSourceNode(
                  "\"use strict\"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {",
                  lets.length > 0
                    ? `let ${Caf.toString(lets.join(", "))}; `
                    : undefined,
                  statementsSourceNode,
                  "});"
                ))
              : (({ statementsSourceNodes } = this),
                this.createSourceNode(
                  present((autoLets = this.getAutoLets()))
                    ? [autoLets, "; "]
                    : undefined,
                  statementsSourceNodes
                ));
          };
          this.prototype.rootUpdateScope = function() {
            return !this._scopeHasBeenUpdated
              ? ((this._scopeHasBeenUpdated = true), this.updateScope(this))
              : undefined;
          };
        }
      ));
    }
  );
});
