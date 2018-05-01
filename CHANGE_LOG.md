### 0.54

NEW structuring options:

```
{@}         # {} this: @
{foo 123}   # {} foo: foo 123
{foo = 123} # {} foo: foo = 123
{&foo}      # {} foo: &foo
```

### 0.52.1

```
CHANGE: "when" now expects a BLOCK, not a VALUE:
  this:
    find v, k in searchUser when
      a
      b

  is now equivelent to:
    out = []
    each v, k in searchUser
      a
      out.push v if b

FIXED:
  Compiling this:
    topic: if foo then a: 1
    colors: 3

  Now correctly outputs:
    { topic: foo ? { a: 1 } : undefined, colors: 3 }

  Instead of:
    { topic: foo ? { a: 1, colors: 3 } : undefined }

FIXED: This compiles now:
  bar
  /1/

FIXED: Compiles to identical JS, now:
  a |= 0  # caffeinescript
  a |= 0; // javascript

  Also fixed: ^=, >>=, <<=, >>>=

FIXED: "when" one-liner now handles ';' correctly:

  find v, k in searchUser when log k; test k

  is now equivelent to:
    out = []
    each v, k in searchUser
      log k
      out.push v if test k
```

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