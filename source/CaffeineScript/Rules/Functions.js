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
    this.rule({ argsDefinition: "openParen_ argDefList? _closeParen" }, {
      stnFactory: "FunctionDefinitionArgsStn"
    });
    this.rule({
      argDefList: [
        "argDef _comma_ argDefList",
        "argDef _ argDefList",
        "argDef"
      ],
      argDef: {
        pattern: "at:/@/? identifier argIdentifierExtension?",
        stnFactory: "FunctionDefinitionArgStn",
        stnProps: function() {
          let base;
          return {
            rest: !!(Caf.exists(base = this.argIdentifierExtension) &&
              base.etc),
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
        "openParen_ valueList? _closeParen",
        "_? complexExpression",
        "_? valueListBlock"
      ]
    });
    return this.rule(
      {
        functionInvocation: [
          "existanceTest:questionMark? openParen_ values:valueList? _closeParen",
          "existanceTest:questionMark? _? values:complexExpression",
          "existanceTest:questionMark? _? values:valueListBlock"
        ]
      },
      {
        stnFactory: "FunctionInvocationStn",
        stnExtension: true,
        stnProps: function() {
          return { existanceTest: !!this.existanceTest };
        },
        stnChildren: function() {
          let base;
          return Caf.exists(base = this.values) && base.getStn();
        }
      }
    );
  };
});
