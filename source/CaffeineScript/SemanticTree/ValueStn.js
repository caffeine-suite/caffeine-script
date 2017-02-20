let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let BaseStn = require("./BaseStn");
  return ValueStn = Caf.defClass(class ValueStn extends BaseStn {}, function() {
    this.prototype.toJs = function() {
      return this.childrenToJs();
    };
    return this;
  });
});
