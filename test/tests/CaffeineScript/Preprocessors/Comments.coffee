{generateTransformTests} = require './TestPreprocessorsHelper'
{log} = require 'art-standard-lib'
normalizeComments = (source) ->
  out = Neptune.CaffeineScript.Preprocessors.normalizeComments source
  # log "Verify normalize is stable...": {source, out}
  assert.eq out, Neptune.CaffeineScript.Preprocessors.normalizeComments(out),
    "normalized doesn't change if normalized again"
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


      """
      if a
        c
          ##
            b
              # c
        d
      """: """
        if a
          c
          ##
            b
              # c
          d
        """

  regressions:
    """
    ->
      ## TODO - with "tap", this is just:
        {parent} = @
        while parent
          if parent.type.match stnTypePattern
            parent tap parent = null
          else
            parent extract parent

        # - with "return", this is just:
        {parent} = @
        while parent
          if parent.type.match stnTypePattern
            return parent
          else
            parent extract parent

        # recursion:
        if parent.type.match stnTypePattern
          parent
        else
          parent.findParent stnTypePattern

    """: """
      ->
      ## TODO - with "tap", this is just:
        {parent} = @
        while parent
          if parent.type.match stnTypePattern
            parent tap parent = null
          else
            parent extract parent

        # - with "return", this is just:
        {parent} = @
        while parent
          if parent.type.match stnTypePattern
            return parent
          else
            parent extract parent

        # recursion:
        if parent.type.match stnTypePattern
          parent
        else
          parent.findParent stnTypePattern

      """