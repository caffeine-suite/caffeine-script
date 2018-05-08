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
            return this.createSourceNode(
              options.bare
                ? [
                    "Caf = global.Caf || require('caffeine-script-runtime');\n",
                    this.getBareInitializers(),
                    this.statementsSourceNodes
                  ]
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
                    [
                      "\"use strict\"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {",
                      lets.length > 0
                        ? `let ${Caf.toString(lets.join(", "))}; `
                        : undefined,
                      statementsSourceNode,
                      "});"
                    ])
                  : (({ statementsSourceNodes } = this),
                    [
                      present((autoLets = this.getAutoLets()))
                        ? [autoLets, "; "]
                        : undefined,
                      statementsSourceNodes
                    ])
            );
          };
          this.prototype.rootUpdateScope = function() {
            return !this._scopeHasBeenUpdated
              ? ((this._scopeHasBeenUpdated = true), this.updateScope(this))
              : undefined;
          };
          this.prototype.toJsModule = function() {
            let identifiersToImport, statementsJs, lets, statements;
            this.rootUpdateScope();
            identifiersToImport = Caf.array(
              this.generateImportMap(),
              (v, k) => `${Caf.toString(k)} = global.${Caf.toString(k)}`
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
              compactFlatten([this.getAutoLets(), statements]).join("; ") + ";"
            );
          };
          this.prototype.toBareJs = function() {
            let statements;
            this.rootUpdateScope();
            statements = this.statements.toJs();
            return (
              compactFlatten([
                "Caf = global.Caf || require('caffeine-script-runtime')",
                this.getBareInitializers(),
                statements
              ]).join(";\n") + ";"
            );
          };
        }
      ));
    }
  );
});
