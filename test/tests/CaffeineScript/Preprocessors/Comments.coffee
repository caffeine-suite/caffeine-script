{generateTransformTests} = require './TestPreprocessorsHelper'
{log} = require 'art-standard-lib'
module.exports = suite: generateTransformTests Neptune.CaffeineScript.Preprocessors.normalizeComments,

  singleLine:
    noop:
      "a\n# b":     "a\n# b"
      "# b\na":     "# b\na"
      "a\n# b\nc":  "a\n# b\nc"

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

    inBlock:
      noop:
        """
        if a
          c
          # b
        """: """
          if a
            c
            # b
          """
        """
        if a
          # b
          c
        """: """
          if a
            # b
            c
          """


      op:
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

    noop:
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
      noop:
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

      op:
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
