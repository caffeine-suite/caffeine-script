let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BaseStn = require("./BaseStn"),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [ArtFoundation, global]));
  return CatchStn = Caf.defClass(class CatchStn extends BaseStn {}, function() {
    this.prototype.updateScope = function(scope) {
      let id;
      this.scope = scope;
      if (id = this.labeledChildren.identifier) {
        this.uniqueIdentifierHandle = this.scope.getUniqueIdentifierHandle(
          "error"
        );
        this.scope.addIdentifierAssigned(id.name);
        this.scope.addIdentifierUsed(id.name);
      }
      return Caf.getSuper(this).updateScope.apply(this, arguments);
    };
    this.prototype.toJs = function(options = {}) {
      let returnExpression, identifier, body, tempName;
      ({ returnExpression } = options);
      ({ identifier, body } = this.labeledChildren);
      body = body && (returnExpression ? body.toFunctionBodyJs() : body.toJs());
      return identifier
        ? (tempName = this.uniqueIdentifierHandle.identifier, body = compactFlatten(
            [`${identifier.name} = ${tempName}`, body]
          ).join("; "), `catch (${tempName}) {${body};}`)
        : undefined;
    };
    return this;
  });
});
