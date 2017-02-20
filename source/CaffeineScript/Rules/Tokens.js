let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function() {
    this.rule({
      _equals_: /\ *= */,
      _colon_: /\ *: */,
      _comma_: /\ *, *\n*/,
      _arrow_: /\ *[-=]> */,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      reservedWord: /(for|instanceof|import|throw|return|break|into|with|do|switch|when|if|until|try|catch|while|unless|then|else|and|or|is|isnt|in|not)\b/,
      identifier: {
        pattern: /(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)/,
        stnFactory: "IdentifierStn",
        stnProps: function() {
          return { identifier: this.toString() };
        }
      },
      unquotedString: /((?!\s)[-~!@\#$%^&*_+=|\\<>?\/.$\w\x7f-\uffff])+/,
      unaryTailOperator: /\?/,
      unaryOperator_: /(!|~|not\b) */,
      binaryOperator: /&&|\|\||&(?=\s)|\||\^|\?|((and|or|isnt|is|in|instanceof)\b)|<<|>>>|>>|==|!=|<=|>=|<|>|\/\/|%%|\*\*|[-+*\/%]/,
      _assignmentOperator_: / *(&&|\|\||&|\||\^|\?|((and|or|isnt|is|in)\b)|<<|>>>|>>|\/\/|%%|\*\*|[-+*\/%])?= */,
      new: /new/,
      throw: /throw/,
      with: /with/,
      when: /when/,
      into: /into/,
      withOrDo: /with|do/
    });
    return this.rule(
      {
        comprehensionOutputType: /object|array|reduce|each|find/,
        comprehensionIterationType: /from|in\b/,
        dot: /\??\./,
        questionMark: /\?/
      },
      { stnFactory: "SemanticTokenStn" }
    );
  };
});
