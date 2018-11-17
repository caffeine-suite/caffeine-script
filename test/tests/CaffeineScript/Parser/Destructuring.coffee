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

  restructuring: # postAssignment
    object:
      basic:
        "a = {b} = c":        "let a, b; a = ({b} = c, {b});"
      defaults:
        "a = {b = 2} = c":    "let a, b; a = ({b = 2} = c, {b});"
      labeled:
        "a = {b:d} = c":      "let a, d; a = ({b: d} = c, {d});"
      nested:
        "a = {b:[d]} = c":      "let a, d; a = ({b: [d]} = c, {d});"
        "a = {b:{d}} = c":      "let a, d; a = ({b: {d}} = c, {d});"
        "a = {b1:{d1, d2}, b2:[d3, d4]} = c":
          "let a, d1, d2, d3, d4; a = ({b1: {d1, d2}, b2: [d3, d4]} = c, {d1, d2, d3, d4});"

    array:
      basic:
        "a = [b] = c":        "let a, b; a = ([b] = c, [b]);"
      defaults:
        "a = [b = 2] = c":    "let a, b; a = ([b = 2] = c, [b]);"
      ellipsis:
        "a = [b...] = c":       "let a, b; a = ([...b] = c, [b]);"
        "a = [b1, b2...] = c":  "let a, b1, b2; a = ([b1, ...b2] = c, [b1, b2]);"
      nested:
        "a = [[d]] = c":      "let a, d; a = ([[d]] = c, [d]);"
        "a = [{d}] = c":      "let a, d; a = ([{d}] = c, [d]);"
        "a = [{d1, d2}, [d3, d4], d5...] = c":
          "let a, d1, d2, d3, d4, d5; a = ([{d1, d2}, [d3, d4], ...d5] = c, [d1, d2, d3, d4, d5]);"

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

  expressions:
    """
    a = {d} = e
    """: "let a, d; a = ({d} = e, {d});"

    """
    a = if b
      c
      {d} = e
    """: "let a, d; a = b ? (c, ({d} = e, {d})) : undefined;"

    """
    a =
      c
      {d} = e
    """: "let a, d; a = [c, ({d} = e, {d})];"

  statements:
    """
    a = if b
      {d} = c
      d
    """: "let a, d; a = b ? (({d} = c), d) : undefined;"

  regressions:
    "{a} = if true\n 1": "let a; ({a} = true ? 1 : undefined);"

    """
    {a} =
      a: 123
    """: "let a; ({a} = {a: 123});"

    "{a} = b ||= {}": "let a, b; ({a} = b || (b = {}));"

    "{default} = b": null

  conditionalLeftHandSide:
    "a?.b = c":     "Caf.exists(a) && (a.b = c);"
    "a?.b = c = d": "let c; Caf.exists(a) && (a.b = c = d);"
    "a = b?.c = d": "let a; a = Caf.exists(b) && (b.c = d);"
    "a = b = c?.d": "let a, b; a = b = Caf.exists(c) && c.d;"
    "a()?.b = c":   "let base; Caf.exists(base = a()) && (base.b = c);"
