let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return TryStn = Caf.defClass(class TryStn extends BaseStn {}, function() {
    this.prototype.toJs = function(options = {}) {
      let returnExpression, body, optionalCatch;
      ({ returnExpression } = options);
      ({ body, optionalCatch } = this.labeledChildren);
      body = returnExpression ? body.toFunctionBodyJs() : body.toJs();
      optionalCatch = optionalCatch != null && optionalCatch.toJs(options) ||
        "catch (error) {}";
      return `try {${body};} ${optionalCatch}`;
    };
    this.prototype.toJsExpression = function() {
      return this.doJs(null, this.toJs({ returnExpression: true }));
    };
    return this;
  });
});
