{a, m, w, log, defineModule, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

defineModule module, ->
  ->
    @rule
      comprehension: 'forComprehension'

    @rule
      comprehensionVariableDef_: '!comprehensionIterationType identifier _'
      comprehensionIterationTypeClause_: 'comprehensionIterationType _'
      comprehensionWith: '_? with _ expression'
      comprehensionIterable: "expressionWithOneLessBlock"
      comprehensionBody: w "block comprehensionWith"

      comprehensionWhen: '_? when _ expressionWithOneLessBlock'

    @rule
      forComprehension: "
        outputType:comprehensionOutputType _
        variableDefinition:comprehensionVariableDef_?
        iterationType:comprehensionIterationTypeClause_?

        iterable:comprehensionIterable
        whenClause:comprehensionWhen?
        body:comprehensionBody?
        "
    , stnFactory: "ComprehensionStn"
