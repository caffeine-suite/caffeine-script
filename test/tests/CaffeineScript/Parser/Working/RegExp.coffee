{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite} = require '../../Helper'

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
      "///hi///": "/hi/;"
      "///  hi  ///": "/hi/;"
      "///  hi//  ///": "/hi\\/\\//;"
      """
      ///
      a
      ///
      """: "/a/;"

    comments:
      """
      ///
      # only
      ///
      """: "/(?:)/;"

      """
      ///
      a# only
      ///
      """: "/a#only/;"

      """
      ///
      # one
      # two
      ///
      """: "/(?:)/;"

      """
      ///
      ##
        one
        two
      ///
      """: "/(?:)/;"

      """
      ///
      ###
        one
        two
      ###
      ///
      """: "/(?:)/;"

      """
      ///
      # first
      a
      ///
      """: "/a/;"

      """
      ///
      a
      # second
      ///
      """: "/a/;"

      """
      ///
      a
      # middle
      b
      ///
      """: "/ab/;"

      """
      ///
      a # tail
      ///
      """: "/a/;"

      """
      ///
      a# tail
      ///
      """: "/a#tail/;"

    escapes:

      "///\\ ///": "/ /;"
      "///\\////": "/\\//;"
      "/// / ///": "/\\//;"
      "/// // ///": "/\\/\\//;"
      "/// //\\/ ///": "/\\/\\/\\//;"
      """
      ///
      \\\\\\ \\ foo
      ///
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
      ///

      """: "/((?!\\/\\/\\/)(\\\\.|((?!\\\\|[\\s\\n]\\#|\\#\\{)(.|\\n))))+/;"

    interpolation:
      '///#{a}///': "RegExp(`${a}`);";
      '///#{a}#{b}///': "RegExp(`${a}${b}`);";
      '///#{a}\\ #{b}///': "RegExp(`${a} ${b}`);";
      '///this#{a}that///': "RegExp(`this${a}that`);";
      '///\\n#{a}///': "RegExp(`\\\\n${a}`);"

    modifiers:
      "///a///i":       "/a/i;";
      "///a///g":       "/a/g;";
      "///a///m":       "/a/m;";
      "///a///u":       "/a/u;";
      "///a///y":       "/a/y;";
      "///a///igmuy":   "/a/igmuy;";

    "modifiers and interpolation":
      '///#{a}///i':       "RegExp(`${a}`, 'i');";
      '///#{a}///g':       "RegExp(`${a}`, 'g');";
      '///#{a}///m':       "RegExp(`${a}`, 'm');";
      '///#{a}///u':       "RegExp(`${a}`, 'u');";
      '///#{a}///y':       "RegExp(`${a}`, 'y');";
      '///#{a}///igmuy':   "RegExp(`${a}`, 'igmuy');";
