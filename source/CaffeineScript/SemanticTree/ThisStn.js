let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return ThisStn = Caf.defClass(class ThisStn extends BaseStn {}, function(
    ThisStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.needsParens = false;
    this.prototype.toJs = function() {
      return this.children[0] ? `this.${this.children[0].toJs()}` : "this";
    };
  });
});
