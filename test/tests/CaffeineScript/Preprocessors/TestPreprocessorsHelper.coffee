{isFunction, object, each, isObject} = require 'art-standard-lib'

{niceTest} = require '../Helper'
{Preprocessors} = Neptune.CaffeineScript

generateTests = (preprocessor, tests) ->
  ->
    each tests, (expected, input) ->
      niceTest "#{input} => #{expected ? 'REJECTED'}", ->
        if expected?
          got = preprocessor(input)
          assert.eq expected, got, """
            #{preprocessor.name}:
            <INPUT>
            #{input}
            <EXPECTED>
            #{expected}
            <GOT>
            #{got}
            <END>
            """
        else
          assert.rejects -> preprocessor(input)


testPreprocessorsR = (preprocessor, tests) ->

module.exports =
  generateTransformTests: generateTransformTests = (preprocessor, tests) ->
    unless isFunction preprocessor
      throw new Error "bad preprocessor: #{preprocessor?.name}"

    isTestGroup = false
    for k, v of tests
      isTestGroup = isObject v
      break

    if isTestGroup
      object tests, (subTests) -> generateTransformTests preprocessor, subTests
    else
      generateTests preprocessor, tests
