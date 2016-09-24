{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite: ->
  parseTests
    "-> 321"             : "(function() {return 321;});"
    "foo -> 321"         : "foo((function() {return 321;}));"
    "(foo) -> 321"       : "(function(foo) {return 321;});"
    "(foo, bar) -> 321"  : "(function(foo, bar) {return 321;});"
    "->\n  321"          : "(function() {return 321;});"
    "->\n  321\n  456"   : "(function() {321;\nreturn 456;});"
    "->\n  321\n\n  456" : "(function() {321;\nreturn 456;});"
