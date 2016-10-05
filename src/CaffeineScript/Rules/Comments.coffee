{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    lineCommentEnd: "/( *\n)*/ comment /( *\n)*(\n|$)/"
    lineComment:    "/( *\n)*/ comment"
    lineCommentOrBlankLine: ["lineComment", /( *\n)+(?=\n|$)/]

    comment: a
      pattern:      "/ *###[^#]((?!###)(.|\n))*###/ *"
      m pattern:    "/ *(\\# *)/ unparsedBlock"
      m pattern:    "/ *(\\#[^\n]*)/"
