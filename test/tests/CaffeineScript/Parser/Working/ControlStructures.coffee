{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

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
      """: "let foo; foo = a ? b : (c ? d : e);"

      """
      foo = if a
        if b
          c
        else
          d
      else
        e
      """: "let foo; foo = a ? (b ? c : d) : e;"

    expressions:
      """
      bar = if foo
        1
      """: "let bar; bar = foo ? 1 : null;"

      """
      bar = if foo = baz
        1
      """: "let bar, foo; bar = (foo = baz) ? 1 : null;"

      """
      bar = if foo
        1
        2
      """: "let bar; bar = foo ? (1, 2) : null;"

      "bar = if foo then 1 else 2": "let bar; bar = foo ? 1 : 2;"

      """
      y = if true
        x = 1

        if true then x else x
      """: "let y, x; y = true ? (x = 1, true ? x : x) : null;"

      """
      ret = if a
        b = c
      """: "let ret, b; ret = a ? (b = c) : null;"

    nested:
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
      """: "let out; out = a ? (b, c ? d : null) : null;"

    regressions:
      "if false then :mytrue": 'if (false) {"mytrue";};'

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
      """: "let a; a = !foo ? bar : null;"

  while:
    "while foo\n  bar": "while (foo) {bar;};"

    """
    a = while foo
      1
      2
    """: "let a, _temp; a = (() => {while (foo) {1; _temp = 2;}; return _temp})();"

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

    conflictingName:
      basic:
        "error = try foo catch bar":
          "let error, bar, error1; error = (() => {try {return foo;} catch (error1) {bar = error1;};})();"

        "try foo catch error":
          "let error, error1; try {foo;} catch (error1) {error = error1;};"

        "try foo catch bar\n  error":
          "let bar, error1; try {foo;} catch (error1) {bar = error1; error;};"

    asExpression:
      "a = try foo": "let a; a = (() => {try {return foo;} catch (error) {};})();"
      """
      a = try
        foo
        bar
      """: "let a; a = (() => {try {foo; return bar;} catch (error) {};})();"

      "a = try foo catch bar": "let a, bar, error; a = (() => {try {return foo;} catch (error) {bar = error;};})();"

    catch:
      basic:
        "try foo catch bar": "let bar, error; try {foo;} catch (error) {bar = error;};"

      body:
        """
        try foo catch bar
          baz
        """: "let bar, error; try {foo;} catch (error) {bar = error; baz;};"

        """
        try foo catch bar
          baz
          bud
        """: "let bar, error; try {foo;} catch (error) {bar = error; baz; bud;};"

      asExpression:
        "a = try foo catch bar": "let a, bar, error; a = (() => {try {return foo;} catch (error) {bar = error;};})();"

        """
        a = try foo catch bar
          baz
        """: "let a, bar, error; a = (() => {try {return foo;} catch (error) {bar = error; return baz;};})();"

        """
        a = try foo catch bar
          baz
          bud
        """: "let a, bar, error; a = (() => {try {return foo;} catch (error) {bar = error; baz; return bud;};})();"

  throw:
    "throw new Error": "throw new Error;"

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
      "=>\n foo if bar": "() => {return bar ? foo : null;};"
