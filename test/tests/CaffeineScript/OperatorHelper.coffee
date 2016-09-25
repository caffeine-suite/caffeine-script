{OperatorHelper} = Neptune.CaffeineScript
{log, w} = Neptune.Art.Foundation

module.exports = suite:
  # test "foo", ->
  #   log
  #     precidence: OperatorHelper.precidence

  #     opsToPrecidence: OperatorHelper.opsToPrecidence

  resolveOperatorSequence: ->
    test "1 + 2", ->
      assert.eq OperatorHelper.resolveOperatorSequence(
        w "+"
        w "1 2"
      ), "1 + 2"

    test "1 + 2 + 3", ->
      assert.eq OperatorHelper.resolveOperatorSequence(
        w "+ +"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "((1 + 2) + 3)"

    test "1 + 2 * 3", ->
      assert.eq OperatorHelper.resolveOperatorSequence(
        w "+ *"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "(1 + (2 * 3))"

    test "1 ** 2 ** 3", ->
      assert.eq OperatorHelper.resolveOperatorSequence(
        w "** **"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "Math.pow(1, Math.pow(2, 3))"

    test "1 %% 2 %% 3", ->
      assert.eq OperatorHelper.resolveOperatorSequence(
        w "%% %%"
        w "1 2 3"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "Caf.mod(Caf.mod(1, 2), 3)"

    test "a === b && c !== d || e < f === g >= h", ->
      assert.eq OperatorHelper.resolveOperatorSequence(
        w "=== && !== || < === >="
        w "a b c d e f g h"
        (a, b, op) -> "(#{a} #{op} #{b})"
      ), "(((a === b) && (c !== d)) || ((e < f) === (g >= h)))"


