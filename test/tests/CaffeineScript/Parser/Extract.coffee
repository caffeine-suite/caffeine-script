{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript
{BaseClass} = Neptune.Art.ClassSystem

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  object:
    basic:
      "a extract b": "let b; b = a.b;"
      "a extract b, c": "let b, c; b = a.b, c = a.c;"

    expression:
      "c = a extract b": "let c, b; c = b = a.b;"
      "d = a extract b, c": "let d, b, c; d = (b = a.b, c = a.c);"

    nested:
      "a extract b extract c": "let b, c; b = a.b, c = b.c;"
      "d = a extract b extract c": "let d, b, c; d = (b = a.b, c = b.c);"

  #   default:
  #     "a extract b = c": "let b; b = (a.b !== undefined ? a.b : c);"

  #   as:
  #     "a extract b as c": "let c; c = a.b;"

  #   conditional:
  #     "a extract? b": "let c; (Caf.exists(a) ? b = a.b : undefined)"

  #   pathing:
  #     "a extract b.c": "let c; c = a.b.c;"

  #   blocks:
  #     """
  #     a extract
  #       b
  #     """: "let b; b = a.b;"

  #     """
  #     a extract
  #       b
  #       c
  #     """: "let b, c; (b = a.b, c = a.c);"

  #   subExpressions:
  #     "a = b + c extract d": "let a, d; a = b + (d = c.d);"

  #   lineStarts:
  #     """
  #     a
  #     extract b
  #     """: "let b; b = a.b;"

  #     """
  #     a + b
  #     extract c
  #     """: "let c, base; (base = a + b, c = base.c);"

  #     """
  #     a + b
  #       extract c
  #     """: "let c; a + (c = b.c);"

  # array:
  #   basics:
  #     "a extract [] b": "let b; b = a[0];"
  #     "a extract [] b, c": "let b, c; (b = a[0], c = a[1]);"

  #   splats:
  #     "a extract [] b, c...": "let b, c, _length; (length = a.length, b = a[0], c = a.slice(1, length - 1));"
  #     "a extract [] b..., c": "let b, c, _length; (length = a.length, b = a.slice(0, length - 2), c = a[length - 1]);"
  #     "a extract [] b, c..., d": "let b, c, d, _length; (length = a.length, b = a[0], c = a.slice(1, length - 2), d = a[length - 1]);"
