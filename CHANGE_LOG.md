### 0.52.1

```
FIXED:
  This:
    topic: if foo then a: 1
    colors: 3
  Should outoput:
    { topic: foo ? { a: 1 } : undefined, colors: 3 }
  Instead it generates:
    { topic: foo ? { a: 1, colors: 3 } : undefined }

FIXED: Should Compile:
  bar
  /1/

FIXED: Should compile to identical JS
  a |= 0  # caffeinescript
  a |= 0; // javascript

  Also fixed: ^=, >>=, <<=, >>>=

FIXED: "when" should expect a BLOCK, not a VALUE:
  this:
    find v, k in searchUser when
      a
      b
  should be geneate a when-function like:
    () => {a; return b;}

FIXED: "when" one-liner should handle ';' correctly:

  find v, k in searchUser when log k; test k

  should generate when-function:
    () => {log(k); return test(k);}
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