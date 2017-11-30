"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let identifierRegexp,
    ObjectPropValueStn,
    peek,
    Error,
    javaScriptReservedWords;
  ({ peek, Error, javaScriptReservedWords } = Caf.import(
    ["peek", "Error", "javaScriptReservedWords"],
    [global, require("../../StandardImport")]
  ));
  identifierRegexp = /^(?!\d)((?!\s)[$\w\u007f-\uffff])+$/;
  return (ObjectPropValueStn = Caf.defClass(
    class ObjectPropValueStn extends require("../BaseStn") {},
    function(ObjectPropValueStn, classSuper, instanceSuper) {
      this.getter({
        isObject: true,
        propName: function() {
          return this.labeledChildren.propName.props.value;
        }
      });
      this.prototype.toJs = function() {
        let propNameStn, valueStn, valueJs, propertyName, structuringStn;
        switch (this.children.length) {
          case 2:
            [propNameStn, valueStn] = this.children;
            valueJs = valueStn.toJsExpression();
            propertyName = propNameStn.toJs();
            break;
          case 1:
            structuringStn = this.children[0];
            valueJs = structuringStn.toJsExpression();
            propertyName = peek(valueJs.split("."));
            if (!identifierRegexp.test(propertyName)) {
              throw new Error(
                `expression not allowed in explicit object literal: ${Caf.toString(
                  valueJs
                )}`
              );
            }
            break;
          default:
            throw new Error("internal error - expecint 1 or 2 children");
        }
        return propertyName === valueJs &&
          !javaScriptReservedWords[propertyName] &&
          identifierRegexp.test(propertyName)
          ? valueJs
          : `${Caf.toString(propertyName)}: ${Caf.toString(valueJs)}`;
      };
    }
  ));
});
