{a, m, w, log, defineModule, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

defineModule module, ->
  ->
    @rule
      comprehension: 'forComprehension'

    @rule
      comprehensionVariableDef_: '!comprehensionIterationType identifier _'
      comprehensionIterationTypeClause_: 'comprehensionIterationType _'
      compressionWithBody: '_? with _ expression'
      comprehensionIterableAndBody: [
        "iterable:expressionWithOneLessBlock body:block"
        "iterable:expression compressionWithBody?"
      ]

    @rule
      forComprehension: "
        outputType:comprehensionOutputType _
        variableDefinition:comprehensionVariableDef_?
        iterationType:comprehensionIterationTypeClause_?

        comprehensionIterableAndBody
        "
    , stnFactory: "ComprehensionStn"
