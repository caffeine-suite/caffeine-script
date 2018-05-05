"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "escapeJavascriptString", "peek"],
    [global, require("../../StandardImport")],
    (identifierRegexp, escapeJavascriptString, peek) => {
      let ThisStn;
      return (ThisStn = Caf.defClass(
        class ThisStn extends require("../BaseStn") {},
        function(ThisStn, classSuper, instanceSuper) {
          this.prototype.needsParens = false;
          this.getter({
            identifier: function() {
              let id, cafBase;
              return (id = this.props.identifier)
                ? identifierRegexp.test(id)
                  ? id
                  : escapeJavascriptString(id)
                : Caf.exists((cafBase = peek(this.children))) && cafBase.toJs();
            },
            propName: function() {
              let cafTemp;
              return (cafTemp = this.identifier) != null ? cafTemp : "this";
            },
            isIdentifier: function() {
              return identifierRegexp.test(this.identifier);
            }
          });
          this.prototype.toJs = function() {
            let id;
            return (id = this.identifier)
              ? identifierRegexp.test(id)
                ? `this.${Caf.toString(id)}`
                : `this[${Caf.toString(id)}]`
              : "this";
          };
          this.prototype.toSourceNode = function() {
            let id;
            return (id = this.identifier)
              ? identifierRegexp.test(id)
                ? this.createSourceNode("this.", id)
                : this.createSourceNode("this[", id, "]")
              : this.createSourceNode("this");
          };
        }
      ));
    }
  );
});
