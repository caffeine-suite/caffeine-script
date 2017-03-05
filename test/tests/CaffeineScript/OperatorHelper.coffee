{OperatorHelper} = Neptune.CaffeineScript
{log, w} = Neptune.Art.StandardLib

module.exports = suite:
  # test "foo", ->
  #   log
  #     precidence: OperatorHelper.precidence

  #     opsToPrecidence: OperatorHelper.opsToPrecidence

  resolveOperatorPrecidence: ->
    test "1 + 2", ->
      assert.eq OperatorHelper.resolveOperatorPrecidence(
        w "+"
        w "1 2"
      ), "1 + 2"

    test "1 + 2 + 3", ->
      assert.eq OperatorHelper.resolveOperatorPrecidence(
        w "+ +"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "((1 + 2) + 3)"

    test "1 + 2 * 3", ->
      assert.eq OperatorHelper.resolveOperatorPrecidence(
        w "+ *"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "(1 + (2 * 3))"

    test "1 ** 2 ** 3", ->
      assert.eq OperatorHelper.resolveOperatorPrecidence(
        w "** **"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "(1 ** (2 ** 3))"

    test "1 %% 2 %% 3", ->
      assert.eq OperatorHelper.resolveOperatorPrecidence(
        w "%% %%"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "((1 %% 2) %% 3)"

    test "a === b && c !== d || e < f === g >= h", ->
      assert.eq OperatorHelper.resolveOperatorPrecidence(
        w "=== && !== || < === >="
        w "a b c d e f g h"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "(((a === b) && (c !== d)) || ((e < f) === (g >= h)))"


