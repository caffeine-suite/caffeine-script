let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    getPropertySetters,
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
    BabelBridge,
    global
  ]));
  getPropertySetters = function(node, list = []) {
    let prop;
    if (node) {
      if (prop = Caf.isF(node.shouldSetProperty) && node.shouldSetProperty()) {
        list.push(prop);
      } else {
        Caf.e(node.matches, undefined, (match, k, into) => {
          getPropertySetters(match, list);
        });
      }
    }
    return list;
  };
  return function() {
    this.rule(
      {
        functionDefinition: {
          pattern: "args:argsDefinition? _arrow_ body:functionDefinitionBodyBlock?"
        }
      },
      {
        stnFactory: "FunctionDefinitionStn",
        stnProps: function() {
          return { bound: this._arrow_.text.match(/=>/) };
        }
      }
    );
    this.rule({
      functionDefinitionBodyBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock()
    });
    this.rule(
      { argsDefinition: { pattern: "openParen_ argDefList? _closeParen" } },
      { stnFactory: "FunctionDefinitionArgsStn" }
    );
    this.rule({
      argDefList: [
        { pattern: "argDef _comma_ argDefList" },
        { pattern: "argDef _ argDefList" },
        { pattern: "argDef" }
      ],
      argDef: {
        pattern: "at:/@/? identifier argIdentifierExtension?",
        stnFactory: "FunctionDefinitionArgStn",
        stnProps: function() {
          return {
            rest: !!(this.argIdentifierExtension != null &&
              this.argIdentifierExtension.etc),
            assignThisProperty: !!this.at
          };
        }
      },
      argIdentifierExtension: ["defaultValue", "etc"],
      defaultValue: { pattern: "_equals_ expression" }
    });
    this.rule({ etc: "'...'" });
    this.rule({
      superFunctionInvocation: [
        { pattern: "openParen_ valueList? _closeParen" },
        { pattern: "_? complexExpression" },
        { pattern: "_? valueListBlock" }
      ]
    });
    return this.rule(
      {
        functionInvocation: [
          { pattern: "conditional:'?'? openParen_ valueList? _closeParen" },
          { pattern: "conditional:'?'? _? complexExpression" },
          { pattern: "conditional:'?'? _? valueListBlock" }
        ]
      },
      { stnFactory: "FunctionInvocationStn", stnExtension: true }
    );
  };
});
