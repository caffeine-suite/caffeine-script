{log} = require 'art-standard-lib'
{
  SourceMapGenerator
} = Neptune.CaffeineScript.CafSourceMap

source = """
  # a comment line
  log 10 ** 2
"""
generated = """
  log(Math.pow(10, 2));
"""
sourceFileName = "test.caf"
generatedFileName = "test.js"

module.exports = suite:
  basics: ->

    test "new SourceMapGenerator full", ->
      sm = new SourceMapGenerator source, sourceFileName, generatedFileName
      assert.eq sm.rawSourceMap,
        version: 3
        file: "test.js"
        sources: ["test.caf"]
        mappings: ""

    test "new SourceMapGenerator limited", ->
      sm = new SourceMapGenerator source, sourceFileName
      assert.eq sm.rawSourceMap,
        version: 3
        sources: ["test.caf"]
        mappings: ""


    test "addLine", ->
      sm = new SourceMapGenerator source, sourceFileName
      sm.addLine()
      assert.eq sm.rawSourceMap,
        version: 3
        sources: ["test.caf"]
        mappings: ";"

    test "addSegment", ->
      sm = new SourceMapGenerator source, sourceFileName
      sm.addSegment 0
      assert.eq sm.rawSourceMap,
        version: 3
        sources: ["test.caf"]
        mappings: "AAAA"

  advance: ->
    test "one char", ->
      sm = new SourceMapGenerator source, sourceFileName
      assert.eq sm.status,
        lastSourceLine:      0
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 0
        mappings: ''

      sm.advance '!'
      assert.eq sm.status,
        lastSourceLine:      0
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 1
        mappings: ''

    test "one new-line", ->
      sm = new SourceMapGenerator source, sourceFileName

      sm.advance "\n"
      assert.eq sm.status,
        lastSourceLine:      0
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 0
        mappings: ';'

    test "code then one new-line", ->
      sm = new SourceMapGenerator source, sourceFileName

      sm.advance "blah blah\n"
      assert.eq sm.status,
        lastSourceLine:      0
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 0
        mappings: ';'

    test "code after one new-line", ->
      sm = new SourceMapGenerator source, sourceFileName

      sm.advance "blah blah\nblah"
      assert.eq sm.status,
        lastSourceLine:      0
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 4
        mappings: ';'

    test "multiple new-lines followed by code", ->
      sm = new SourceMapGenerator source, sourceFileName

      sm.advance "blah\nbl\nah\nblahzoom!"
      assert.eq sm.status,
        lastSourceLine:      0
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 9
        mappings: ';;;'

  add: ->
    test "multiple new-lines followed by code", ->
      sm = new SourceMapGenerator source, sourceFileName
      sm.add 17, "log"

      assert.eq sm.status,
        lastSourceLine:      1
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 3
        mappings: ';;;9'
