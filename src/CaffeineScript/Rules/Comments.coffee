{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    _:              '/ +/ comment*'
    end:            "lineCommentEnd+"

    comment: a
      pattern:      "/ *###[^#]((?!###)(.|\n))*###/ *"
      m pattern:    "/ *(\\# *)/ unparsedBlock"
      m pattern:    "/ *(\\#[^\n]*)/"

    spaceOrEnds:  /( *(\n|;|$))+/

    lineCommentEnd: [
      "spaceOrEnds? comment+ spaceOrEnds"
      "spaceOrEnds"
    ]

  ,
    getPresent: -> false
