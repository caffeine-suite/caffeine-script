{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript
{BaseClass} = Neptune.Art.ClassSystem

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  object:
    basic:
      "a extract b": "let b; b = a.b;"
      "a extract b, c": "let b, c; b = a.b; c = a.c;"

    complexBase:
      "a.b extract c, d": "let c, d, temp; temp = a.b; c = temp.c; d = temp.d;"
      # "a + b extract c": "as"

    expression:
      "c = a extract b": "let c, b; c = b = a.b;"
      "d = a extract b, c": "let d, b, c; d = (b = a.b, c = a.c);"

    nested:
      "a extract b extract c": "let c, temp; temp = a.b; c = temp.c;"
      "a extract b extract c extract d": "let d, temp, temp1; temp = a.b; temp1 = temp.c; d = temp1.d;"
      "d = a extract b extract c": "let d, c, temp; d = (temp = a.b, c = temp.c);"

    default:
      "a extract b = c": "let b, temp; b = (undefined !== (temp = a.b)) ? temp : c;"
      "a extract b = c + d": "let b, temp; b = (undefined !== (temp = a.b)) ? temp : c + d;"

    as:
      "a extract b as c": "let c; c = a.b;"

    conditional:
      "a extract? b": "let b; if (Caf.exists(a)) {b = a.b;};"
      "a extract b extract? c": "let c, temp; temp = a.b; if (Caf.exists(temp)) {c = temp.c;};"

      "a.c extract? b": "let b, temp; if (Caf.exists(temp = a.c)) {b = temp.b;};"

      # TODO - defaults + extract? should ALWAYS apply the default, even if the base does-not-exist.
      # "a extract? b = 1": "let b, temp; b = (undefined !== temp = Caf.exists(a) ? a.b : undefined) ? temp : 1;"

    withBlock:
      """
      a extract
        b
        c
      """: "let b, c; b = a.b; c = a.c;"

      # """
      # a extract
      #   b
      #   c extract d
      # """: "let b, c, d; b = a.b; c = a.c; d = c.d;"

      """
      a extract
        b, c
      """: "let b, c; b = a.b; c = a.c;"

      """
      a extract
        b, c
        d
      """: "let b, c, d; b = a.b; c = a.c; d = a.d;"

    pathing:
      "a extract b.c": "let c; c = a.b.c;"
      ###
      TODO - extract? + pathing - every '.' becomes '?.' - and remember, defaults always apply, no matter which ?. fails.
      Ex:
        # THIS:
        a extract? b.c = 1

        # MEANS:
        c = a?.b?.c ? 1;
      ###
      # "a extract? b.c = 1": "c = a?.b?.c ? 1;"

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
