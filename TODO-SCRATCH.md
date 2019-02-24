# Big Picture TODO

I'm reaching the point of limited gains with reducing syntax. There are still a few big things left:

* Dot (.) back-refs will be huge
* Inline Types will be huge for Art.Nano.*
* `await`

Streamlining development is going to be my next focus:

* Make webpack compile errors clearer
* Try write-back mode for CaffeineMc for compile errors
* Start a campaign to really make good compile-errors (and fix the totally broken ones)
* Get help with source-maps. Why are mine ignore almost everywhere? But sometimes not?

Help with CoffeeScript conversion:

* Allow `for`, but log a DEPRICATION
* Can we make my old-style "array fromArray, (v, k) ->" lib a compile error? Right now they compile into something really broken.
* Allow `{\n\tblah\n}` both for structuring and destructuring.

Syntax Highlighting

* support the other syntax-highlighting file-type that everyone else uses
* support starting blocks with """ at the end of a line instead of only at the start
* support #{} block syntax highlighting

# To Sort
```
# IDEA:
a = switch
when foo()
when bar()
# right now, a == undefined
# could mean:
a = switch
when temp1 = foo() then temp1
when temp2 = bar() then temp2

# what-does-this-mean-for-new-'if'-switcher?
if
  foo() then
  bar() then
# I fell like that should be illegal;
# hanging prepositions feel bad :)

```
```
foo extract
  foo
  bar
# this should mean:
foo1 = foo
foo = foo1.foo
bar = foo1.bar

```
```
# should be the same:
point 0, -1
point 0  -1
```
```
foo--: 123
# should be: {"foo--": 123}
```

```
# TODO: "UnaryOperator not allowed when structuring an object" should reveal a line-number:
log {} "#{message}": bitmap.clone(), size: bitmap.size, testArea

###
ERROR in ./test/tests/Art.Engine/Core/CoreHelper.caf
Module build failed (from ../caffeine-mc/webpack-loader.js):
Error: UnaryOperator not allowed when structuring an object. Legal examples: foo.accessors, &requires and identifiers.
###
```

```coffeescript
rect 10 -5 40 50
# should be: rect(10, -5, 40, 50)
```
```coffeescript
# Shouldn't this:
log {} currentTopicChanged, currentPostChanged, postsChanged,
  post: !!post?.id
  posts: posts?.length
  topic: !!topic?.id

# be the same as this?
log {}
  currentTopicChanged, currentPostChanged, postsChanged,
  post: !!post?.id
  posts: posts?.length
  topic: !!topic?.id

```
```coffeescript
# when should share scope with the with-clause (and with-key) clause
# I think we can rework iterators JAvaScript code to use
# only one funciton instead of two, even when there is a when
# or with-key clause.
array a in b when c = a.foo
  c
```

```coffeescript
# should be legal:
A
+
  B
```

```coffeescript
# If Foo has its own Function object, global.Function will NOT
# be used! Huh.
import Foo
a is Function
```

```coffeescript
# This SHOULD 'let p' in the while-test, not in the body, assuming
# javascript lets us do that.
while p = @nextPoint
  {x, y} = p

# What about this? Should also let-p in the while-test, but trickier.
while someFun p = @nextPoint
  {x, y} = p

```

```coffeescript
# IF, SWITCH and more BLOCK options:

# can we make this legal?
if
   a
   && b

 console.log "dude"
# and for switch-when as well


# I want this, too:
if
  a
then
  console.log "dude"

# and for switch-when as well:
switch
  a
when
  b
then
  console.log "dude"

# Don't for get the new magic-if:

if
  a then b
  c then d

if foo
  is Object then e
  > 10      then f
  4 < .     then g
  .isFoo()  then h

  some.long.test .
  then i

  # ELSE OPTIONS:
  # implicit else-block:
  foo

  # explicit indented else:
  else foo

# de-indented else:
else foo
```


```coffeescript
# We should suppor this:
a extract
  b
  (c = b?.foo) extract? d
  ##
    OR
      c = b?.foo
      extract? d

# equivelent:
{b} = a
c = b?.foo
c extract? d
```

```coffeescript
# wrong compile:
///
  #{var1} |
  #{var2}

# should be: RegExp(`${Caf.toString(var1)}|${Caf.toString(var2)}`);
```

```coffeescript
# this
rect 0 -10000 100000 100000
# becomes:
rect(0 - 10000, 100000, 100000);
```

```coffeescript
# compiler ERROR
chapterPost?.postsInChapter++
```

```coffeescript
# compile ERROR
each d from lastDepth - 1 til 3
  lastLevelNumber[d] = null

```

```coffeescript
# strings in object-construction should either:
#   be an error << MY GUT says error
#   or, be: [myString]: myString
PostDate {}
  @post
  :row :childrenCenterRight
  oneLine:  true
  size:     wcw: 1, h: gridSize * 2
  color:    TextPalette.white.secondary

```

```coffeescript
# generates invalid javascript: {copy-to-clipboard: require('copy-to-clipboard')}
{} &copy-to-clipboard
```

```coffeescript
array a in things when a &&
  true

# AHEM. That should NOT be:
# > Caf.array(things, null, a => a) && true
# It should either be an error, or it should be what I was wanting:
# > array a in things when a && true

```

```coffeescript
# hmm, ES6 is so dumb
assert.eq
  (a = d) -> a
  .length
  1 # but ES6 says its 0
# we could just move all defaults inside the body,
# as it should be. Adding defaults should not change the external API! WTF?!?
# This is a problem for my fastBind function which needs to know the number of args a function has
```
---
I think the following code is solvable if we make the "comma-then-block-extends-list" an optional comma. I -think- it'll work.

```coffeescript
# this:
a :string
  b
# should probably be this:
a :string, b
# not: a(:string)(b)
```
---


```coffeescript
# let's do this soon:
{@foo} = bar
bar extract @foo
```

```coffeescript
# extract should support '?' and '||/or'
# we should ALSO support these options for function defaults
# extract ? vs = vs ||
a extract
  b ?= :default  # default-if-undefined-or-null
  c = :default   # default-if-undefined
  d ||= :default # default-if-false
```

```coffeescript
# extract should set defaults no matter what
o = a extract?
  d = :noD
# d AND o should == :noD when !a?

# should apply recursively:
o = a extract?
  b extract?
    d = :noD
# o, b, and d should == :noD when !a?

# should apply recursively:
o = a extract?
  b = c extract?
    d = :noD
# o, b, and d should == (if c? then c.d else :noD) when !a?
```

```coffeescript
# TODO: - word-string-interpolation:
:foo#{bar}
# should be: `foo${bar}`
```

```coffeescript
# TODO:
{}
  baz
  {foo, fun} = bar
# should be: {baz: baz, foo: bar.foo, fun: bar.fun}
{}
  baz
  bar extract foo, fun
# should be: {baz: baz, fun: bar.fun}


```coffeescript
# this code puts an 'if' into the function arguments rather than a
# ?-: trinary...
class Foo
  render: ->
    super
      if true then "foo"
```

```coffeescript
###
  directory structure:
    thisFile.caf
    .DotSubdir/index.js

###
&DotSubdir
# Should generate: require('./.DotSubdir')
```
---
```coffeescript
# bad regexp detect
rect a.left, a.top, a.w/2, a.h/2
```

---
```coffeescript
# regex needs interpolation blocks:
///
  hi #{}
    myString + "foo"
```


# Improvements
```coffeescript
{} a = b = 1
# Should be:
# temp = 1; {a: temp, b: temp}
```

```coffeescript
# in-array should work
array a in-array b
```
---
```coffeescript
  {
    a
    b
  } = myObject

  {
  a
  b
  } = myObject

  {
    hi: 1
  }

  {}
    a
    b
  = myObject
```




# Comment Todo

The real solution looks like this: Every block sub-parsed, other than literals
like string-blocks or comment-blocks themselves, needs something akin to the
current preprocess step: Any under-indented comments should be up-indented to
the base of the sub-block. I -think- that'll solve it.

```coffeescript
# extra-indented comments should be ignored
->
    # extra indented first comment
  foo
```



# SEMANTIC TODO

### Extract Todo

`extract` in comprehensions and function definitions:

```coffeescript
# these should all be equivalent
(a extract b) ->
(extract b) ->

# IDEA
{b} ->

# these should all be equivalent
each a from c with a.b
each a extract b from c
each extract b from c

# IDEA
each a.b from c
each .b from c
```











# Generates invalid javascript:

```coffeescript
class ImikimiStyles extends &ArtSuite.HotStyleProps || Object
```

---

```coffeescript
import &StandardImport

authorizedSync = (request) ->
  !!if Neptune.Art.Config.configName == "Production"
    request.session.userId in config.curators
  else
    present request.session.userId
```




# SHOULD COMPILE

```coffeescript
new class FakeSocket
```

---

```coffeescript
(-> arguments.length)()
```
---
```coffeescript
[].slice 0, 100
```
---

```coffeescript
{@getPriority} = options
```




# SHOULD NOT COMPILE

```coffeescript
(a.b) -> a
```

---

```coffeescript
# simplest example
foo (a)->
  .bar
```

Above one is super tricky! The function definition correctly fails to match the indented block starting with a dot-line-start, but then the indented-dot-line-start happily accepts it. It actually could be considered legal! However, it's horrific to my eyes. It breaks principle-of-least-surprise badly.

I think we need "match-block-or-no-block" to solve this.

NOTE: It isn't just dot-line-starts. This also fails fore operator-line-starts.

---
```coffeescript
App extends FluxComponent
```





# WRONG COMPILE

```coffeescript
(a || b)
  c

# should be:
(a || b)(c);
```
---

```coffeescript
object v, k with-key lowerCamelCase k.replace /^posterText/, '' in a: 1 b: 2

# should be the same as:
object v, k in a: 1 b: 2 with-key lowerCamelCase k.replace /^posterText/, ''

```
---

```coffeescript
# THIS:
-a**2

# SHOULD BE:
-(a**2)
```


---

```coffeescript
if i == cats.length - 1 then Promise.then -> action event, props else {}
```

`action event, props` should be inside the `.then` funciton. The problem probably comes from this parse error:

```coffeescript
# does not parse!
if a then -> c else d
```



---
```coffeescript
array item in list.sort (a, b) -> b - a when item

# Should NOT be:
Caf.array(list.sort(function(a, b) {})(b - a), null, item => item);

# Should be:
Caf.array(list.sort(function(a, b) {return b - a}), null, item => item);
```

Probably same problem as above:

```coffeescript
# this does not parse!
array item in -> a when item
```

# Improved Parse Errors

```
# should show <here> right before &&&, not at start of line
"before#{&&&}after"
```
