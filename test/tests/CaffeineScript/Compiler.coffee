{compile} = Neptune.CaffeineScript
{log, w, formattedInspect} = Neptune.Art.StandardLib

mockFs = require('mock-fs')

sourceRootName = "AliceInLove"
sourceRoot = "/home/alice/#{sourceRootName}"

module.exports = suite: ->
  setup ->
    mockFs
      "#{sourceRoot}":
        "package.json": "{}"
        source:
          "StandardImport.caf": ":foo"
          Lib: "Bar.caf": "&StandardImport"

  teardown ->
    mockFs.restore()

  test "basic", ->
    assert.eq
      compiled:
        js:
          """
            "use strict"
            let Caf = require('caffeine-script-runtime');
            Caf.defMod(module, () => {return "foo";});
          """
      compile ":foo"

  test "smart-require", ->
    assert.eq
      compiled:
        js:
          """
            "use strict"
            let Caf = require('caffeine-script-runtime');
            Caf.defMod(module, () => {return require('../StandardImport');});
          """

      props: moduleDependencies: "standard-import": "../StandardImport"

      compile "&standard-import",
        sourceRoot: sourceRoot
        sourceFile: "#{sourceRoot}/source/Lib/Bar.caf"

  test "smart-require x2", ->
    assert.eq
      compiled:
        js:
          """
            "use strict"
            let Caf = require('caffeine-script-runtime');
            Caf.defMod(module, () => {({standardImport: require('../StandardImport')}); return require('../../package');});
          """

      props:
        moduleDependencies:
          standardImport: "../StandardImport"
          package: "../../package"

      compile "{} &standardImport\n&package",
        sourceRoot: sourceRoot
        sourceFile: "#{sourceRoot}/source/Lib/Bar.caf"

