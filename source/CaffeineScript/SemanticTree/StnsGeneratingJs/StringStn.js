"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["deescapeSpaces", "escapeUnescaped", "escapeMustEscapes"],
    [global, require("../../StandardImport"), require("../../Lib")],
    (deescapeSpaces, escapeUnescaped, escapeMustEscapes) => {
      let StringStn;
      return (StringStn = Caf.defClass(
        class StringStn extends require("../BaseStn") {},
        function(StringStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            return this.createSourceNode(this.getJsLiteral(options));
          };
          this.getter({
            propName: function() {
              return this.jsLiteral;
            },
            jsLiteral: function(options) {
              let base, quotes, singleCount, doubleCount, out;
              base = deescapeSpaces(this.value);
              quotes = /"/.test(base)
                ? "'"
                : /'/.test(base)
                ? ((singleCount = base.split("'").length - 1),
                  (doubleCount = base.split('"').length - 1),
                  doubleCount <= singleCount ? '"' : "'")
                : '"';
              out =
                quotes +
                escapeUnescaped(base.replace(/\n/g, "\\n"), quotes) +
                quotes;
              return Caf.exists(options) && options.dotBase
                ? `(${Caf.toString(out)})`
                : out;
            }
          });
          this.prototype.compactNewLines = function(compactLeft, compactRight) {
            if (compactLeft) {
              this.props.value = this.value.replace(/^\ *\n */, "");
            }
            if (compactRight) {
              this.props.value = this.value.replace(/\ *\n *$/, "");
            }
            this.props.value = this.value.replace(/(\ *\n *)+/g, " ");
            return this;
          };
          this.prototype.trimLeft = function() {
            return (this.props.value = this.value.trimLeft());
          };
          this.prototype.trimRight = function() {
            return (this.props.value = this.value.trimRight());
          };
          this.getter({
            value: function() {
              return this.props.value;
            }
          });
          this.prototype.toInterpolatedBodySourceNode = function() {
            return deescapeSpaces(
              escapeUnescaped(escapeMustEscapes(this.value), "`$\n")
            );
          };
        }
      ));
    }
  );
});
