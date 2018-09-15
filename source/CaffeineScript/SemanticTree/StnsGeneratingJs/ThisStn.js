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
          this.getter({
            identifier: function() {
              let id, base;
              return (id = this.props.identifier)
                ? identifierRegexp.test(id)
                  ? id
                  : escapeJavascriptString(id)
                : Caf.exists((base = peek(this.children))) && base.identifier;
            },
            propName: function() {
              let temp;
              return (temp = this.identifier) != null ? temp : "this";
            }
          });
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
