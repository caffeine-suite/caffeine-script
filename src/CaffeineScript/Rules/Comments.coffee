{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    lineCommentEnd: "spaceAndNewLinesWithEnd comment justEnd"
    lineComment:    "spaceAndNewLinesWithEnd comment"

    comment: a
      pattern:      "/ *###[^#]((?!###)(.|\n))*###/ *"
      m pattern:    "/ *(\\# *)/ unparsedBlock"
      m pattern:    "/ *(\\#[^\n]*)/"

    commentWithoutEnd: "comment optionalSpace"
    commentsOrSpaceWithoutEnd: "optionalSpace commentWithoutEnd*"
    blankOrCommentLinesWithEnd: "lineCommentEnd* spaceAndNewLinesWithEnd?"

    optionalSpace:  / */
    _:              / +/
    spaceAndNewLinesWithEnd:   /( *(\n|;|$))*/
    end:   "commentsOrSpaceWithoutEnd justEnd blankOrCommentLinesWithEnd"
    justEnd: /\n|;|$/
    commentOrSpace: w "comment _"

  ,
    getPresent: -> false
