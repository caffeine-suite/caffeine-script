
{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite

  eol:
    "1# comment": "1;"

    "# comment\n1": "1;"

    "1\n# comment": "1;"

    """
    # comment
    """: ";"

    """
    # comment 1
    # comment 2
    1
    """: "1;"

    """


    # comment 1


    # comment 2


    1

    # comment 3


    """: "1;"

  eolBeforeBlock:
    """
    -> # comment
      1
    """: "(function() {return 1;});"

    """
    class Foo # comment
      1
    """: "let Foo; Foo = Caf.defClass(class Foo extends Object {}, function(Foo, classSuper, instanceSuper) {1;});"

    """
    [] # comment
      1
    """: "[1];"

    """
    if true # comment
      1
    """: "if (true) {1;};"

    """
    foo: # comment
      1
    """: "({foo: 1});"

    """
    log update: # comment
      key: 1
    """: "log({update: {key: 1}});"

  regressions:
    " # indented comment == OK": ";"
    """
      # hi
    a
    """: "a;"

    """
    a = # comment
      b
    """: "let a; a = b;"

    """
    {}
      foo: 123 # comment
    """: '({foo: 123});'

    """
    foo: 123 # comment
    """: '({foo: 123});'

  anyNumberOfOctothorpsAllowed:
    "#\n1\n###": "1;"
    "##\n1\n###": "1;"
    "###\n1\n###": "1;"
    "####\n1\n###": "1;"
    "#####\n1\n###": "1;"

  multiline:

    """
    ##
    1
    """: "1;"

  block:
    """
    ##
      comment
    1
    """: "1;"

    """
    ## comment
    1
    """: "1;"

    """
    ## comment
      more comment
    1
    """: "1;"

    # """
    # # comment 1
    #   comment 2
    # 1
    # """: "1;"

    """
    foo # comment 1
      not a comment
    """: "foo(!a(comment));"

    """
    ##
        1
       2
      3
       2
        1
    1
    """: "1;"

  # functions:
  #   """
  #   # hi
  #   """: ""
  #   """
  #   ##
  #       frankly
  #     a
  #   abc
  #   """: ""

  functions:
    """
    ->
      ##
        hello
      a
    """: "(function() {return a;});"

  legitFailures:
    functions:
      """
      ->
        ##
          hello
        for
      """: null

      """
      ->
        abc
        ->
          ##
            wtf
          for
      """: null

      """
      import a
      ->
        ##
          wtf
        for
      """: null

      """
      import a
      ->
        # wtf
        for
      """: null
