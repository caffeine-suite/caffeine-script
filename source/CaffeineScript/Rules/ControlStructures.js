let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule(
      {
        controlStatement: [
          "ifUnlessWhileUntil _ expressionWithOneLessBlock block elseClause?",
          "ifUnlessWhileUntil _ expression _ thenDo _ complexExpression elseClause?"
        ]
      },
      {
        stnFactory: "ControlOperatorStn",
        stnProps: function() {
          let cafBase;
          return {
            operand: this.ifUnlessWhileUntil.toString(),
            joiner: Caf.exists(cafBase = this.thenDo) && cafBase.toString()
          };
        }
      }
    );
    this.rule(
      {
        controlStatement: [
          "/try/ _ body:complexExpression _? optionalCatch:catchClause?",
          "/try/ body:block optionalCatch:catchClause?"
        ]
      },
      { stnFactory: "TryStn" }
    );
    this.rule(
      {
        catchClause: [
          "_end? /catch/ _ errorIdentifier:identifier body:block?",
          "_end? /catch/ _? body:block?"
        ]
      },
      { stnFactory: "CatchStn" }
    );
    this.rule({
      controlStatement: {
        pattern: "/do/ _ functionDefinition",
        stnFactory: "DoStn"
      }
    });
    this.rule(
      {
        controlStatement: [
          "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock",
          "/switch/ _ condition:expression? switchBody",
          "/switch/ switchBodyBlock",
          "/switch/ switchBody"
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
          "end? when _ whenValue:expressionWithOneLessBlock thenDo:block",
          "end? when _ whenValue:complexExpression thenDo:thenClause"
        ]
      },
      { stnFactory: "SwitchWhenStn" }
    );
    return this.rule({
      ifUnlessWhileUntil: /if|unless|while|until/,
      thenDo: /then|do/,
      when: /when/,
      elseClause: ["_else block", "_else _ complexExpression"]
    });
  };
});
