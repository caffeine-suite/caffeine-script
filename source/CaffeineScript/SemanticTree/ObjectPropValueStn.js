let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ObjectPropValueStn = Caf.defClass(
    class ObjectPropValueStn extends BaseStn {},
    function(ObjectPropValueStn, classSuper, instanceSuper) {
      this.getter({ isObject: true });
      this.prototype.toJs = function() {
        let prop, value;
        [prop, value] = this.children;
        return `${prop.toJs()}: ${value.toJsExpression()}`;
      };
    }
  );
});
