{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  if:
    basic:
      "if foo\n  bar": "if (foo) {bar;};"
      "if foo then bar": "if (foo) {bar;};"

      """
      if foo
        bar
        baz
      """: "if (foo) {bar; baz;};"

      """
      if foo then
        bar
        baz
      """: "if (foo) {bar; baz;};"

      """
      if foo
      then
        bar
        baz
      """: "if (foo) {bar; baz;};"

      """
      if foo
      then bar
      """: "if (foo) {bar;};"

      """
      if foo
        bar
      else
        baz
      """: "if (foo) {bar;} else {baz;};"

      """
      if foo
        bar
      else
        baz
        boom
      """: "if (foo) {bar;} else {baz; boom;};"

    thenStatements:
      "if foo then a;b": "if (foo) {a; b;};"

      "c = if foo then a;b": multiStatementThenReturnsCorrectly = "let c; c = foo ? (a, b) : undefined;"

      """
      c = if foo
        a
        b
      """: multiStatementThenReturnsCorrectly

    chain:
      """
      if a
        b
      else if c
        d
      else
        e
      """: "if (a) {b;} else {if (c) {d;} else {e;};};"

      """
      foo = if a
        b
      else if c
        d
      else
        e
      """: "let foo; foo = a ? b : c ? d : e;"

      """
      foo = if a
        if b
          c
        else
          d
      else
        e
      """: "let foo; foo = a ? b ? c : d : e;"

    expressions:
      """
      bar = if foo
        1
      """: "let bar; bar = foo ? 1 : undefined;"

      """
      bar = if foo = baz
        1
      """: "let bar, foo; bar = (foo = baz) ? 1 : undefined;"

      """
      bar = if foo
        1
        2
      """: "let bar; bar = foo ? (1, 2) : undefined;"

      "bar = if foo then 1 else 2": "let bar; bar = foo ? 1 : 2;"

      """
      y = if true
        x = 1

        if true then x else x
      """: "let y, x; y = true ? (x = 1, true ? x : x) : undefined;"

      """
      ret = if a
        b = c
      """: "let ret, b; ret = a ? b = c : undefined;"

    nestedWithStatements:
      """
      if a
        b
        if c
          d
      """: "if (a) {b; if (c) {d;};};"

      """
      out = if a
        b
        if c
          d
      """: "let out; out = a ? (b, c ? d : undefined) : undefined;"

    nestedBasic:
      """
      if a
        if c
          d
      """: "if (a) {if (c) {d;};};"

      """
      out = if a
        if c
          d
      """: "let out; out = a ? c ? d : undefined : undefined;"


    regressions:
      "!if a then b": "!(a ? b : undefined);"
      "if false then :mytrue": 'if (false) {"mytrue";};'

      """
      if true
      else b
      """: "if (true) {undefined;} else {b;};"

      # this one isn't easy
      # """
      # if true
      # """: "if (true) {undefined;};"

      """
      if true
      else
      """: "if (true) {undefined;};"

      """
      a = if true
        #
      else
        :elseStuff
      """: 'let a; a = true ? undefined : "elseStuff";'

      """
      a = if true
        123
      # comment before else
      else
        :elseStuff
      """: 'let a; a = true ? 123 : "elseStuff";'

      """
      a = if true
        switch foo
        when 0 then "undefined"
      """: """
        let a; a = true ? (() => {switch (foo) {case 0: return "undefined";};})() : undefined;
        """

  unless:
    basic:
      """
      unless foo
        bar
      """: "if (!foo) {bar;};"

      """
      unless foo + bar
        bar
      """: "if (!(foo + bar)) {bar;};"

      """
      unless foo
        bar
      else
        baz
      """: "if (!foo) {bar;} else {baz;};"

    expressions:
      """
      a = unless foo
        bar
      """: "let a; a = !foo ? bar : undefined;"

  while:
    "while foo\n  bar": "while (foo) {bar;};"

    """
    a = while foo
      1
      2
    """: "let a, temp; a = (() => {while (foo) {1; temp = 2;}; return temp;})();"

    """
    a = if true
      while false
        1
      2
    else 3
    """: "let a; a = true ? ((() => {while (false) {1;};})(), 2) : 3;"

  until:
    "until foo\n  bar": "while (!foo) {bar;};"

  scope:
    "while a do b = a": "while (a) {let b; b = a;};"
    "c = while a do b = a": "let c, temp; c = (() => {while (a) {let b; temp = b = a;}; return temp;})();"
    "b = 4; while a do b = a": "let b; b = 4; while (a) {b = a;};"
    "while a do b = a; c = 5": "while (a) {let b, c; b = a; c = 5;};"
    "while a do b = c = 0": "while (a) {let b, c; b = c = 0;};"       # chain initializer should work
    "while a do b = c; c = 0": "while (a) {let b, c; b = c; c = 0;};" # out of order dependency should generate legal JS

  ################################
  # DO
  ################################
  do:
    "do ->": "(function() {})();"
    "do (a) ->": "(function(a) {})(a);"

  ################################
  # TRY
  ################################
  try:
    basic:
      oneliner:
        "try foo": "try {foo;} catch (error) {};"

      body:
        """
        try
          foo
        """: "try {foo;} catch (error) {};"

        """
        try
          foo
          bar
        """: "try {foo; bar;} catch (error) {};"

    nameConflicts:
      # It's OK! It actually doesn't matter when the catch-block == empty
      # The catch-error-identifier doesn't effect anything - even if it matches.
      """
      error = null
      try foo
      """: "let error; error = null; try {foo;} catch (error1) {};"

    asExpression:
      "a = try foo": "let a; a = (() => {try {return foo;} catch (error) {};})();"
      """
      a = try
        foo
        bar
      """: "let a; a = (() => {try {foo; return bar;} catch (error) {};})();"

      "a = try foo catch bar": "let a, bar; a = (() => {try {return foo;} catch (error) {bar = error;};})();"

    catch:
      basic:
        """
        try foo catch
        """: "try {foo;} catch (error) {};"

        """
        try foo catch bar
        """: "let bar; try {foo;} catch (error) {bar = error;};"

        """
        try foo
        catch
          bar
        """: "try {foo;} catch (error) {bar;};"

        """
        try foo
        catch bar
          bar
        """: "let bar; try {foo;} catch (error) {bar = error; bar;};"

      body:
        """
        try foo catch bar
          baz
        """: "let bar; try {foo;} catch (error) {bar = error; baz;};"

        """
        try
          foo
        catch bar
          baz
        """: "let bar; try {foo;} catch (error) {bar = error; baz;};"

        """
        try foo catch bar
          baz
          bud
        """: "let bar; try {foo;} catch (error) {bar = error; baz; bud;};"

      asExpression:
        "a = try foo catch bar":
          "let a, bar;
          a = (() =>
            {try
              {return foo;}
            catch (error)
              {bar = error;};})();"

        """
        a = try foo catch bar
          baz
        """: "let a, bar;
          a = (() =>
            {try
              {return foo;}
            catch (error)
              {bar = error; return baz;};})();"

        """
        a = try foo catch bar
          baz
          bud
        """:
          "let a, bar;
          a = (() =>
            {try {return foo;}
            catch (error)
              {bar = error; baz; return bud;};})();"

      catchIdentifierNameConflicts:
        catchIdentifierIsDefaultIdentifier:
          """
          result = try foo
          catch error
            1
          """:
            "let result, error;
            result = (() =>
            {try
              {return foo;}
            catch (error1)
              {error = error1; return 1;};})();"

        catchIdentifierIsNotDefaultIdentifier:
          """
          result = try foo
          catch myError
            1
          """:   # TODO: this really shouldn't 'let' error
            "let result, myError;
            result = (() =>
            {try
              {return foo;}
            catch (error)
              {myError = error; return 1;};})();"

        catchAndReturnError:
          asExpression:
            """
            result = try foo catch error
              error
            """:
              "let result, error;
              result = (() =>
              {try
                {return foo;}
              catch (error1)
                {error = error1; return error;};})();"

          asStatement:
            """
            try foo catch error
              error
            """:
              "let error;
              try
                {foo;}
              catch (error1)
                {error = error1; error;};"

        catchReturnValueIsDefaultIdentifier:
          """
          try foo catch bar
            error
          """:
            "let bar;
            try
              {foo;}
            catch (error1)
              {bar = error1; error;};"

    finally:
      basic:
        """
        try foo finally bar
        """: "try {foo;} finally {bar;};"

  throw:
    "throw new Error": "throw new Error;"
    """
    a = if foo
      throw new Error
    """: "let a; a = foo ? (() => {throw new Error;})() : undefined;"

  ################################
  # tail control structures
  ################################
  tail:
    ifUnless:
      "foo if bar": "if (bar) {foo;};"
      "foo unless bar": "if (!bar) {foo;};"

    whileUntil:
      "foo while bar": "while (bar) {foo;};"
      "foo until bar": "while (!bar) {foo;};"

    combined:
      "foo if bar unless baz": "if (!baz) {if (bar) {foo;};};"
      "foo if bar while baz": "while (baz) {if (bar) {foo;};};"
      "foo while bar if baz": "if (baz) {while (bar) {foo;};};"

    asExpressions:
      "=>\n foo if bar": "() => bar ? foo : undefined;"

  regressions:
    "500 || (if data then 200 else 404)": "500 || (data ? 200 : 404);"
    """
    if true
      {}
    else
      {}
    .foo
    """: "(true ? {} : {}).foo;"
    "if a then b;": "if (a) {b;};"

  mixedWithTailControl:
    """
    if foo then bar if baz
    """: "if (foo) {if (baz) {bar;};};"

    """
    if foo then bod; bar if baz
    """: "if (foo) {bod; if (baz) {bar;};};"

    """
    if foo
      bar if baz
    """: "if (foo) {if (baz) {bar;};};"

    """
    if foo
      bar
    else bod if baz
    """: "if (foo) {bar;} else {if (baz) {bod;};};"
