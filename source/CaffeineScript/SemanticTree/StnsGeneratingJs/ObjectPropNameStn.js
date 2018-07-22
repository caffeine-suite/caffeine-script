"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "peek", "escapePropName"],
    [global, require("../../StandardImport")],
    (identifierRegexp, peek, escapePropName) => {
      let ObjectPropNameStn;
      return (ObjectPropNameStn = Caf.defClass(
        class ObjectPropNameStn extends require("../BaseStn") {},
        function(ObjectPropNameStn, classSuper, instanceSuper) {
          this.getter({
            canBeUsedInES6Structuring: function() {
              let name;
              return (name = this.simpleName)
                ? identifierRegexp.test(name)
                : undefined;
            },
            isThisProp: function() {
              return this.props.isThisProp;
            },
            simpleName: function() {
              let nameStn;
              nameStn = peek(this.children);
              return nameStn
                ? nameStn.propName
                : escapePropName(this.props.value);
            },
            propName: function() {
              return this.simpleName;
            }
          });
          this.prototype.toSourceNode = function() {
            let nameStn;
            [nameStn] = this.children;
            return (Caf.exists(nameStn) && nameStn.children.length) > 0
              ? this.createSourceNode("[", nameStn.toSourceNode(), "]")
              : this.createSourceNode(this.simpleName);
          };
        }
      ));
    }
  );
});
