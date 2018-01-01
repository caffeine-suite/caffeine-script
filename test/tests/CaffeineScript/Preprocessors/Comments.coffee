{generateTransformTests} = require './TestPreprocessorsHelper'
{log} = require 'art-standard-lib'
normalizeComments = (source) ->
  out = Neptune.CaffeineScript.Preprocessors.normalizeComments source

  # normalized doesn't change if normalized again
  assert.eq out, Neptune.CaffeineScript.Preprocessors.normalizeComments out
  out

module.exports = suite: generateTransformTests normalizeComments,

  singleLine:

    minimal:
      """
      a
        # b
      """: """
        a
        # b
        """

      """
        # b
      a
      """: """
        # b
        a
        """

    inTheMiddle:
      """
      a
        # b
      c
      """: """
        a
        # b
        c
        """

    sequences:
      """
      a
        # b
        # c
      """: """
        a
        # b
        # c
        """

      """
      a
        # b
      # c
      """: """
        a
        # b
        # c
        """

      """
      a
        # b
      # c
        # d
      """: """
        a
        # b
        # c
        # d
        """
      """
      a
      # b
        # c
          # d
      """: """
        a
        # b
        # c
        # d
        """
      """
      a
      # b
        # c
      # d
      """: """
        a
        # b
        # c
        # d
        """

    inBlock:

      """
      if a
          # b
        c
      """: """
        if a
          # b
          c
        """

      """
      if a
        c
          # b
      """: """
        if a
          c
          # b
        """

  commentBlocks:
    minimal:
      """
        ##
          b
      a
      """: """
        ##
          b
        a
        """

      """
      a
        ##
          b
      """: """
        a
        ##
          b
        """

    middle:
      """
      c
        ##
          b
      a
      """: """
        c
        ##
          b
        a
        """


    inBlock:
      """
      if a
          ##
            b
        c
      """: """
        if a
          ##
            b
          c
        """


      """
      if a
        c
          ##
            b
      """: """
        if a
          c
          ##
            b
        """

      """
      if a
        c
          ##
            b
        d
      """: """
        if a
          c
          ##
            b
          d
        """


      # knownFailing
      # """
      # if a
      #   c
      #     ##
      #       b
      #         # c
      #   d
      # """: """
      #   if a
      #     c
      #     ##
      #       b
      #         # c

      #     d
      #   """
