{a, m, w, compactFlatten, log, present} = require "art-foundation"
{Parser, Nodes, Extensions} = require 'babel-bridge'
{StatementsStn} = require '../SemanticTree'

module.exports =
  root: a
    pattern: 'end? statement* end?'
    stnFactory: StatementsStn
