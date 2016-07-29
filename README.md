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

#### Extended unquoted labels:

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

#### Blocks instead of brackets

I've wasted too many months (years?!?) of my life searching for mismatched begin/end-blocks, brackets, quotes, etc. CoffeeScript's indention-based blocks help, but there are still lots of places you must have matching delimieters.

Strings
```coffeescript
# CoffeeScript
a = "This is\nmy multiline\nstring."

# CaffieneScript
a = ""
  This is
  my multiline
  string.
```

Arrays
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

Objects
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

Functions
```coffeescript
# CoffeeScript
a = (foo, bar, baz, who) ->
  # ...

# CaffieneScript
a = () foo, bar, baz, who ->
  # ...
```

#### Improved multi-line Binary Operators

```coffeescript
# CoffeeScript
encodedBitmap || if file
  readAsBinaryString file
else if sourceUrl
  RestClient.get sourceUrl

# CaffieneScript
encodedBitmap
|| file && readAsBinaryString file
|| sourceUrl && RestClient.get sourceUrl
```

#### Improved pattern assignment

Fix shortcomings:

* data flow is both left-to-right and right-to-left
* anything more than trivial [] and {} extraction doesn't save any tokens
* elliminate need to match {}s and []s

Object extraction
```coffeescript
# CoffeeScript
{Elements:{Base, Bitmap}} = Engine

# CaffieneScript
# PRO: 4 less tokens, data-flow consistent with text-flow
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

Function argument extraction, capture unextracted argument, with full defautls
```coffeescript
# CoffeeScript - 20 tokens
(options = {}) ->
  {a, b} = options
  a ||= 1
  b ||= 2

# CaffeineScript - 15 tokens
(options = {} extract a = 1, b = 2) ->
```

#### Auto 'do'
This needs performance testing and semantic refinement. However, I often have bugs because I forgot a "do". I think defaulting to 'do' will cause less bugs.

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


#### with

* Instead of: The first 5-20 lines of every file is just code for extracting values from libraries. These need to be constantly updated as I use new parts from my libraries in each file. Also, they tend to accumulate junk over time. I rarely remove extracted values no longer need.
* Auto extract from libraries using 'with'

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


#### compare template

```coffeescript
# CoffeeScript

# CaffieneScript
```
