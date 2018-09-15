"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function() {
    let assignmentOperator;
    this.rule({
      _equals_: /\ *= */,
      _colon_: /: *| +:( +|(?=\n))/,
      _comma_: /\ *, *\n*/,
      _arrow: /\ *[-~=]>/,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      ellipsis: "'...'",
      reservedWord: /(import|true|false|null|undefined|global|require|module|eval|super|class|new|this|delete|instanceof|is|isnt|switch|when|then|else|if|until|while|unless|array|each|find|object|from|in|with|do|into|returning|with-key|to|by|til|try|catch|throw|and|or|not|extract|as|for|return|break|of|yes|on|no|off|typeof|reduce|inject|promise|await|short|skip|mixin)(-[a-z]+)*\b(?![-])/,
      identifier: [
        /(?!\d)((?!\s)[$\w\u007f-\uffff])+/,
        {
          stnFactory: "IdentifierStn",
          stnProps: function() {
            return { identifier: this.toString() };
          }
        }
      ],
      pathedRequire: /((?!\s)[-\/$\w\u007f-\uffff])+/,
      unquotedString: /[-~!@\#$%^&*_+=|\\<>?\/.$\w\u007f-\uffff]+/,
      unaryTailOperator: /\?/,
      unaryOperator_: /([!~]|not\b|delete\b) *|-(?![-:])/,
      binaryOperator: /&&|\|\||&(?=\s)|\||\^|\?|((and|or|in|is|isnt|instanceof)\b)|<<|>>>|>>|==|!=|<=|>=|<|>|\/\/|%%|\*\*|[-+*\/%]/,
      assignmentOperator: (assignmentOperator = /(&&|\|\||&|\||\^|\?|((and|or|isnt|is|in)\b)|<<|>>>|>>|\/\/|%%|\*\*|[-+*\/%])?=/),
      new: /new\b/,
      throw: /throw\b/
    });
    return this.rule(
      { dot: /\./, questionMark: /\?/ },
      { stnFactory: "SemanticTokenStn" }
    );
  };
});
