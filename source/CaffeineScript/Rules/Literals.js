let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport");
  return function() {
    this.rule({
      literal: [
        "nullLiteral",
        "boolLiteral",
        "numberLiteral",
        "stringLiteral",
        "regExpLiteral",
        "bracketedObject",
        "brackedArray"
      ]
    });
    return this.rule(
      {
        boolLiteral: ["true", "false"],
        nullLiteral: "/null/",
        numberLiteral: /-?[0-9]+/,
        true: "/(true|yes|on)(?![a-zA-Z0-9]+)/",
        false: "/(false|no|off)(?![a-zA-Z0-9]+)/"
      },
      {
        stnFactory: "SimpleLiteralStn",
        stnProps: function() {
          let v;
          return {
            value: (() => {
              switch (v = this.toString()) {
                case "true":
                case "yes":
                case "on":
                  return "true";
                case "false":
                case "no":
                case "off":
                  return "false";
                default:
                  return v;
              }
            })()
          };
        }
      }
    );
  };
});
