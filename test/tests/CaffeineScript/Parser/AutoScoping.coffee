{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite:
  lets: parseTestSuite
    basic:
      "a = 1": "let a; a = 1;"
      "a = b = 1": "let a, b; a = b = 1;"

      "-> b":     "(function() {return b;});"
      "-> b = 2": "(function() {let b; return b = 2;});"

      """
      a = 1
      ->
        b = 2
      """:
        "let a;
        a = 1;
        (function() {let b; return b = 2;});"

    maskedByParentScope:
      """
      a = 1
      ->
        a = 2
      """:
        "let a;
        a = 1;
        (function()
          {return a = 2;});"

      """
      b = 1
      ->
        a = 1
        ~>
          a = 2
      """:
        "let b;
        b = 1;
        (function()
          {let a;
          a = 1;
          return function()
            {return a = 2;};});"

    arguments:
      """
      a = 1
      (b) ->
        b = 2
      """:
        "let a;
        a = 1;
        (function(b) {return b = 2;});"
