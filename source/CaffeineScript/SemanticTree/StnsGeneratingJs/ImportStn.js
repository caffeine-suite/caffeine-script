"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["arrayWithoutLast", "Object", "compactFlatten"],
    [global, require("../../StandardImport")],
    (arrayWithoutLast, Object, compactFlatten) => {
      let ImportStn;
      return (ImportStn = Caf.defClass(
        class ImportStn extends require("../BaseStn") {},
        function(ImportStn, classSuper, instanceSuper) {
          this.getter({
            nonImportScope: function() {
              let scope;
              ({ scope } = this);
              while (scope.type === "Import") {
                ({ scope } = scope);
              }
              return scope;
            },
            importFromCaptureIdentifier: function() {
              return (
                this._importFromCaptureIdentifier ||
                (this._importFromCaptureIdentifier = this.nonImportScope.bindUniqueIdentifier(
                  "parentImports"
                ))
              );
            },
            parentImport: function() {
              return this.findParent(/^Import$/);
            }
          });
          this.prototype.toSourceNode = function(options = {}) {
            let importFromCaptureIdentifier,
              p,
              importBody,
              importFromList,
              identifiersToImport,
              bodyMainNodes,
              bodySourceNodes,
              lets,
              importsSourceNodes;
            importFromCaptureIdentifier = null;
            if ((p = this.parentImport)) {
              ({ importFromCaptureIdentifier } = p);
              true;
            }
            ({ importBody } = this.labeledChildren);
            importFromList = arrayWithoutLast(this.children);
            return importBody
              ? ((identifiersToImport = Object.keys(
                  importBody.generateImportMap()
                )),
                (bodyMainNodes = importBody.toSourceNode({
                  returnAction: true
                })),
                (bodySourceNodes = [
                  (lets = importBody.getAutoLets()) ? lets + "; " : undefined,
                  bodyMainNodes
                ]),
                identifiersToImport.length > 0
                  ? ((importsSourceNodes = compactFlatten([
                      importFromCaptureIdentifier || "global",
                      ", ",
                      this.stnArrayToSourceNodes(importFromList, ", ")
                    ])),
                    this.createSourceNode(
                      'Caf.importInvoke(["',
                      identifiersToImport.join('", "'),
                      '"], ',
                      this._importFromCaptureIdentifier
                        ? [this._importFromCaptureIdentifier, " = "]
                        : undefined,
                      "[",
                      importsSourceNodes,
                      "], (",
                      identifiersToImport.join(", "),
                      ") => {",
                      bodySourceNodes,
                      "})"
                    ))
                  : this.createSourceNode(this.doSourceNode(bodySourceNodes)))
              : "undefined";
          };
        }
      ));
    }
  );
});
