# CaffeineScript

CaffeineScript programming language that compiles to JavaScript. I'm taking the ideas in CoffeeScript and making a next-generation langauge.

# Philosophy

I'm making this language for me, much as Matz did with Ruby. If you agree with the philosophy behind the language, maybe it's for you too.

#### Designer language

IMO most programming tools are poorly designed. I don't mean to be too harsh on all the awesome effort so many people have done before me, but there is more to being well designed than simply being consistent, feature-rich, or even elegant. Take a look at the Apps which win Apple Design awards and compare them to programming tools. Programming tools, including Apple's, tend to be swiss army knives with razor blades sticking out. For some, it is a badge of honor to know how to navigate all those sharp edges to make the tool hum. I think that's crazy.

My design philosophy: http://www.essenceandartifact.com/2014/07/amazingly-great-design-howto.html

#### Primary design goal: minimize effort over the entire lifecycle of a product

Programming is the ultimate lever. Programming is both a tool and a meta-tool. Improving programming has an exponetial effect on productivity. My goal is to minimize the effort, mental, physical, and time, does it take to build, test, and maintain products where the codebase is a major component.

#### Stragies

* fun & pleasurable to use
* designed to be read
* minimize tokens without sacrifcing clarity
* big and small
  - How small or big should the language be?
  - With CaffeineMC, I thankfully don't have to answer this question. Everyone can choose for themselves.

#### From RUBY

Ruby is probably still my favorite language, but I don't code in it much anymore for various reasons. None the less, I will take queues from Matz wherever possible.

- Principle of Least Surprise
 - Yukihiro Matsumoto: Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, "I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise." Wait. Wait. The principle of least surprise is not for you only. The principle of least surprise means principle of least my surprise. And it means the principle of least surprise after you learn Ruby very well. For example, I was a C++ programmer before I started designing Ruby. I programmed in C++ exclusively for two or three years. And after two years of C++ programming, it still surprised me.

#### Minimize Tokens

Why I think this seemingly oversimplistic goal is powerful:

- Refactorability is the ONLY code quality metric
- Reducing code size is the easiest and often most effective way to improve refactorability.
- My overriding programming goal is intentionally simple: write less code.
- Most good programming practices reduce code-size. The rest increase clarity.
- I measure code size in tokens. It is an objective measure that is roughly proportional to the semantic complexity of the code - unlike line counts.
- "Without sacrificying clarity" is subjective.

# Goals

CoffeeScript is my baseline. I plan to make the base version of CaffeineScript close to CoffeeScript so it's easy to migrate. Broadly, here's what I hope to improve over CoffeeScript:

  * new, updated, refined features for cleaner, more expressive code
  * improved langauge consistency
  * keeping up with ES6

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

I've wasted too many months (years?!?) of my life searching for mismatched begin/end-blocks, brackets, quotes, etc. CoffeeScript's indention-based blocks help, but there are still lots of places matching delimiters are required. Let's eliminated the need for all matching delimiters and just use block indention.

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
# CoffeeScript - 16 tokens
a = [
  {foo: 1}
  {bar: 2}
  {baz: 3}
]

# CaffieneScript - 12 tokens
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

assignment
```coffeescript
# CoffeeScript
foo = bar
.fud()

# JavaScript
foo = bar.fud();

# CaffieneScript
foo = bar
  .fud()
```

assignment the other way around
```coffeescript
# CaffieneScript
foo = bar
.fud()

# CoffeeScript
(foo = bar)
.fud()

# JavaScript
(foo = bar).fud();
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
  * isn't any more token-efficient than non-pattern assignment
  * it is hard to read since data flow is going right-to-left initially and then left-to-right
* requires a lot of {} and [] matching

Object extraction
```coffeescript
# CoffeeScript - 10 tokens
{compiled:{js}} = compile()

# CoffeeScript without pattern assignment - 8 tokens
js = compile().compiled.js

# CaffieneScript - 6 tokens
compile() extract compiled extract js
```

Object extraction
```coffeescript
# CoffeeScript - 10 tokens
{Elements:{Base, Bitmap}} = Engine

# CoffeeScript alt - 12 tokens
{Elements} = Engine
{Base, Bitmap} = Elements

# CaffieneScript - 7 tokens
Engine extract Elements extract Base, Bitmap

# CaffieneScript alt - 6 tokens
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

# CaffieneScript alt - 6 tokens
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
# CoffeeScript - 15 tokens
{Elements:{Base, Bitmap}} = Engine if Engine?.Elements

# CaffieneScript - 9 tokens
Engine extract? Elements extract? Base, Bitmap
```

Default extraction
```coffeescript
# CoffeeScript - 21 tokens
{Elements:{Base, Bitmap}} = Engine if Engine?.Elements
Base ||= default1
Bitmap ||= default2

# Javascript - 36 tokens
var Base = (Engine && Engine.Elements && Engine.Elements.Base) || default1;
var Bitmap = (Engine && Engine.Elements && Engine.Elements.Bitmap) || default2;

# CaffieneScript - 12 tokens
Engine extract? Elements extract?
  Base = default1
  Bitmap = default2
```

Function argument extraction with defaults
```coffeescript
# CoffeeScript - 13 tokens
(options = {}) ->
  {a, b} = options

# CaffieneScript - 8 tokens
(extract? a, b) ->
```

Function argument extraction, capture unextracted argument, with full defaults
```coffeescript
# CoffeeScript - 19 tokens
(options = {}) ->
  {a, b} = options
  a ||= 1
  b ||= 2

# CaffeineScript - 14 tokens
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

# NOTE: Counting Tokens

I'm still refining what I consider a token. Strictly, it's what the tokenizer of a parser recognizes, but depending on how you write your tokenizer, you can alter the count.

The edge cases below could be parsed by a tokenizer either way.

* 1 token: empty brackets ```{}, [], ""```
  * why: conceptually these are single entities and, when reading code, are understood as a single, simple thing
* 1 tokens: labels ```foo: 123```
  * why: removing ':' usually breaks parsing, if not, it results in radically different semantics
* 2 tokens: trailing questionmark: ```foo?```
  * why: Removing the '?' results in another legal parse with different semantics

Below are some examples where there is not controversy. There is only one way a tokenizer could parse them:

* 3 tokens: ```[1]```

# Other Language Features Being Considered

* smart function @ binding (select -> or => automatically)
* enhanced blocks
  * array blocks
  * function invocation blocks
  * "blocks instead of brackets"
* eliminate the need for token matching ([], {}, "", etc)
* 'with'
* improved multi-line binary operator semantics (./+/- etc)
* improved pattern assignment
* Tail catch
  * ```result = doSomethingRisky() catch “it failed”```
* Enhanced class System
  * real class inheritance
    - CoffeeScript copies all class properties from the base class and definition time
      - updates to class properties after definition time are not propagated to child classes
      - @classGetters & @classSetters are not inherited at all
    - requires object instantition to look like Ruby: MyClass.new a, b, c
  * more consistent access to super and prototypes
    - @:: is a confusing concept in CoffeeScript. We can do better.
  * dynamic class creation
    - create classes with names created at runtime
  * default extends class
    - all classes without an explicit extend statement extend the same base class which in turn extends Object
* streamlined switch statement
* new string literals
  * I’d like to add something like ```:foo == “foo”```, but I want to look ad ES6 'symbols' first
  * I’d like to add some syntax like Ruby's: %w{a long word list becomes array of strings}
* efficiency & performance
  * use small runtime to reduce overall code-size and increase functionality
  * reduced overhead with @-binding
  * faster (a...) ->
  * 'real class inheritance' will be faster
* improved literate programming
* operator overloading if it can-be done efficiently
* object key interpolation: "hi#{foo}": 123, ('this' + a): 123
* Smart '@' binding
* map, each and for loops
* streamlined "require"
* make ranges more like ruby ranges
  - can be used anywhere
    - j...k
    - {begin: j, end: k, excludeEnd: true}
  - don't need brackets []
    - for i in j...k
* I do like the idea of fixing the "a + b" vs “a +b” ambiguity. Plus as a unary operator is kinda silly. Even minus as a unitary operator may be more pain than it’s worth. When you ever need it (rarely), “0 - foo” is only one more symbol.
* CoffeeScript compiler errors suggests language features
  - I run into this a lot in CoffeeScript. Something I think makes perfect logical sense is illegal because, IMO, the compile is incomplete.
  - In general, when there is a compiler error for something which is logically consistent with the rest of the language (and parsing rules) suggests an opportunity for a more expressive language.

# related projects

* [Caffeine](https://www.npmjs.com/package/caffeine) ([git](https://github.com/ich/caffeine))
  - Another project forked from CoffeeScript. It hasn't been updated since 2013.
