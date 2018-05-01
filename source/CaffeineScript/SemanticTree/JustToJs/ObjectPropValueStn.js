"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "peek",
      "Error",
      "javaScriptReservedWords",
      "identifierRegexp",
      "isString",
      "present"
    ],
    [global, require("../../StandardImport")],
    (
      peek,
      Error,
      javaScriptReservedWords,
      identifierRegexp,
      isString,
      present
    ) => {
      let ObjectPropValueStn;
      return (ObjectPropValueStn = Caf.defClass(
        class ObjectPropValueStn extends require("../BaseStn") {},
        function(ObjectPropValueStn, classSuper, instanceSuper) {
          this.getter({
            isObject: true,
            propNameChild: function() {
              return this.children[0];
            },
            valueChild: function() {
              return peek(this.children);
            },
            isThisProp: function() {
              let cafBase;
              return (
                Caf.exists((cafBase = this.children[0])) && cafBase.isThisProp
              );
            },
            propName: function() {
              let propNameStn, structuringStn, cafTemp;
              return (() => {
                switch (this.children.length) {
                  case 2:
                    [propNameStn] = this.children;
                    return (cafTemp =
                      Caf.exists(propNameStn) && propNameStn.simpleName) != null
                      ? cafTemp
                      : propNameStn;
                  case 1:
                    structuringStn = this.children[0];
                    return (() => {
                      switch (structuringStn.type) {
                        case "Accessor":
                          return structuringStn.key.toJs();
                        case "Require":
                          return structuringStn.rawRequireString;
                        case "This":
                          return structuringStn.children[0].toJs();
                        case "SimpleLiteral":
                        case "Reference":
                        case "Identifier":
                          return structuringStn.toJs();
                        default:
                          return (() => {
                            throw new Error(
                              `When structuring an object, only Accessors, &requires and identifiers are allowed. (${Caf.toString(
                                structuringStn.type
                              )} not allowed)`
                            );
                          })();
                      }
                    })();
                }
              })();
            },
            canUseES6Structuring: function() {
              let same, propName, valueChildString;
              return (
                ((same = this.propNameChild === this.valueChild) ||
                  (propName = this.propNameChild.simpleName)) &&
                (() => {
                  switch (this.valueChild.type) {
                    case "SimpleLiteral":
                    case "Reference":
                    case "Identifier":
                      return (
                        !javaScriptReservedWords[
                          (valueChildString = this.valueChild.toJs())
                        ] &&
                        identifierRegexp.test(valueChildString) &&
                        (same || valueChildString === propName)
                      );
                  }
                })()
              );
            }
          });
          this.prototype.toJs = function() {
            let valueChild, propName, base;
            ({ valueChild, propName } = this);
            base = this.valueChild.toJsExpression();
            if (!isString(propName)) {
              propName = propName.toJs();
            }
            return this.canUseES6Structuring
              ? base
              : `${Caf.toString(propName)}: ${Caf.toString(base)}`;
          };
          this.prototype.validate = function() {
            return !present(this.propName)
              ? (() => {
                  throw new Error("no prop name");
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            let valueChild, propName, base;
            ({ valueChild, propName } = this);
            base = valueChild.toSourceNode();
            if (!isString(propName)) {
              propName = propName.toSourceNode();
            }
            return this.canUseES6Structuring
              ? base
              : this.createSourceNode(propName, ": ", base);
          };
        }
      ));
    }
  );
});
