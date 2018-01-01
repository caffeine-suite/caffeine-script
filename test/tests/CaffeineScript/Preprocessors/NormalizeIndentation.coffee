{generateTransformTests} = require './TestPreprocessorsHelper'
{log} = require 'art-standard-lib'
module.exports = suite: generateTransformTests Neptune.CaffeineScript.Preprocessors.normalizeIndentation,
  """
  a
  \tb
  """: """
    a
     b
    """

  """
  a
   \tb
  """: null # expect failure
