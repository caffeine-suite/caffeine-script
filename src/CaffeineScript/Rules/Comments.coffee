{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    lineComment: "/ *\n/* comment /( *\n)*(\n|$)/"

    comment: a
      pattern:      "/ *###[^#]((?!###)(.|\n))*###/ *"
      m pattern:    "/ *(\\# *)/ unparsedBlock"
      m pattern:    "/ *(\\#[^\n]*)/"
