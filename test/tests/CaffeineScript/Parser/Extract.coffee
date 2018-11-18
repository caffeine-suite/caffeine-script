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
      "a.b extract c":      "let c; c = a.b.c;"
      "a.b extract c, d":   "let c, d, temp; temp = a.b; c = temp.c; d = temp.d;"
      # "a + b extract c": "as"

    expression:
      "c = a extract b": "let c, b; c = b = a.b;"
      "d = a extract b, c": "let d, b, c; d = (b = a.b, c = a.c);"

    nested:
      "a extract b extract c": "let b, c; b = a.b; c = b.c;"
      "a extract x as b extract c": "let b, c; b = a.x; c = b.c;"
      "a extract b extract c extract d": "let b, c, d; b = a.b; c = b.c; d = c.d;"
      "d = a extract b extract c": "let d, b, c; d = (b = a.b, c = b.c);"
      "x.a extract b extract c": "let b, c; b = x.a.b; c = b.c;"
      "a extract x.b extract c": "let b, c; b = a.x.b; c = b.c;"
      "a extract b extract x.c": "let b, c; b = a.b; c = b.x.c;"

    default:
      "a extract b = c": "let b, temp; b = (undefined !== (temp = a.b)) ? temp : c;"
      "a extract b = c + d": "let b, temp; b = (undefined !== (temp = a.b)) ? temp : c + d;"

    as:
      "a extract b as c": "let c; c = a.b;"

    conditional:
      basic:
        "a extract? b": "let b; if (Caf.exists(a)) {b = a.b;};"
        "a extract b extract? c": "let b, c; b = a.b; if (Caf.exists(b)) {c = b.c;};"

      complexBase:
        "a.b extract? c":     "let c, temp; if (Caf.exists(temp = a.b)) {c = temp.c;};"
        "a.b extract? c, d":  "let c, d, temp; if (Caf.exists(temp = a.b)) {c = temp.c; d = temp.d;};"

      # TODO - defaults + extract? should ALWAYS apply the default, even if the base does-not-exist.
      # withDefaults:
      #   "a extract? b = 1": "let b, temp; b = ((temp = Caf.exists(a) && a.b) != null ? temp : 1);"
      #   "b = a?.b ? 1": "let b, temp; b = ((temp = Caf.exists(a) && a.b) != null ? temp : 1);"

      regressions:
        "a?.d extract? b": "let b, temp; if (Caf.exists(temp = Caf.exists(a) && a.d)) {b = temp.b;};"
        "@foo extract a, b":  "let a, b, temp; temp = this.foo; a = temp.a; b = temp.b;"
        "@foo extract? a, b": "let a, b, temp; if (Caf.exists(temp = this.foo)) {a = temp.a; b = temp.b;};"

    withBlock:
      """
      a extract
        b
        c
      """: "let b, c; b = a.b; c = a.c;"

      """
      a extract
        b
        c extract d
      """: "let b, c, d; b = a.b; c = a.c; d = c.d;"

      """
      a extract
        b, c
      """: "let b, c; b = a.b; c = a.c;"

      """
      a extract
        b, c
        d
      """: "let b, c, d; b = a.b; c = a.c; d = a.d;"

      """
      a extract
        b extract
          c
      """: "let b, c; b = a.b; c = b.c;"

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

  subExpressions:
    "a = b + c extract d": "let a, d; a = b + (d = c.d);"
  ### TODO
    functionArgs:
      "(extract b) ->":   "(temp) -> let b; b = temp.b;"
      "(a extract b) ->": "(a) -> let b; b = a.b;"
      "(a.b) ->":         "(temp) -> let b; b = temp.b;"
      "(.b) ->":          "(temp) -> let b; b = temp.b;"

    lineStarts:
      """
      a
      extract b
      """: "let b; b = a.b;"

      """
      a + b
      extract c
      """: "let c, base; (base = a + b, c = base.c);"

      """
      a + b
        extract c
      """: "let c; a + (c = b.c);"

  array:
    basics:
      "a extract [] b": "let b; b = a[0];"
      "a extract [] b, c": "let b, c; (b = a[0], c = a[1]);"

    splats:
      "a extract [] b, c...": "let b, c, _length; (length = a.length, b = a[0], c = a.slice(1, length - 1));"
      "a extract [] b..., c": "let b, c, _length; (length = a.length, b = a.slice(0, length - 2), c = a[length - 1]);"
      "a extract [] b, c..., d": "let b, c, d, _length; (length = a.length, b = a[0], c = a.slice(1, length - 2), d = a[length - 1]);"
  ###