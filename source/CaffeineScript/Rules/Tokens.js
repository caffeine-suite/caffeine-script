let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function() {
    this.rule({
      _equals_: /\ *= */,
      _colon_: /\ *: */,
      _comma_: /\ *, *\n*/,
      _arrow_: /\ *[-~=]> */,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      reservedWord: /(for|instanceof|import|throw|return|break|into|returning|with|do|switch|when|if|until|try|catch|while|unless|then|else|and|or|is|isnt|in|from|not)\b/,
      identifier: {
        pattern: /(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)/,
        stnFactory: "IdentifierStn",
        stnProps: function() {
          return { identifier: this.toString() };
        }
      },
      pathedRequire: /((?:(?!\s)[\/$\w\x7f-\uffff])+)/,
      unquotedString: /((?!\s)[-~!@\#$%^&*_+=|\\<>?\/.$\w\x7f-\uffff])+/,
      unaryTailOperator: /\?/,
      unaryOperator_: /(!|~|not\b) */,
      binaryOperator: /&&|\|\||&(?=\s)|\||\^|\?|((and|or|isnt|is|in|instanceof)\b)|<<|>>>|>>|==|!=|<=|>=|<|>|\/\/|%%|\*\*|[-+*\/%]/,
      _assignmentOperator_: / *(&&|\|\||&|\||\^|\?|((and|or|isnt|is|in)\b)|<<|>>>|>>|\/\/|%%|\*\*|[-+*\/%])?= */,
      new: /new\b/,
      throw: /throw\b/,
      with: /with\b/,
      when: /when\b/,
      into: /(into|returning)\b/,
      withOrDo: /(with|do)\b/
    });
    return this.rule(
      {
        comprehensionOutputType: /(object|array|reduce|each|find)\b/,
        comprehensionIterationType: /(from|in)\b/,
        dot: /\./,
        questionMark: /\?/
      },
      { stnFactory: "SemanticTokenStn" }
    );
  };
});
