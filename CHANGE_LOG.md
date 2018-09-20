### 0.65

##### NEW: Comprehension efficiency options

To support source-container-type detection. CaffeineScript uses the CaffeineScriptRuntime library to implement comprehensions. This requires creating and passing functions for with-clauses and when-clauses, which can be very slow sometimes in JavaScript.

Now, CaffeineScript supports more normal, inline iteration without external function calls. You just have to specify what the source-type is. Here's how:

```coffeescript
# inline-array iteration
array from-array myArray
array from myArray by 1   
# adding by, short or skip clauses is an alternative way to force from-array iteration

# inline-object iteration
array from-object myObject
```

##### NEW: `to/til` support for all comprehension types.

Previously, only `array` was supported.

```coffeescript
object til 4  # returns 0:0 1:1 2:2 3:3
find til 4    # returns 1, the first trueish value
each til 4    # returns 4, the value pass into to/til
```

##### NEW: `by` clause for array-iteration - including reverse iteration:

```coffeescript
array myArray by 2  # grab every other element starting at the myArray[0]
array myArray by -1 # return a new array, reversed
```
> Note: Non-constant by-clauses are only supported with til/to iteration.

##### NEW: `short` and `skip` clauses for array-iteration:

```coffeescript
array myArray skip 1       # skip the first element
array myArray short 1      # do all but the last element
array myArray skip 2 short 1  # skip the first two, don't don the last 

array myArray by 2         # select the even elements
array myArray by 2 skip 1  # select the odd elements
```
> Note: When using `by` and `short` or `skip`, the short and skip are only affect by the by-clause's sign, not its magnitude. e.g. `skip 1` always starts at index 1 when `by > 0` and always starts at index length - 2 when `by < 0` whether by is 2, 10 or 100.

##### NEW: `reduce` comprehensions

Reduce, like find, is a little special compared to the other comprehensions. 

* **reduce comprehension variables:** The reduce variables are different from all the other comprehension types. They are: `accumulator, value, key`
* **reduce when-clause:** is evaluated for every *non-undefined value* (not every value, as with other comprehensions). Note, null-values work normally, only undefined values are special.
* **reduce with-clause:** is only called when *both accumulator and value are non-undefined* (and, if there is a when-clause, it returned truish). Again, null-values are passed through, only undefined-values are special.
* **reduce accumulator:** This is the new and interesting part. The accumulator is initialized with the inject-clause's value or undefined if there is no inject-clause. It is then updated with the return-value of every with-clause invocation.
* **reduce default-with-block:** returns the first variable just like all other comprehensions, except in this case, that means the accumulator, not the source-value.
* **reduce sources:** currently only the `from` clause is supported. The following clauses are not supported yet: `from-array / from-object / to / til`

Examples:

```
reduce accumulator, value from 1 2 3 inject 0 with accumulator + value
# > 6

reduce 1 2 3                            # > 1
reduce a, v from [] with a + v          # > undefined
reduce a, v from [] with a + v inject 0 # > 0
reduce a, v from [] 1 with a + v        # > 1
reduce a, v from 1 2 3 with a + v       # > 6
```

### 0.58

NEW: Extract is partially supported:

```
basic:
  a extract b
  # let b; b = a.b;

  a extract b, c
  # let b, c; b = a.b, c = a.c;

extract in expressions:
  c = a extract b
  # let c, b; c = b = a.b;

  d = a extract b, c
  # let d, b, c; d = (b = a.b, c = a.c);

nested extracts:
  a extract b extract c
  # let c, cafTemp; cafTemp = a.b, c = cafTemp.c;

  a extract b extract c extract d
  # let d, cafTemp, cafTemp1; cafTemp = a.b, (cafTemp1 = cafTemp.c, d = cafTemp1.d);

  d = a extract b extract c
  # let d, c, cafTemp; d = (cafTemp = a.b, c = cafTemp.c);

defaults:
  a extract b = c
  # let b, cafTemp; b = (undefined !== (cafTemp = a.b)) ? cafTemp : c;

extract-as:
  a extract b as c
  # let c; c = a.b;

conditional extraction:
  a extract? b
  # let b; Caf.exists(a) ? b = a.b : undefined;

  a extract b extract? c
  # let c, cafTemp; cafTemp = a.b, Caf.exists(cafTemp) ? c = cafTemp.c : undefined;

pathed extraction:
  a extract b.c
  # let c; c = a.b.c;
```

### 0.57

NEW: Structuring with existance-test-accessors is now allowed. Ex: {a?.b}

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