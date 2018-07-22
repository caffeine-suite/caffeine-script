"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let CatchStn;
    return (CatchStn = Caf.defClass(
      class CatchStn extends require("../BaseStn") {},
      function(CatchStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          let errorIdentifier, body;
          this.scope = scope;
          ({ errorIdentifier, body } = this.labeledChildren);
          this.uniqueIdentifierHandle = this.scope.getUniqueIdentifierHandle(
            "error",
            false
          );
          if (errorIdentifier) {
            this.scope.addIdentifierAssigned(errorIdentifier.name);
            this.scope.addIdentifierUsed(errorIdentifier.name);
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.prototype.toSourceNode = function(options = {}) {
          let expression, errorIdentifier, body, errorIdentifierString;
          ({ expression } = options);
          ({ errorIdentifier, body } = this.labeledChildren);
          body =
            Caf.exists(body) &&
            body.toSourceNode({ returnAction: !!expression });
          errorIdentifierString = this.uniqueIdentifierHandle.identifier;
          if (errorIdentifier) {
            body = [
              `${Caf.toString(errorIdentifier.name)} = ${Caf.toString(
                errorIdentifierString
              )};`,
              body ? " " : undefined,
              body
            ];
          }
          return this.createSourceNode(
            "catch (",
            errorIdentifierString,
            ") {",
            body,
            "}"
          );
        };
      }
    ));
  })();
});
