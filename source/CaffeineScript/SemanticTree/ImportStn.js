let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    ScopeStnMixin = require("./ScopeStnMixin"),
    BaseStn = require("./BaseStn"),
    peek,
    Object;
  ({ peek, Object } = Caf.i(["peek", "Object"], [StandardImport, global]));
  return ImportStn = Caf.defClass(
    class ImportStn extends ScopeStnMixin(BaseStn) {},
    function(ImportStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.bindAllUniqueIdentifiersRequested();
        this.statementsChild = peek(this.children);
        this.importChildren = this.children.slice(0, this.children.length - 1);
        Caf.e(this.importChildren, undefined, (child, k, into) => {
          child.updateScope(this.scope);
        });
        this.scope.addChildScope(this);
        this._scopeUpdated = true;
        this.statementsChild.updateScope(this);
        this.importing = Object.keys(this.identifiersUsedButNotAssigned);
        return Caf.e(this.identifiersUsedButNotAssigned, undefined, (
          v,
          id,
          into
        ) => {
          this.scope.addIdentifierAssigned(id);
        });
      };
      this.prototype.addIdentifierAssigned = function(id, init) {
        return this.scope.addIdentifierAssigned(id, init);
      };
      this.prototype.jsExpressionUsesReturn = true;
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
          return this._importFromCaptureIdentifier ||
            (this._importFromCaptureIdentifier = this.nonImportScope.bindUniqueIdentifier(
              "parentImports"
            ));
        }
      });
      this.prototype.toJs = function(options = {}) {
        let generateReturnStatement,
          importFromCaptureIdentifier,
          p,
          bodyJs,
          importsJs,
          list,
          importingJs,
          imports,
          cafBase;
        ({ generateReturnStatement } = options);
        importFromCaptureIdentifier = null;
        if (p = this.findParent("Import")) {
          ({ importFromCaptureIdentifier } = p);
          true;
        }
        importFromCaptureIdentifier || (importFromCaptureIdentifier = "global");
        bodyJs = this.statementsChild.toFunctionBodyJs(
          !!generateReturnStatement
        );
        importsJs = Caf.e(this.importChildren, [], (c, k, into) => {
          into.push(c.toJsExpression());
        });
        list = Caf.e(this.importing, [], (i, k, into) => {
          into.push(`"${Caf.toString(i)}"`);
        });
        importingJs = `[${Caf.toString(list.join(", "))}]`;
        imports = (Caf.exists(cafBase = this.importing) && cafBase.length) > 0
          ? `({${Caf.toString(
              this.importing.join(", ")
            )}} = Caf.i(${Caf.toString(importingJs)}, ${Caf.toString(
              this._importFromCaptureIdentifier
                ? `${Caf.toString(this._importFromCaptureIdentifier)} = `
                : ""
            )}[${Caf.toString(importsJs.join(", "))}, ${Caf.toString(
              importFromCaptureIdentifier
            )}]));`
          : "";
        return `${Caf.toString(imports)}${Caf.toString(bodyJs)}`;
      };
      this.prototype.toJsExpression = function() {
        return this.toJs({ returnExpression: true });
      };
    }
  );
});
