### 0.55

NEW Comprehnsions Features

1. `with-key` clause: When `object` is the output, you can specify a separate `with-key` clause to choose what key each value should be written to.
2. range-comprehensions specified by using `array` as the output type and adding a `to` or `til` clause. There is also an optional `by` clause, and the `from` clause is now optional when to/til are present. The default value for `from` is 0. The default value for `by` is either 1 if to/til is > from, otherwise it's -1.

Examples:

```coffeescript
#### 1.
object v from [1,2,3] with-key "a#{v}"
# out: a1: 1, a2: 2, a3: 3

#### 2.
array to 5                     # [] 0 1 2 3 4 5
array to 5 by 2                # [] 0 2 4
array til 5                    # [] 0 1 2 3 4
array to 5 with 1              # [] 1 1 1 1 1 1
array a to 5 when a %% 2 == 0  # [] 0 2 4
array from 2 to 5              # [] 2 3 4 5
```


SEMANTIC CHANGE in Comprehensions

1. The default key-value when iterating FROM an array TO an object is the VALUE, not the INDEX
2. Assigning to the value-parameter in the when-block no longer affects the default with-block

Examples:

```coffeescript
#### 1.
object [1,2,3] with true
# out: 1: true, 2: true, 3: true

#### 2.
array v from myList when v = v.myMethod()
# is NOW the same as this:
array v from myList when v.myMethod()

# it WAS, the same as this:
# array v from myList when v.myMethod() with v.myMethod()
# except it only called myMethod once.
```

### 0.54

NEW structuring options:

```coffeescript
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