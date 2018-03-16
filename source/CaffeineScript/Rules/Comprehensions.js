"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      this.rule({
        withOrDo: /(with|do)\b/,
        comprehensionValueClauseType: /(into|returning|when)\b/
      });
      this.rule(
        {
          comprehensionOutputType: /(object|array|reduce|each|find)\b/,
          comprehensionIterationType: /(from|in)\b/
        },
        { stnFactory: "SemanticTokenStn" }
      );
      this.rule({
        comprehensionValueClause: [
          "_? comprehensionValueClauseType _? value:keywordLabeledStatementsWithOneLessBlock",
          {
            stnFactory: "ComprehensionValueClauseStn",
            stnProps: function() {
              return { type: this.comprehensionValueClauseType.toString() };
            }
          }
        ],
        comprehensionValueClauses: "comprehensionValueClause+"
      });
      this.rule(
        {
          comprehensionVariableDef_:
            "!comprehensionIterationType argDef optionalArg? _ &comprehensionIterationType"
        },
        { stnFactory: "FunctionDefinitionArgsStn" }
      );
      this.rule({
        optionalArg: "_comma_ !withOrDo argDef",
        comprehensionIterationTypeClause_: "comprehensionIterationType _?",
        comprehensionIterable: "keywordLabeledStatementsWithOneLessBlock",
        comprehensionWith: "_? withOrDo _? lineOfStatementsOrBlock",
        comprehensionBody: ["block", "comprehensionWith"]
      });
      return this.rule(
        {
          comprehension:
            "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterationType:comprehensionIterationTypeClause_? iterable:comprehensionIterable valueClause:comprehensionValueClause* body:comprehensionBody?"
        },
        { stnFactory: "ComprehensionStn" }
      );
    };
  })();
});
