{log} = require 'art-standard-lib'
{
  toVlqSigned
  fromVlqSigned
  encodeVlq
  intToCharMap
  readVlq
  readVlqSequence
} = Neptune.CaffeineScript.CafSourceMap.Base64

module.exports = suite: ->
  for n in [-2, -1, 0, 1, 2, 1000]
    test "fromVlqSigned toVlqSigned #{n}", ->
      assert.eq n, fromVlqSigned toVlqSigned n

  test "toVlqSigned -1", -> assert.eq 3, toVlqSigned -1
  test "toVlqSigned 0",  -> assert.eq 0, toVlqSigned 0
  test "toVlqSigned 1",  -> assert.eq 2, toVlqSigned 1

  test "encodeVlq 0",  -> assert.eq "A", encodeVlq 0
  test "encodeVlq -1", -> assert.eq "D", encodeVlq -1
  test "encodeVlq 16", ->
    assert.eq encodeVlq(16), "gB"
    assert.eq encodeVlq(16), intToCharMap[1<<5] + intToCharMap[1]

  test "readVlq 'gba', index: 0", ->
    out =
    assert.eq
      value: 16
      index: 2
      readVlq 'gBa', index: 0

  for n in list = [-100, -10, -1, 0, 1, 10, 100, 1000, 10000]
    do (n) ->
      test "readVlq encodeVlq #{n}", ->
        encoded = encodeVlq n
        {value, index} = readVlq encoded
        assert.eq n, value
        assert.eq index, encoded.length

  test 'readVlqSequence ...', ->
    encoded = (encodeVlq n for n in list).join ''

    decoded = readVlqSequence encoded
    # index = 0
    # decoded = []
    # reusbale = {} # this is optional, but faster
    # while index < encoded.length
    #   {index, value} = out = readVlq encoded, index, reusbale
    #   assert.same out, reusbale
    #   decoded.push value

    assert.eq decoded, list

  test 'readVlqSequence "AACA"', ->
    assert.eq (readVlqSequence "AACA"),  [0, 0, 1, 0]