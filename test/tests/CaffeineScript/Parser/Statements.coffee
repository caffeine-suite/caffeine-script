{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  basic:
    "123": "123;"

    "123\n": "123;"
    "\n123": "123;"

    """
    # before
    123 # same line
    # after
    """: "123;"

    """
    123
    456
    """: "123; 456;"

    """
    123;;;
    456
    """: "123; 456;"

    """
    123
    [456]
    """: "123; [456];"

    """
    123;456
    """: "123; 456;"

  regressions:
    """
    a
    /1/
    """: "a; /1/;"

  dotLineStarts:
    regressions:
      """
      a
      .123
      """: "a; .123;"

      # """
      # foo (a)->
      #   .bar
      # """: null # ILLEGAL

  break:
    allowed:
      """
      while 1
        break
      """: "while (1) {break;};"

      """
      a = while 1
        break
      """: "let a, temp; a = (() => {while (1) {break;}; return temp;})();"

      """
      a = while 1
        break 2
        3
      """: "let a, temp; a = (() => {while (1) {return 2; temp = 3;}; return temp;})();"

    notAllowed:
      """
      ->
        break
      """: null

      """
      if true
        break
      """: null

      """
      switch foo
      when 1 then break
      """: null

      """
      array a in foo
        break
      """: null

      """
      class Foo
        break
      """: null

    nesting:
      """
      while 1
        array a in foo
          break
      """: null

      """
      array a in foo
        while 1
          break
      """: "Caf.array(foo, (a) => {let temp; (() => {while (1) {break;}; return temp;})()});"

    regressions:

      """
      breakOut = isFun
      """: "let breakOut; breakOut = isFun;"

  return:
    allowed:
      """
      ->
        return
      """: "(function() {return;});"

      """
      ->
        return 1
      """: "(function() {return 1;});"

      """
      ->
        return 1
        return 2
      """: "(function() {return 1; return 2;});"

      """
      ->
        while 1
          return 2
      """: "(function() {let temp; return (() => {while (1) {return 2;}; return temp;})();});"

      """
      -> return 2 if true
      """: return2IfTrue = "(function() {return true ? return 2 : undefined;});"

      """
      ->
        if true
          return 2
      """: return2IfTrue

      """
      ->
        switch foo
        when 1 then return 2
      """: "(function() {return (() => {switch (foo) {case 1: return 2;};})();});"

    notAllowed:
      """
        while 1
          return 2
      """: null

      """
      ->
        array a in foo
          return 2
      """: null

      """
      class Foo
        return 2
      """: null

    nesting:
      illegal: ->
        """
        ->
          while 1
            array a in foo
              return
        """: null

        """
        ->
          array a in foo
            return
        """: null

        """
        ->
          array a in foo
            while 1
              return
        """: null

      legal: ->
        """
          array a in foo
            ->
              return
        """: "ok"

        """
        ->
          array a in-array foo
            return
        """: "ok"

        """
        ->
          array a in-array foo
            while 1
              return
        """: "ok"

        """
        ->
          while 1
            array a in-array foo
              return
        """: "ok"

    regressions:
      """
      returnThis = ok?
      """: "let returnThis; returnThis = ok != null;"
