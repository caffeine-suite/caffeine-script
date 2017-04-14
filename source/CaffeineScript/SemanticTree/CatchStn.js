"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    CatchStn,
    BaseStn = require("./BaseStn"),
    compactFlatten;
  ({ compactFlatten } = Caf.import(["compactFlatten"], [
    StandardImport,
    global
  ]));
  return CatchStn = Caf.defClass(class CatchStn extends BaseStn {}, function(
    CatchStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.updateScope = function(scope) {
      let errorIdentifier, body;
      this.scope = scope;
      ({ errorIdentifier, body } = this.labeledChildren);
      if (errorIdentifier || body) {
        this.uniqueIdentifierHandle = this.scope.getUniqueIdentifierHandle(
          "error"
        );
      }
      if (errorIdentifier) {
        this.scope.addIdentifierAssigned(errorIdentifier.name);
        this.scope.addIdentifierUsed(errorIdentifier.name);
      }
      return instanceSuper.updateScope.apply(this, arguments);
    };
    this.prototype.toJs = function(options = {}) {
      let returnExpression,
        errorIdentifier,
        body,
        errorIdentifierString,
        cafBase;
      ({ returnExpression } = options);
      ({ errorIdentifier, body } = this.labeledChildren);
      body = body && (returnExpression ? body.toFunctionBodyJs() : body.toJs());
      errorIdentifierString = Caf.exists(
        cafBase = this.uniqueIdentifierHandle
      ) &&
        cafBase.identifier ||
        "cafError";
      if (errorIdentifier) {
        body = compactFlatten([
          `${Caf.toString(errorIdentifier.name)} = ${Caf.toString(
            errorIdentifierString
          )}`,
          body
        ]).join("; ");
      }
      body = body ? body + ";" : "";
      return `catch (${Caf.toString(errorIdentifierString)}) {${Caf.toString(
        body
      )}}`;
    };
  });
});
