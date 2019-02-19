{applyParens} = Neptune.CaffeineScript.SemanticTree.BaseStn
{log, inspectLean} = Neptune.Art.StandardLib

module.exports = suite:

  validate: ->
    test "require failure", ->
      try
        Neptune.CaffeineScript.compile "a = &FooBar"
      catch e
        assert.eq e.info.line, 0
        assert.eq e.info.column, 4
        assert.match e.message, /could not find.*foobar/i
