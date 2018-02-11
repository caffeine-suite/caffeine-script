{applyParens} = Neptune.CaffeineScript.SemanticTree.BaseStn
{log, inspectLean} = Neptune.Art.StandardLib

testApplyParens = (map) ->
  for source, parensAdded of map
    do (source, parensAdded) ->
      test "applyParens #{inspectLean source} - add parens: #{parensAdded}", ->
        assert.eq applyParens(source), if parensAdded then "(#{source})" else source

module.exports = suite:
  applyParens: ->
    testApplyParens
      foo: false
      Foo: false
      SpinalTap: false
      "a + b": true
      '[1, 2]': false
      123: false
      "-123": false
      "foo.bar": false
      "-7 % 5": true
      "!!!foo": false
      "(b + (b || c))": true
      "(b + c)": false
      "!(b + c)": false
      "(b + c) || (b + c)": true
      "world != null": true

  validate: ->
    test "require failure", ->
      try
        Neptune.CaffeineScript.compile "&FooBar"
      catch e
        assert.eq e.info.line, 0
        assert.eq e.info.column, 7
        assert.match e.message, /could not find.*foobar/i
