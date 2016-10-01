{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{Extensions} = require 'babel-bridge'
{getPropsToSubparseBlock} = Extensions.IndentBlocks
dqStringStartRegexp = /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///

normalizeString = (string) ->
  string = escapeJavascriptString string.toString().trim()
  string = string.replace /\\\\/g, "\\"
  string = string.replace /\\ /g, " "

module.exports =
  classDefinition:
    pattern: "/class/ _ identifier _extendsClause? block?"
    toJs: ->
      out = "class #{@identifier.toJs()} "
      if @_extendsClause
        out += "extends #{@_extendsClause.toJs()} "
      out + if @block
        ###
        scan statements:

        if its just one object literal
        and all values are functions
        then do a "normal" class def.

        strategy:
        1. first version, let's just generate the full coffeescript class
          i.e. simple javascript class def followed by block that inits
            the prototype and class fields.

        2. second version, scan through every statement and every object,
          adding all function-property-values to the javascript def

        3. UNTIL we find the first non-object statement or non-function
          property value. Then add the rest to the coffeescript-style
          declaration implemented in v1.

        OOO!!!
          What if "{} block" object literals parse the same way as classes?
          In other words, you can interersperse the literal with normal statements.
          The return value is the object-literal, as before.

          But... this does interfere with the implicit-array aspect...
          I think implicit-array is probably more important

        scan strategy:
        1. find all "multilineStatements"
        2. pass-through-only-find 'object'
          (where pass-through includes 1-length-presentMatches)
        3. for every object, find "literalObjectProperty"
        ###
        log statements: matches = @block.find "multilineStatement"
        log simplifiedStatements: (m.simplifiedInspectedObjects for m in matches)

        "{#{@block.toJs()}}"
      else
        "{}"

  # classBlock: getPropsToSubparseBlock rule: "classBlockInternals"

  # classBlockInternals: "classDefinitionLine*"

  # classDefinitionLine: w "prototypePropDefinition multilineStatement blankLine"

  # prototypePropDefinition:

  _extendsClause:
    pattern: "/ +extends/ _ expressionWithOneLessBlock"
    toJs: -> @expressionWithOneLessBlock.toJs()