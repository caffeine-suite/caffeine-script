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
* eliminate the need for token matching ([], {}, "", etc)
* 'with'
* improved multi-line binary operator semantics (./+/- etc)
* improved pattern assignment
* real class inheritance
# efficiency
  * use small runtime to reduce overall code-size and increase functionality
  * reduced overhead with @-binding
* improved literate programming

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
var Bitmap = (Engine && Engine.Elements && Engine.Elements.Base) || default2;

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

#### compare template

```coffeescript
# CoffeeScript

# CaffieneScript
```
