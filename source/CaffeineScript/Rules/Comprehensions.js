let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation");
  return function() {
    this.rule(
      {
        comprehensionVariableDef_: "!comprehensionIterationType argDef optionalArg? _ &comprehensionIterationType"
      },
      { stnFactory: "FunctionDefinitionArgsStn" }
    );
    this.rule({
      optionalArg: "_comma_? !with argDef",
      comprehensionIterationTypeClause_: "comprehensionIterationType _",
      comprehensionIterable: "expressionWithOneLessBlock",
      comprehensionInto: "_? into _ expressionWithOneLessBlock",
      comprehensionWhen: "_? when _ expressionWithOneLessBlock",
      comprehensionWith: "_? withOrDo _ expression",
      comprehensionBody: ["block", "comprehensionWith"]
    });
    return this.rule(
      {
        comprehension: "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterationType:comprehensionIterationTypeClause_? iterable:comprehensionIterable into:comprehensionInto? whenClause:comprehensionWhen? body:comprehensionBody?"
      },
      { stnFactory: "ComprehensionStn" }
    );
  };
});
