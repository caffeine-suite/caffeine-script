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


    expressions:
      """
      bar = if foo
        1
      """: "let bar; bar = foo ? (1) : undefined;"

      """
      bar = if foo
        1
        2
      """: "let bar; bar = foo ? (1, 2) : undefined;"

      "bar = if foo then 1 else 2": "let bar; bar = foo ? 1 : 2;"

  unless:
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

  while:
    "while foo\n  bar": "while (foo) {bar;};"

  until:
    "until foo\n  bar": "while (!foo) {bar;};"

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
          "let error, bar; error = (function() {try {return foo;} catch (error1) {bar = error1;};})();"

        "try foo catch error":
          "let error; try {foo;} catch (error1) {error = error1;};"

        "try foo catch bar\n  error":
          "let bar; try {foo;} catch (error1) {bar = error1; error;};"

    asExpression:
      "a = try foo": "let a; a = (function() {try {return foo;} catch (error) {};})();"
      """
      a = try
        foo
        bar
      """: "let a; a = (function() {try {foo; return bar;} catch (error) {};})();"

      "a = try foo catch bar": "let a, bar; a = (function() {try {return foo;} catch (error) {bar = error;};})();"

    catch:
      basic:
        "try foo catch bar": "let bar; try {foo;} catch (error) {bar = error;};"

      body:
        """
        try foo catch bar
          baz
        """: "let bar; try {foo;} catch (error) {bar = error; baz;};"

        """
        try foo catch bar
          baz
          bud
        """: "let bar; try {foo;} catch (error) {bar = error; baz; bud;};"

      asExpression:
        "a = try foo catch bar": "let a, bar; a = (function() {try {return foo;} catch (error) {bar = error;};})();"

        """
        a = try foo catch bar
          baz
        """: "let a, bar; a = (function() {try {return foo;} catch (error) {bar = error; return baz;};})();"

        """
        a = try foo catch bar
          baz
          bud
        """: "let a, bar; a = (function() {try {return foo;} catch (error) {bar = error; baz; return bud;};})();"


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
      "=>\n foo if bar": "() => {return bar ? foo : undefined;};"
