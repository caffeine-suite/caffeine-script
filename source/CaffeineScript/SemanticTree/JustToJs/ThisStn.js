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
                : Caf.exists((cafBase = peek(this.children))) &&
                    cafBase.identifier;
            },
            propName: function() {
              let cafTemp;
              return (cafTemp = this.identifier) != null ? cafTemp : "this";
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
