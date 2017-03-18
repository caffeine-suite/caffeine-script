let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport");
  return {
    classDefinition: {
      pattern: "/class/ _ className:identifier classExtends:_extendsClause? body:actualBlockEmptyOk?",
      stnFactory: "ClassStn"
    },
    _extendsClause: {
      pattern: "_ /extends/ _ expressionWithOneLessBlock",
      toJs: function() {
        return this.expressionWithOneLessBlock.toJs();
      }
    }
  };
});
