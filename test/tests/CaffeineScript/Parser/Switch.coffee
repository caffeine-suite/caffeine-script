{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  csStyle:
    basic:
      """
      switch a
        when b then c
      """: "switch (a) {case b: c;};"

      """
      switch a
        when b
          c
      """: "switch (a) {case b: c;};"

      """
      switch a
        when b
          c
        else
          d
      """: "switch (a) {case b: c; break; default: d;};"

    multiLineWhen:
      """
      switch a
        when b
          c
          d
      """: "switch (a) {case b: c; d;};"

  cafScriptStyle:
    basic:
      """
      switch a
      when b then c
      """: "switch (a) {case b: c;};"

      """
      switch a
      when b then c
      when d then e
      """: "switch (a) {case b: c; break; case d: e;};"

      """
      switch a
      when b then c
      else d
      """: "switch (a) {case b: c; break; default: d;};"

    when:
      block:
        """
        switch a
        when b
          c
          d
        """: "switch (a) {case b: c; d;};"

        """
        switch a
        when b then
          c
          d
        """: "switch (a) {case b: c; d;};"

        """
        switch a
        when b
          c
          d
        when e
          f
          g
        """: "switch (a) {case b: c; d; break; case e: f; g;};"

        """
        switch a
        when b
          c
          d
        else
          e
          f
        """: "switch (a) {case b: c; d; break; default: e; f;};"

      twoStatementsOneLine:
        """
        switch a
        when b then c; d
        """: "switch (a) {case b: c; d;};"

    multiMatch:
      """
      switch a
      when b, c then d
      """: "switch (a) {case b: case c: d;};"

      """
      switch a
      when b, c
        d
      """: "switch (a) {case b: case c: d;};"

  asIfThenChain:
    """
    switch
    when a < b then c
    when d then e
    else f
    """: "switch (false) {case !(a < b): c; break; case !d: e; break; default: f;};"

  expression:
    basic:
      """
      foo = switch a
      when b then c
      """: "let foo; foo = (() => {switch (a) {case b: return c;};})();"

      """
      foo = switch a
      when b then c
      when d then e
      """: "let foo; foo = (() => {switch (a) {case b: return c; case d: return e;};})();"

      """
      foo = switch a
      when b then c
      else d
      """: "let foo; foo = (() => {switch (a) {case b: return c; default: return d;};})();"

    when:
      block:
        """
        foo = switch a
        when b
          c
          d
        """: "let foo; foo = (() => {switch (a) {case b: c; return d;};})();"

      twoStatementsOneLine:
        """
        foo = switch a
        when b then c; d
        """: "let foo; foo = (() => {switch (a) {case b: c; return d;};})();"

  regressions:
    """
    switch a
    when c then d
    else b c
    """: "switch (a) {case c: d; break; default: b(c);};"

    """
    switch a
    when c then d
    else b?.c
    """: "switch (a) {case c: d; break; default: Caf.exists(b) && b.c;};"

    """
    switch b
      when :a then true # comment
    """: 'switch (b) {case "a": true;};'

    """
    switch b
      # comment
      when :a then true
      # comment
      when :b then true
      # comment
    """: 'switch (b) {case "a": true; break; case "b": true;};'

    """
    switch foo
      when bar
        123
      # comment
    """: 'switch (foo) {case bar: 123;};'

    """
    switch foo
    when bar then
    """: "switch (foo) {case bar: undefined};"

    """
    switch foo
    when bar
    """: null

    """
    switch foo
    """: "switch (foo) {};"

    """
    switch foo
    else 123
    """: "switch (foo) {default: 123;};"

    """
    switch foo
    else
    """: "switch (foo) {};"

    """
    switchElse
    """: "switchElse;"