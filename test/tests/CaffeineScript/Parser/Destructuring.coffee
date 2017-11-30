{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite
  basic:
    "{a} = b": "let a; ({a} = b);"
    "[a] = b": "let a; ([a] = b);"

  list:
    "[a, b] = c": "let a, b; ([a, b] = c);"
    "{a, b} = c": "let a, b; ({a, b} = c);"

  defaults:
    "[a = 1, b] = c": "let a, b; ([a = 1, b] = c);"
    "{a = 1, b} = c": "let a, b; ({a = 1, b} = c);"

  asDifferentName:
    "{a: c} = b": "let c; ({a: c} = b);"

  dotDotDot:
    "[a...] = c":     "let a; ([...a] = c);"
    "[a, b ...] = c": "let a, b; ([a, ...b] = c);"

  nesting:
    array:
      "[{a}] = b":    "let a; ([{a}] = b);"
      "[[a]] = b":    "let a; ([[a]] = b);"

    object:
      "{c:{a}} = b":  "let a; ({c: {a}} = b);"
      "{c:[a]} = b":  "let a; ({c: [a]} = b);"

    illegal:
      "{[a]} = b":    null
      "{{a}} = b":    null

  inLists:
    """
    a = if b
      c
      {d} = e
    """: "let a, d; a = b ? (c, ({d} = e)) : undefined;"

  regressions:
    "{a} = if true\n 1": "let a; ({a} = true ? 1 : undefined);"

    """
    {a} =
      a: 123
    """: "let a; ({a} = {a: 123});"

    "{a} = b ||= {}": "let a, b; ({a} = b || (b = {}));"

  conditionalLeftHandSide:
    "a?.b = c":     "Caf.exists(a) && (a.b = c);"
    "a?.b = c = d": "let c; Caf.exists(a) && (a.b = c = d);"
    "a = b?.c = d": "let a; a = Caf.exists(b) && (b.c = d);"
    "a = b = c?.d": "let a, b; a = b = Caf.exists(c) && c.d;"
    "a()?.b = c":   "let cafBase; Caf.exists(cafBase = a()) && (cafBase.b = c);"
