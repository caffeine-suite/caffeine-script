let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    ScopeStnMixin = require("./ScopeStnMixin"),
    BaseStn = require("./BaseStn"),
    peek,
    Object;
  ({ peek, Object } = Caf.i(["peek", "Object"], [ArtFoundation, global]));
  return ImportStn = Caf.defClass(
    class ImportStn extends ScopeStnMixin(BaseStn) {},
    function() {
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
          base;
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
          into.push(`"${i}"`);
        });
        importingJs = `[${list.join(", ")}]`;
        imports = (Caf.exists(base = this.importing) && base.length) > 0
          ? `({${this.importing.join(
              ", "
            )}} = Caf.i(${importingJs}, ${this._importFromCaptureIdentifier
              ? `${this._importFromCaptureIdentifier} = `
              : ""}[${importsJs.join(", ")}, ${importFromCaptureIdentifier}]));`
          : "";
        return `${imports}${bodyJs}`;
      };
      this.prototype.toJsExpression = function() {
        return this.toJs({ returnExpression: true });
      };
      return this;
    }
  );
});
