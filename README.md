# caffeine-script
CaffeineScript - experimental


# Goals

* CoffeeScript
  * improvements
  * keeping up with ES6

# Language Features Befyond CoffeeScript

* smart function @ binding (select -> or => automatically)
* enhanced blocks
  * array blocks
  * function invocation blocks
  * "blocks instead of brackets"
* eliminate the need for token matching ([], {}, "", etc)
* 'with'
* improved multi-line binary operator semantics (./+/- etc)
* improved pattern assignment
* real class inheritance
# efficiency
  * use small runtime to reduce overall code-size and increase functionality
  * reduced overhead with @-binding
* improved literate programming
* operator overloading if it can-be done efficiently
* object key interpolation: "hi#{foo}": 123
* Smart '@' binding
* map, each and for loops

# Core Improvements

### Block method invocation

If I could have one thing right now, I want this (and maybe 'with'): The ability to invoke a method
by following it with a list of arguments on separate lines:

```coffeescript
# CoffeeScript
method arg1,
  arg2
  arg3
  arg4

# CaffieneScript
method
  arg1
  arg2
  arg3
  arg4

# Javascript
method(arg1, arg2, arg3, arg4);
```

### with

Currently, the first 5-20 lines of all my files is wasted extracting values from libraries. These need to be constantly updated as I use new parts from my libraries in each file. Also, they tend to accumulate junk over time; I rarely remove extracted values no longer need.

'with' solves this
```coffeescript
# CoffeeScript
{merge} = Foundation
class Foo
  a: (b, c) ->
    merge b, c

# CaffieneScript
with Foundation
  class Foo
    a: (b, c) ->
      merge b, c
```

### Blocks instead of Brackets

I've wasted too many months (years?!?) of my life searching for mismatched begin/end-blocks, brackets, quotes, etc. CoffeeScript's indention-based blocks help, but there are still lots of places you must have matching delimiters. Let's eliminated the need for all matching delimiters and just use block intention.

strings
```coffeescript
# CoffeeScript
a = "
  This is
  my multiline
  string without newlines.
  "
b = """
  This is
  my multiline
  string with newlines.
  """
c = "To end of line string."

# CaffieneScript
a = ""
  This is
  my multiline
  string without newlines.
b = """
  This is
  my multiline
  string with newlines.
c = "" To end of line string.
```

arrays
```coffeescript
# CoffeeScript
a = [
  1
  2
  3
]

# CaffieneScript
a = []
  1
  2
  3
```

array one-liners
```coffeescript
# CoffeeScript
a = [1, 2, 3]

# CaffieneScript
a = [] 1, 2, 3
```

Object literals are still implicit, but inside other lists such as arrays, you may want to specify multiple objects on a row.
```coffeescript
# CoffeeScript
a = [
  {foo: 1}
  {bar: 2}
  {baz: 3}
]

# CaffieneScript
a = []
  {} foo: 1
  {} bar: 2
  {} baz: 3
```

function definitions
```coffeescript
# CoffeeScript
a = (foo, bar, baz, who) ->
  # ...

# CaffieneScript
a = () foo, bar, baz, who ->
  # ...
```

### Consistent Meaning for lines starting with '.' (and other binary operators)

New rules:

* starting a line with '.' applies the '.' operator to the return result of the previous line
  * think of it as-if the previous line had ()s around the whole line
  * or, think of it as like a binary operator with the lowest precedence
* indenting and starting a line with '.' acts as-if there was no newline
  * it directly apples to the last token on the previous line
  * or, think of it as like a binary operator with the highest precedence
* PROS
  * Predictability
  * Editability - changing the order of lines has a straightforward result
  * Further reduces the needs for ()s
  * Works in more (all) places (after an if statement for example)

Just '.'
```coffeescript
# CoffeeScript
(new MyClass)
.foo()

# CaffieneScript
new MyClass
.foo()
```

Indent and '.'
```coffeescript
# CoffeeScript
new MyClass.getSomeOtherClass()

# CaffieneScript
new MyClass
  .getSomeOtherClass()
```

both
```coffeescript
# CoffeeScript
(new MyClass.a(1).b(2))
.foo "hi"
.bar "bye"

# CaffieneScript
new MyClass
  .a 1
  .b 2
.foo "hi"
.bar "bye"
```

works after 'if' and all other kinds of statements
```coffeescript
# CoffeeScript
(if foo
  foo 1
else
  1)
.myMethod 123

# CaffieneScript
if foo
  foo 1
else
  1
.myMethod 123
```

same logic applies to all binary operators
```coffeescript
# CoffeeScript - 19 tokens
encodedBitmap ||
(file && readAsBinaryString file) ||
(sourceUrl && RestClient.get sourceUrl || defaultUrl)

# CaffieneScript - 15 tokens
encodedBitmap
|| file && readAsBinaryString file
|| sourceUrl && RestClient.get sourceUrl
  || defaultUrl
```

### Improved pattern assignment

CoffeeScript shortcomings:

* anything more than trivial [] and {} extraction generally isn't worth it
  * doesn't save many tokens (only saves one token in the example below)
  * it is hard to read since data flow is going right-to-left initially and then left-to-right
* requires a lot of {} and [] matching

Object extraction
```coffeescript
# CoffeeScript - 11 tokens
{Elements:{Base, Bitmap}} = Engine

# CoffeeScript alt - 12 tokens
{Elements} = Engine
{Base, Bitmap} = Elements

# CaffieneScript - 7 tokens
Engine extract Elements extract Base, Bitmap

# alt
# PRO: 5 less tokens, data-flow consistent with text-flow
Engine extract Elements extract
  Base
  Bitmap
```

Array extraction
```coffeescript
# CoffeeScript - 9 tokens
[a, b, c] = myArray

# CaffieneScript - 8 tokens
myArray extract [] a, b, c

# alt - 6 tokens
myArray extract []
  a
  b
  c
```

Conditional extraction
```coffeescript
# CoffeeScript - 7 tokens
{Elements} = Engine if Engine

# CaffieneScript - 4 tokens
Engine extract? Elements
```

Nested conditional extraction
```coffeescript
# CoffeeScript - 16 tokens
{Elements:{Base, Bitmap}} = Engine if Engine?.Elements

# CaffieneScript - 9 tokens
Engine extract? Elements extract? Base, Bitmap
```

Default extraction
```coffeescript
# CoffeeScript - 24 tokens
{Elements:{Base, Bitmap}} = Engine if Engine?.Elements
Base ||= default1
Bitmap ||= default2

# Javascript - 36 tokens
var Base = (Engine && Engine.Elements && Engine.Elements.Base) || default1;
var Bitmap = (Engine && Engine.Elements && Engine.Elements.Bitmap) || default2;

# CaffieneScript - 13 tokens
Engine extract? Elements extract?
  Base = default1
  Bitmap = default2
```

Function argument extraction with defaults
```coffeescript
# CoffeeScript - 14 tokens
(options = {}) ->
  {a, b} = options

# CaffieneScript - 8 tokens
(extract? a, b) ->
```

Function argument extraction, capture unextracted argument, with full defaults
```coffeescript
# CoffeeScript - 20 tokens
(options = {}) ->
  {a, b} = options
  a ||= 1
  b ||= 2

# CaffeineScript - 15 tokens
(options = {} extract a = 1, b = 2) ->
```

Works like other binary operators
```coffeescript
# CoffeeScript - 6 tokens
{a, b} = ... # long complex expression

# CaffeineScript - 4 tokens
... # long complex expression
extract a, b
```

# Other Improvements / Refinements

### Auto 'do'
Do you ever have bugs because you forgot a "do"? I do all the time. I think defaulting to 'do' will cause less bugs.

(This needs performance testing and semantic refinement.)

```coffeescript
# CoffeeScript
for a in b
  do (a) ->
    -> a

# CaffieneScript
# for-block is an implicit closure
# If a function is created in the for-block, wrap all variables
# in a closure so each iteration gets its own copy.
# Only capture variables first-assigned in the for-block and not used outside.
for a in b
  -> a
```

### Smart '@' binding

Basically, make '->' work more consistently with other languages. Most the time we shouldn't have to think about '@' binding. Only in rare occasions should we have to override the default.

* In class definitions and not inside other explicit functions, -> works like CoffeeScript
* Inside an explicit function definitions, -> binds '@' to its enclosing scope. (like => in CoffeeScript)
* Overrides
  * ~> is always unbounded (-> in CoffeeScript)
  * => is always bounded (just like in CoffeeScript)

```coffeescript
# CoffeeScript
class Foo extends Art.Foundation.BaseObject
  @setter
    baz: (a) -> ...

  bar: (list) ->
    list.each (a) =>
      @baz = a

# CaffieneScript
class Foo extends Art.Foundation.BaseObject
  @setter
    baz: (a) -> ...

  bar: (list) ->
    list.each (a) ->
      @baz a
```

### map, each and for loops

CoffeeScript's 'for' loop is actually a 'map.' Sometimes you don't want that. This is both a performance and a semantic problem.

(I'm still debating what the keywords should be.)

```coffeescript
# CoffeeScript
# create and return new array
(list) ->
  for element in list
    element.foo

# return list; doesn't create a new array
(list) ->
  for element in list
    @add element
  list

# CaffieneScript
# create and return new array
(list) ->
  map element in list
    element.foo

# return list; doesn't create a new array
(list) ->
  each element in list
    @add element
```

### Extended unquoted labels:

```coffeescript
# CoffeeScript
foo: 1
'foo.bar': 2
'foo-bar': 3

# CaffieneScript
foo: 1
foo.bar: 2
foo-bar: 3
```

# compare template

```coffeescript
# CoffeeScript

# CaffieneScript
```
