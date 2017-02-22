let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ThrowStn = Caf.defClass(class ThrowStn extends BaseStn {}, function() {
    this.prototype.toJs = function() {
      return `throw ${this.childrenToJs()}`;
    };
    this.prototype.toJsExpression = function() {
      return `(()=>{${this.toJs()};})()`;
    };
    this.prototype.toJsParenExpression = function() {
      return this.toJsExpression();
    };
    return this;
  });
});
