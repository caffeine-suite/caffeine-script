{OperatorHelper} = Neptune.CaffeineScript
{log, w, formattedInspect} = Neptune.Art.StandardLib

{escapeMustEscapes, escapeUnescaped, deescapeSpaces} = Neptune.CaffeineScript.Lib

testEscapeUnescaped = ({string, chars, expected}) ->
  test "escapeUnescaped #{formattedInspect string}, #{formattedInspect chars} => #{formattedInspect expected}", ->
    assert.eq expected, escapeUnescaped string, chars

testDeescapeSpaces = ({string, expected}) ->
  test "deescapeSpaces #{formattedInspect string} => #{formattedInspect expected}", ->
    assert.eq expected, deescapeSpaces string

module.exports = suite:
  escapeUnescaped: ->
    testEscapeUnescaped  string: ' ',          chars:  ' ',    expected: '\\ '
    testEscapeUnescaped  string: '\\ ',        chars:  ' ',    expected: '\\ '
    testEscapeUnescaped  string: '  ',         chars:  ' ',    expected: '\\ \\ '
    testEscapeUnescaped  string: '\\ ',        chars:  '\\',   expected: '\\\\ '
    testEscapeUnescaped  string: 'eat bread',  chars:  'ab',   expected: 'e\\at \\bre\\ad'
    testEscapeUnescaped  string: '${a}\\n',    chars:  '$\\',  expected: '\\${a}\\\\n'
    testEscapeUnescaped  string: '${a}\\n',    chars:  '$n',   expected: '\\${a}\\n'

  escapeMustEscapes: ->
    test 'with \\n', ->
      assert.eq escapeMustEscapes("hi\nthere"), "hi\\nthere"

  deescapeSpaces: ->
    testDeescapeSpaces string: ' ',       expected: ' '
    testDeescapeSpaces string: '\\ ',     expected: ' '
    testDeescapeSpaces string: '\\\\ ',   expected: '\\\\ '
    testDeescapeSpaces string: '\\  ',    expected: '  '
    testDeescapeSpaces string: '\\ \\ ',  expected: '  '
