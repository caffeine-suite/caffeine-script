"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "peek",
      "Error",
      "javaScriptReservedWords",
      "identifierRegexp",
      "present",
      "isString"
    ],
    [global, require("../../StandardImport")],
    (
      peek,
      Error,
      javaScriptReservedWords,
      identifierRegexp,
      present,
      isString
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
              let base;
              return Caf.exists((base = this.propNameChild)) && base.isThisProp;
            },
            propName: function() {
              let propNameChild, temp, base, temp1, temp2;
              ({ propNameChild } = this);
              return (temp = (base = this.props).propName) != null
                ? temp
                : (base.propName = (() => {
                    switch (this.children.length) {
                      case 2:
                        return (temp1 = propNameChild.propName) != null
                          ? temp1
                          : propNameChild;
                      case 1:
                        return (temp2 = propNameChild.propName) != null
                          ? temp2
                          : (() => {
                              throw new Error(
                                `${Caf.toString(
                                  propNameChild.type
                                )} not allowed when structuring an object. Legal examples: foo.accessors, &requires and identifiers.`
                              );
                            })();
                    }
                  })());
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
          this.prototype.validate = function() {
            return !present(this.propName)
              ? (() => {
                  throw new Error("no prop name");
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            let valueChild, propName, base, temp;
            temp = this;
            valueChild = temp.valueChild;
            propName = temp.propName;
            base = valueChild.toSourceNode({ expression: true });
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
