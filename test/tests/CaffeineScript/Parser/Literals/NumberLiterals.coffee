
{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../../Helper'

module.exports = suite: parseTestSuite
  integers:
    "1": "1;"
    "0": "0;"
    "-0": "-0;"
    "-1": "-1;"
    "0777": "777;"
    "0888": "888;"
    "0001": "1;"

  exponentiated:
    "1e1":    "1e1;"
    "1e-1":   "1e-1;"
    "9e-10":  "9e-10;"

  float:
    ".1":     ".1;"
    "0.1":    "0.1;"
    "1.1":    "1.1;"
    "00.1":   "0.1;"
    ".1.1":   null
    "1.1.1":  null

  exponentiatedFloats:
    ".1e1":       ".1e1;"
    "0.1e1":      "0.1e1;"
    "1.1e1":      "1.1e1;"
    "123.456e1":  "123.456e1;"

  octal:
    "0o0":    "0o0;"
    "0o777":  "0o777;"

  hex:
    "0x0":    "0x0;"
    "0xff":   "0xff;"
    "0xFF":   "0xFF;"

    # unquoted string catches this
    "0xg":    '"0xg";'

  binary:
    "0b0":  "0b0;"
    "0b01": "0b01;"

  regressions:
    "01": "1;"
    "-01": "-1;"
