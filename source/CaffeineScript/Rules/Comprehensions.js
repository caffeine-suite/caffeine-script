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
        comprehension: "\n  outputType:comprehensionOutputType _\n  variableDefinition:comprehensionVariableDef_?\n  iterationType:comprehensionIterationTypeClause_?\n\n  iterable:comprehensionIterable\n  into:comprehensionInto?\n  whenClause:comprehensionWhen?\n  body:comprehensionBody?\n  "
      },
      { stnFactory: "ComprehensionStn" }
    );
  };
});
