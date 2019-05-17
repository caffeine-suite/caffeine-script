"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    return function() {
      this.rule({
        withOrDo: /(with|do)\b/,
        comprehensionValueClauseType: /(from|in|into|returning|inject|when|with|to|by|til|do|skip|short)(-[a-z]+)*\b/
      });
      this.rule(
        {
          comprehensionOutputType: /(object|array|reduce|each|find)\b/,
          comprehensionIterationType: /(from|in|to|til)(-[a-z]+)*\b/
        },
        { stnFactory: "SemanticTokenStn" }
      );
      this.rule({
        comprehensionValueClause: [
          "_? comprehensionValueClauseType _? value:keywordLabeledStatementsWithOneLessBlock",
          {
            stnFactory: "ComprehensionValueClauseStn",
            stnProps: function() {
              let type;
              return {
                type: (() => {
                  switch (
                    (type = this.comprehensionValueClauseType.toString())
                  ) {
                    case "in":
                      return "from";
                    case "in-array":
                      return "from-array";
                    case "in-object":
                      return "from-object";
                    default:
                      return type;
                  }
                })()
              };
            }
          }
        ],
        comprehensionValueClauses: "comprehensionValueClause+"
      });
      this.rule(
        {
          comprehensionVariableDef_:
            "!comprehensionIterationType argDef optionalArg* _ &comprehensionIterationType"
        },
        { stnFactory: "FunctionDefinitionArgsStn" }
      );
      this.rule({
        optionalArg: "_comma_optionalNewLine !withOrDo argDef",
        comprehensionIterationTypeClause_: "comprehensionIterationType _?",
        unlabeledFromClause: "keywordLabeledStatementsWithOneLessBlock",
        comprehensionBody: "block"
      });
      return this.rule(
        {
          comprehension:
            "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterable:unlabeledFromClause? valueClause:comprehensionValueClause* body:comprehensionBody?"
        },
        { stnFactory: "ComprehensionStn" }
      );
    };
  })();
});
