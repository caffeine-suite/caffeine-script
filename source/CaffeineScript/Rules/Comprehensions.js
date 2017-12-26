"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function() {
    this.rule({ into: /(into|returning)\b/, withOrDo: /(with|do)\b/ });
    this.rule(
      {
        comprehensionOutputType: /(object|array|reduce|each|find)\b/,
        comprehensionIterationType: /(from|in)\b/
      },
      { stnFactory: "SemanticTokenStn" }
    );
    this.rule({
      comprehensionValueClause: "_? /(into|returning|when)\b/",
      comprehensionValueClauses: "comprehensionValueClause+",
      expressionWithOneLessBlockOrBlock: [
        "expressionWithOneLessBlock",
        "requiredValue"
      ]
    });
    this.rule(
      {
        comprehensionVariableDef_:
          "!comprehensionIterationType argDef optionalArg? _ &comprehensionIterationType"
      },
      { stnFactory: "FunctionDefinitionArgsStn" }
    );
    this.rule({
      optionalArg: "_comma_? !with argDef",
      comprehensionIterationTypeClause_: "comprehensionIterationType _?",
      comprehensionIterable: "expressionWithOneLessBlockOrBlock",
      comprehensionInto:
        "_? valueClauseType:into _? expressionWithOneLessBlockOrBlock",
      comprehensionWhen:
        "_? valueClauseType:when _? expressionWithOneLessBlockOrBlock",
      comprehensionWith: "_? withOrDo _ lineOfStatementsOrBlock",
      comprehensionBody: ["block", "comprehensionWith"]
    });
    return this.rule(
      {
        comprehension:
          "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterationType:comprehensionIterationTypeClause_? iterable:comprehensionIterable into:comprehensionInto? whenClause:comprehensionWhen? body:comprehensionBody?"
      },
      { stnFactory: "ComprehensionStn" }
    );
  };
});
