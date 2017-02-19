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
    "a / b/ c":  "(a / b) / c;"
    "a /b/ c":    "a(/b/, c);"

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

  # multiline:

