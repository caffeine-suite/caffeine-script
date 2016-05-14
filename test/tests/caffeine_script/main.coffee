CaffeineScript = require "caffeine-script"
{log} = require "art-foundation"

suite "CaffeineScript", ->
  test "default to compiling with CoffeeScript", ->
    assert.eq CaffeineScript.compile("1+2"), compiled: {js: "(function() {\n  1 + 2;\n\n}).call(this);\n"}

  test "metaCompiler works", ->
    self.__metaCompilerTest = 123
    out = CaffeineScript.compile """
      ###<
      self.__metaCompilerTest = 456
      Neptune.CaffeineScript.compiler = compile: (source) -> compiled: js: source
      ###>
      1+2
      """
    assert.eq out, compiled: {js: "1+2"}

    assert.eq self.__metaCompilerTest, 456
