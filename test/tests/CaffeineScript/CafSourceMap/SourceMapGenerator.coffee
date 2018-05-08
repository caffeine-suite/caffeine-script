{log} = require 'art-standard-lib'
{
  SourceMapGenerator
  SourceNode
  SourceMapConsumer
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
      sm.addSegment 1
      assert.eq sm.rawSourceMap,
        version: 3
        sources: ["test.caf"]
        mappings: "AAAC"

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
    test "add once", ->
      sm = new SourceMapGenerator source, sourceFileName
      sm.add new SourceNode 17, "log"

      assert.eq sm.status,
        lastSourceLine:      1
        lastSourceColumn:    0
        lastGeneratedColumn: 0
        nextGeneratedColumn: 3
        mappings: 'AACA'

    test "add twice", ->
      sm = new SourceMapGenerator source, sourceFileName
      sm.add new SourceNode 17, "lo"
      sm.add new SourceNode 19, "g"

      assert.eq sm.status,
        lastSourceLine:      1
        lastSourceColumn:    2
        lastGeneratedColumn: 2
        nextGeneratedColumn: 3
        mappings:            "AACA,EAAE"

    test "full example", ->
      sm = new SourceMapGenerator source, sourceFileName
      sm.add new SourceNode 17, "log"
      sm.add new SourceNode null, "("
      sm.add new SourceNode null, "Math.pow("
      sm.add new SourceNode 21, "10"
      sm.add new SourceNode null, ", "
      sm.add new SourceNode 27, "2"
      sm.add new SourceNode null, "));"

      smc = new SourceMapConsumer sm.sourceMap
      assert.eq sm.js, "log(Math.pow(10, 2));"
      assert.eq sm.status,
        lastSourceLine:      1
        lastSourceColumn:    10
        lastGeneratedColumn: 17
        nextGeneratedColumn: 21
        mappings:            "AACA,aAAI,IAAM"

      assert.eq smc.decodedMappings, [
        {
          generatedLine:   0
          generatedColumn: 0
          source:          0
          sourceLine:      1
          sourceColumn:    0

        },{
          generatedLine:   0
          generatedColumn: 13
          source:          0
          sourceLine:      1
          sourceColumn:    4

        },{
          generatedLine:   0
          generatedColumn: 17
          source:          0
          sourceLine:      1
          sourceColumn:    10
        }
      ]
