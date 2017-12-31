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
            }
          });
          this.prototype.toJs = function(options = {}) {
            let importFromCaptureIdentifier,
              p,
              importBody,
              importFromList,
              identifiersToImport,
              bodyJs,
              importsJs;
            importFromCaptureIdentifier = null;
            if ((p = this.findParent(/^Import$/))) {
              ({ importFromCaptureIdentifier } = p);
              true;
            }
            ({ importBody } = this.labeledChildren);
            importFromList = arrayWithoutLast(this.children);
            identifiersToImport = Object.keys(importBody.generateImportMap());
            bodyJs = compactFlatten([
              importBody.getAutoLets(),
              importBody.toFunctionBodyJs(true)
            ]).join("; ");
            return identifiersToImport.length > 0
              ? ((importsJs = compactFlatten([
                  importFromCaptureIdentifier || "global",
                  Caf.each(importFromList, [], (c, cafK, cafInto) => {
                    cafInto.push(c.toJsExpression());
                  })
                ])),
                `Caf.importInvoke(["${Caf.toString(
                  identifiersToImport.join('", "')
                )}"], ${Caf.toString(
                  this._importFromCaptureIdentifier
                    ? `${Caf.toString(this._importFromCaptureIdentifier)} = `
                    : ""
                )}[${Caf.toString(importsJs.join(", "))}], (${Caf.toString(
                  identifiersToImport.join(", ")
                )}) => {${Caf.toString(bodyJs)};})`)
              : `(() => {${Caf.toString(bodyJs)};})()`;
          };
        }
      ));
    }
  );
});
