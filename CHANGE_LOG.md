## 0.52

NEW: Can use the old CoffeeScript function invocation style wheren you list some args on the first line, then a comman, then a block with the remaining args.

```coffeescript
a b,
  c

```

WHY? Makes refactoring CoffeeScript to CaffeineScript easier.

## 0.51

CHANGED: comprehension from and when-clause (and all other clauses) now accept STATEMENT blocks, not value blocks:

```coffeescript
# selects every user who's first-name is John
array {name} from users when
  [first, last] = name.split " "
  first == "John"
```

IMPROVED: if-then-else and switch-then blocks. Finally, "then" can optionally be followed by a block:

```coffeescript
if foo then
  bar()

# same as
if foo then bar()
```

Why? makes refactoring easier and less fragile.