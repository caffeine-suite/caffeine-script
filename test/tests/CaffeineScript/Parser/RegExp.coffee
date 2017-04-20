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
      '/// #{a}':         "RegExp(`${a}`);";
      '/// #{a}#{b}':     "RegExp(`${a}${b}`);";
      '/// #{a}\\ #{b}':  "RegExp(`${a} ${b}`);";
      '/// this#{a}that': "RegExp(`this${a}that`);";
      '/// \\n#{a}':      "RegExp(`\\\\n${a}`);"

    modifiers:
      "///i a":       "/a/i;";
      "///g a":       "/a/g;";
      "///m a":       "/a/m;";
      "///u a":       "/a/u;";
      "///y a":       "/a/y;";
      "///igmuy a":   "/a/igmuy;";

    everything:
      '///i #{a}':       "RegExp(`${a}`, 'i');";
      '///g #{a}':       "RegExp(`${a}`, 'g');";
      '///m #{a}':       "RegExp(`${a}`, 'm');";
      '///u #{a}':       "RegExp(`${a}`, 'u');";
      '///y #{a}':       "RegExp(`${a}`, 'y');";
      '///igmuy #{a}':   "RegExp(`${a}`, 'igmuy');";
