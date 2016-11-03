{a, m, w, compactFlatten, log} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'

getPropertySetters = (node, list = []) ->
  return list unless node
  if prop = node.shouldSetProperty?()
    list.push prop
  else
    for match in node.matches
      getPropertySetters match, list
  list

module.exports = ->
  @rule
    functionDefinition: a
      pattern: "args:argsDefinition? _arrow_ body:functionDefinitionBodyBlock?"
  ,
    stnFactory: "FunctionDefinitionStn"
    stnProps: -> bound: @_arrow_.text.match /=>/

  @rule
    functionDefinitionBodyBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "functionDefinitionBodyBlockSubParse"
    functionDefinitionBodyBlockSubParse:
      pattern: "statement*"
      stnFactory: "StatementsStn"

  @rule
    argsDefinition: a
      pattern: "openParen_ argDefList? _closeParen"
  ,
    stnFactory: "FunctionDefinitionArgsStn"

  @rule
    argDefList: a
      pattern: "argDef _comma_ argDefList"
      m pattern: "argDef _ argDefList"
      m pattern: "argDef"

    argDef:
      pattern: "at:/@/? identifier argIdentifierExtension?"
      stnFactory: "FunctionDefinitionArgStn"
      stnProps: -> rest: !!@argIdentifierExtension?.etc, assignThisProperty: !!@at

    argIdentifierExtension: w "defaultValue etc"

    defaultValue:
      pattern: "_equals_ expression"

  @rule
    etc: "'...'"
