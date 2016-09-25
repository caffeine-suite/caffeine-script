module.exports =
  in: (a, b) -> b.indexOf(a) >= 0
  mod: (a, b) -> (+a % (b = +b) + b) % b