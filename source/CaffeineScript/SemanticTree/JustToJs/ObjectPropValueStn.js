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
                Caf.exists((cafBase = this.propNameChild)) && cafBase.isThisProp
              );
            },
            propName: function() {
              let propNameChild, cafTemp, cafTemp1;
              ({ propNameChild } = this);
              return (() => {
                switch (this.children.length) {
                  case 2:
                    return (cafTemp = propNameChild.propName) != null
                      ? cafTemp
                      : propNameChild;
                  case 1:
                    return (cafTemp1 = propNameChild.propName) != null
                      ? cafTemp1
                      : (() => {
                          throw new Error(
                            `${Caf.toString(
                              propNameChild.type
                            )} not allowed when structuring an object. Legal examples: foo.accessors, &requires and identifiers.`
                          );
                        })();
                }
              })();
            },
            canBeUsedInES6Structuring: function() {
              let propName;
              return (
                (propName = this.propNameChild.propName) &&
                !javaScriptReservedWords[propName] &&
                identifierRegexp.test(propName) &&
                this.valueChild.canBeUsedInES6Structuring &&
                this.valueChild.propName === propName
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
            return this.canBeUsedInES6Structuring
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
            return this.canBeUsedInES6Structuring
              ? base
              : this.createSourceNode(propName, ": ", base);
          };
        }
      ));
    }
  );
});
