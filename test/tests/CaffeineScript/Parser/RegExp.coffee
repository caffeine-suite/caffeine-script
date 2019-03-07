{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  basic:
    "/a/":        "/a/;"
    "/a\\./":     "/a\\./;"

  ###
  shouldNotMatch:
    slashSpace:
      "/ a/": ""
    multiLine:
      "/\na\n/": ""
      "/a \n  b   \n    /": ""
  ###

  modifiers:
    "/a/i":       "/a/i;";
    "/a/g":       "/a/g;";
    "/a/m":       "/a/m;";
    "/a/u":       "/a/u;";
    "/a/y":       "/a/y;";
    "/a/igmuy":   "/a/igmuy;";

  interpolationNotForSimpleRegExp:
    '/#{a}/': '/#{a}/;'

  implicitComma:
    "/a/ /b/": "[/a/, /b/];"

  spaceAfterSlashIsNotRegExp:
    "a / b/ c":     "a / b / c;" # TODO - it would be nice to interpret this as a regex
    "(a / b)/ c":   "a / b / c;" # but not this
    "a / (b/ c)":   "a / (b / c);" # or this
    "a /b/ c":      "a(/b/, c);"

  multiline:
    basics:
      "///":        "/(?:)/;"
      "/// hi":     "/hi/;"
      "///  hi":    "/hi/;"
      "///  hi//":  "/hi\\/\\//;"

    illegal:
      "///hi": null

    basicBlock:
      """
      ///
        a
      """: "/a/;"

      """
      ///
        a
        b
      """: "/ab/;"

    comments:
      """
      ///
        # only
      """: "/(?:)/;"

      """
      ///
        a# only
      """: "/a#only/;"

      """
      ///
        # one
        # two
      """: "/(?:)/;"

      """
      ///
        ##
          one
          two
      """: "/(?:)/;"

      """
      ///
        # first
        a
      """: "/a/;"

      """
      ///
        a
        # second
      """: "/a/;"

      """
      ///
        a
        # middle
        b
      """: "/ab/;"

      """
      ///
        a # tail
      """: "/a/;"

      """
      ///
        a# tail
      """: "/a#tail/;"

    escapes:

      "/// \\ ":      "/ /;"
      "/// \\/":      "/\\//;"
      "/// / ":      "/\\//;"
      "/// // ":     "/\\/\\//;"
      "/// //\\/ ":  "/\\/\\/\\//;"
      """
      ///
        \\\\\\ \\ foo
      """:"/\\\\  foo/;"

    complex:
      """
      ///
        (
          # don't end sequence
          (?!//\\/)
          (
            # escape sequence
            \\\\. |

            # or
            (
              (?!
                # dont match backslash
                \\\\
                # dont match comment
                | [\\s\\n]\\#

                # dont match interpolation
                | \\#\\{
              )
              (.|\\n)
            )
          )
        )+

      """: "/((?!\\/\\/\\/)(\\\\.|((?!\\\\|[\\s\\n]\\#|\\#\\{)(.|\\n))))+/;"

    interpolation:
      '/// #{a}':         "RegExp(`${Caf.toString(a)}`);";
      '/// #{a}#{b}':     "RegExp(`${Caf.toString(a)}${Caf.toString(b)}`);";
      '/// #{a}\\ #{b}':  "RegExp(`${Caf.toString(a)} ${Caf.toString(b)}`);";
      '/// this#{a}that': "RegExp(`this${Caf.toString(a)}that`);";
      '/// \\n#{a}':      "RegExp(`\\\\n${Caf.toString(a)}`);"

    modifiers:
      "///i a":       "/a/i;";
      "///g a":       "/a/g;";
      "///m a":       "/a/m;";
      "///u a":       "/a/u;";
      "///y a":       "/a/y;";
      "///igmuy a":   "/a/igmuy;";

    everything:
      '///i #{a}':       "RegExp(`${Caf.toString(a)}`, 'i');";
      '///g #{a}':       "RegExp(`${Caf.toString(a)}`, 'g');";
      '///m #{a}':       "RegExp(`${Caf.toString(a)}`, 'm');";
      '///u #{a}':       "RegExp(`${Caf.toString(a)}`, 'u');";
      '///y #{a}':       "RegExp(`${Caf.toString(a)}`, 'y');";
      '///igmuy #{a}':   "RegExp(`${Caf.toString(a)}`, 'igmuy');";

  regressions:
    '/// a b': "/ab/;"
    '/// a #{b}': "RegExp(`a${Caf.toString(b)}`);"
    '/// a #{b} c': "RegExp(`a${Caf.toString(b)}c`);"
    '/a:b/': '/a:b/;'

    """
    ///i
      a
      \#{foo}
      b
    """: "RegExp(`a${Caf.toString(foo)}b`, 'i');"

    "///i a \#{foo} b": "RegExp(`a${Caf.toString(foo)}b`, 'i');"


    """
    ///i
      \#{a}
      \#{b}
    """: "RegExp(`${Caf.toString(a)}${Caf.toString(b)}`, 'i');"

    """
    ///
      \#{var1} |
      \#{var2}
    """: "RegExp(`${Caf.toString(var1)}|${Caf.toString(var2)}`);"
