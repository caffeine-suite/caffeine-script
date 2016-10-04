module.exports =
  in: (a, b) -> a in b
  mod: (a, b) -> a %% b
  div: (a, b) -> a // b
  pow: (a, b) -> a ** b
  existsOr: (a, b) -> a ? b()
