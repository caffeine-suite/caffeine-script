"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ObjectPropValueStn, peek;
  ({ peek } = Caf.import(["peek"], [require("../StandardImport"), global]));
  return ObjectPropValueStn = Caf.defClass(
    class ObjectPropValueStn extends require("./BaseStn") {},
    function(ObjectPropValueStn, classSuper, instanceSuper) {
      this.getter({ isObject: true });
      this.prototype.toJs = function() {
        let propertyName, valueJs;
        ({ propertyName } = this.props);
        propertyName = propertyName
          ? require("./ObjectPropNameStn").escapePropName(propertyName)
          : this.children[0].toJs();
        return propertyName === (valueJs = peek(this.children).toJsExpression())
          ? valueJs
          : `${Caf.toString(propertyName)}: ${Caf.toString(valueJs)}`;
      };
    }
  );
});
