{a, m, w, log, defineModule, formattedInspect, escapeJavascriptString} = require "art-foundation"

defineModule module, ->
  ->
    @rule
      comprehensionVariableDef_: '!comprehensionIterationType argDef optionalArg? _ &comprehensionIterationType'
    , stnFactory: "FunctionDefinitionArgsStn"

    @rule
      optionalArg: "_comma_? !with argDef"

      comprehensionIterationTypeClause_: 'comprehensionIterationType _'
      comprehensionIterable: "expressionWithOneLessBlock"

      comprehensionInto: '_? into _ expressionWithOneLessBlock'

      comprehensionWhen: '_? when _ expressionWithOneLessBlock'

      comprehensionWith: '_? withOrDo _ expression'

      comprehensionBody: w "block comprehensionWith"

    @rule
      comprehension: "
        outputType:comprehensionOutputType _
        variableDefinition:comprehensionVariableDef_?
        iterationType:comprehensionIterationTypeClause_?

        iterable:comprehensionIterable
        into:comprehensionInto?
        whenClause:comprehensionWhen?
        body:comprehensionBody?
        "
    , stnFactory: "ComprehensionStn"
