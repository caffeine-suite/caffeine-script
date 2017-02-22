let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Error = global.Error, BaseStn = require("./BaseStn");
  return LetStn = Caf.defClass(class LetStn extends BaseStn {}, function() {
    this.prototype.toJs = function() {
      let identifiers, identifier;
      ({ identifiers, identifier } = this.props);
      return identifiers
        ? (!(identifiers.length > 0)
            ? (() => {
                throw new Error("LetStn identifiers empty");
              })()
            : null, `let ${identifiers.join(", ")}`)
        : identifier
            ? `let ${identifier}`
            : (() => {
                throw new Error("LetStn needs props!");
              })();
    };
    return this;
  });
});
