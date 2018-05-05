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
      "if false then :mytrue": 'if (false) {"mytrue";};'

      """
      if true
      else b
      """: "if (true) {undefined;} else {b;};"

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
    """: "let a, cafTemp; a = (() => {while (foo) {1; cafTemp = 2;}; return cafTemp;})();"

    """
    a = if true
      while false
        1
      2
    else 3
    """: "let a; a = true ? ((() => {while (false) {1;};})(), 2) : 3;"

  until:
    "until foo\n  bar": "while (!foo) {bar;};"

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
        "try foo": "try {foo;} catch (cafError) {};"

      body:
        """
        try
          foo
        """: "try {foo;} catch (cafError) {};"

        """
        try
          foo
          bar
        """: "try {foo; bar;} catch (cafError) {};"

    nameConflicts:
      # It's OK! It actually doesn't matter when the catch-block == empty
      # The catch-cafError-identifier doesn't effect anything - even if it matches.
      """
      cafError = null
      try foo
      """: "let cafError; cafError = null; try {foo;} catch (cafError1) {};"

    asExpression:
      "a = try foo": "let a; a = (() => {try {return foo;} catch (cafError) {};})();"
      """
      a = try
        foo
        bar
      """: "let a; a = (() => {try {foo; return bar;} catch (cafError) {};})();"

      "a = try foo catch bar": "let a, bar; a = (() => {try {return foo;} catch (cafError) {bar = cafError;};})();"

    catch:
      basic:
        """
        try foo catch
        """: "try {foo;} catch (cafError) {};"

        """
        try foo catch bar
        """: "let bar; try {foo;} catch (cafError) {bar = cafError;};"

        """
        try foo
        catch
          bar
        """: "try {foo;} catch (cafError) {bar;};"

        """
        try foo
        catch bar
          bar
        """: "let bar; try {foo;} catch (cafError) {bar = cafError; bar;};"

      body:
        """
        try foo catch bar
          baz
        """: "let bar; try {foo;} catch (cafError) {bar = cafError; baz;};"

        """
        try
          foo
        catch bar
          baz
        """: "let bar; try {foo;} catch (cafError) {bar = cafError; baz;};"

        """
        try foo catch bar
          baz
          bud
        """: "let bar; try {foo;} catch (cafError) {bar = cafError; baz; bud;};"

      asExpression:
        "a = try foo catch bar":
          "let a, bar;
          a = (() =>
            {try
              {return foo;}
            catch (cafError)
              {bar = cafError;};})();"

        """
        a = try foo catch bar
          baz
        """: "let a, bar;
          a = (() =>
            {try
              {return foo;}
            catch (cafError)
              {bar = cafError; return baz;};})();"

        """
        a = try foo catch bar
          baz
          bud
        """:
          "let a, bar;
          a = (() =>
            {try {return foo;}
            catch (cafError)
              {bar = cafError; baz; return bud;};})();"

      catchIdentifierNameConflicts:
        catchIdentifierIsDefaultIdentifier:
          """
          result = try foo
          catch cafError
            1
          """:
            "let result, cafError;
            result = (() =>
            {try
              {return foo;}
            catch (cafError1)
              {cafError = cafError1; return 1;};})();"

        catchIdentifierIsNotDefaultIdentifier:
          """
          result = try foo
          catch error
            1
          """:   # TODO: this really shouldn't 'let' cafError
            "let result, error;
            result = (() =>
            {try
              {return foo;}
            catch (cafError)
              {error = cafError; return 1;};})();"

        catchAndReturnError:
          asExpression:
            """
            error = try foo catch cafError
              cafError
            """:
              "let error, cafError;
              error = (() =>
              {try
                {return foo;}
              catch (cafError1)
                {cafError = cafError1; return cafError;};})();"

          asStatement:
            """
            try foo catch cafError
              cafError
            """:
              "let cafError;
              try
                {foo;}
              catch (cafError1)
                {cafError = cafError1; cafError;};"

        catchReturnValueIsDefaultIdentifier:
          """
          try foo catch bar
            cafError
          """:
            "let bar;
            try
              {foo;}
            catch (cafError1)
              {bar = cafError1; cafError;};"

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
