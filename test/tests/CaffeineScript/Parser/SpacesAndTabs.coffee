{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite
  spaces:
    "foo\n  1\n  2": "foo(1, 2);"
  tabs:
    "foo\n\t1\n\t2": "foo(1, 2);"

  mixed:
    "foo\n\t1\n  2": null

  inline:
    "foo\t1": "foo(1);"