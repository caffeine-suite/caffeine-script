{log, formattedInspect} = Neptune.Art.StandardLib

{semanticTestSuite} = require '../Helper'

module.exports = suite: semanticTestSuite
  fromArray:
    "array from-array 1 2 3":                              [1,2,3]
