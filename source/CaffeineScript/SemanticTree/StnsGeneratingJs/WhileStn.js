"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "formattedInspect", "StnRegistry"],
    [global, require("../../StandardImport")],
    (Error, formattedInspect, StnRegistry) => {
      let WhileStn;
      return (WhileStn = Caf.defClass(
        class WhileStn extends require("../ScopeStnMixin")(
          require("../BaseStn")
        ) {
          constructor(props, children) {
            let temp, temp1, temp2;
            super(...arguments);
            this.operand = (temp = props.operand) != null ? temp : "while";
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                (temp1 = this.labeledChildren.body) != null
                  ? temp1
                  : StnRegistry.UndefinedStn();
            } else {
              this.expression = children[0];
              this.body =
                (temp2 = children[1]) != null
                  ? temp2
                  : StnRegistry.UndefinedStn();
            }
            if (!(this.body.type === "Statements")) {
              (this.body = StnRegistry.StatementsStn(this.body)).parent = this;
            }
            this.validate();
          }
        },
        function(WhileStn, classSuper, instanceSuper) {
          this.getter({
            captureResultsAs: function() {
              return this.props.captureResultsAs;
            },
            autoLetsForSourceNode: function() {
              let lets;
              return (lets = this.getAutoLets()) ? lets + "; " : undefined;
            },
            whileReturnTempVar: function() {
              let temp;
              return (temp = this._whileReturnTempVar) != null
                ? temp
                : (this._whileReturnTempVar = this.scope.uniqueIdentifier);
            },
            unaryOperator: function() {
              return this.operand === "until" ? "!" : undefined;
            },
            jsKeyword: function() {
              return this.operand === "until" ? "while" : this.operand;
            }
          });
          this.prototype.validate = function() {
            return (() => {
              switch (this.operand) {
                case "while":
                case "until":
                case "for":
                  return true;
                default:
                  return (() => {
                    throw new Error(
                      `INTERNAL: invalid control-operator: ${Caf.toString(
                        formattedInspect(this.operand)
                      )}`
                    );
                  })();
              }
            })();
          };
          this.prototype.toSourceNode = function(options = {}) {
            let expression,
              returnValueIsIgnored,
              noParens,
              operand,
              jsKeyword,
              unaryOperator,
              tempVarIdentifier,
              temp;
            expression = options.expression;
            returnValueIsIgnored = options.returnValueIsIgnored;
            noParens = options.noParens;
            temp = this;
            operand = temp.operand;
            jsKeyword = temp.jsKeyword;
            unaryOperator = temp.unaryOperator;
            this.usedAsExpression = false;
            return this.createSourceNode(
              expression
                ? returnValueIsIgnored
                  ? this.doSourceNode(
                      jsKeyword,
                      " (",
                      unaryOperator,
                      this.expression.toSourceNode({
                        noParens: true,
                        expression: true,
                        dotBase: !!unaryOperator
                      }),
                      ") {",
                      this.getSourceNodeForAutoLetsWithStatements(this.body),
                      "};"
                    )
                  : ((this.usedAsExpression = true),
                    (tempVarIdentifier = this.whileReturnTempVar),
                    this.doSourceNode(
                      jsKeyword,
                      " (",
                      unaryOperator,
                      this.expression.toSourceNode({
                        noParens: true,
                        expression: true,
                        dotBase: !!unaryOperator
                      }),
                      ") {",
                      this.getSourceNodeForAutoLetsWithStatements(this.body, {
                        returnAction: `${Caf.toString(tempVarIdentifier)} =`
                      }),
                      `}; return ${Caf.toString(tempVarIdentifier)};`
                    ))
                : [
                    jsKeyword,
                    " (",
                    unaryOperator,
                    this.expression.toSourceNode({
                      noParens: true,
                      expression: true,
                      dotBase: !!unaryOperator
                    }),
                    ") {",
                    this.getSourceNodeForAutoLetsWithStatements(this.body),
                    "}"
                  ]
            );
          };
        }
      ));
    }
  );
});
