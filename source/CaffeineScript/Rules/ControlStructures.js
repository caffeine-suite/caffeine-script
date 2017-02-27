let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule(
      {
        controlStatement: [
          {
            pattern: "ifUnlessWhileUntil _ expressionWithOneLessBlock block elseClause?"
          },
          {
            pattern: "ifUnlessWhileUntil _ expression _ thenDo _ complexExpression elseClause?"
          }
        ]
      },
      {
        stnFactory: "ControlOperatorStn",
        stnProps: function() {
          let base;
          return {
            operand: this.ifUnlessWhileUntil.toString(),
            joiner: Caf.exists(base = this.thenDo) && base.toString()
          };
        }
      }
    );
    this.rule(
      {
        controlStatement: [
          {
            pattern: "/try/ _ body:complexExpression _? optionalCatch:catchClause?"
          },
          { pattern: "/try/ body:block" }
        ]
      },
      { stnFactory: "TryStn" }
    );
    this.rule({ catchClause: "/catch(?=[ \n])/ _? identifier? body:block?" }, {
      stnFactory: "CatchStn"
    });
    this.rule({
      controlStatement: {
        pattern: "/do/ _ functionDefinition",
        stnFactory: "DoStn"
      }
    });
    this.rule(
      {
        controlStatement: [
          {
            pattern: "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock"
          },
          { pattern: "/switch/ _ condition:expression? switchBody" },
          { pattern: "/switch/ switchBodyBlock" },
          { pattern: "/switch/ switchBody" }
        ]
      },
      { stnFactory: "SwitchStn" }
    );
    this.rule({
      switchBody: "switchWhen:switchWhenClause+ switchElse:elseClause?",
      thenClause: "_ /then/ _ lineOfStatements",
      switchBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "switchBody"
      })
    });
    this.rule(
      {
        switchWhenClause: [
          {
            pattern: "end? when _ whenValue:expressionWithOneLessBlock thenDo:block"
          },
          {
            pattern: "end? when _ whenValue:complexExpression thenDo:thenClause"
          }
        ]
      },
      { stnFactory: "SwitchWhenStn" }
    );
    return this.rule({
      ifUnlessWhileUntil: /if|unless|while|until/,
      thenDo: /then|do/,
      when: /when/,
      elseClause: [
        { pattern: "_else block" },
        { pattern: "_else _ complexExpression" }
      ]
    });
  };
});
