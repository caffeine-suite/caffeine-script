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

* Allow `for`, but log a DEPRECATION
* Can we make my old-style "array fromArray, (v, k) ->" lib a compile error? Right now they compile into something really broken.
* Allow `{\n\tblah\n}` both for structuring and destructuring.

Syntax Highlighting

* support the other syntax-highlighting file-type that everyone else uses
* support starting blocks with """ at the end of a line instead of only at the start
* support #{} block syntax highlighting











# To Sort
```
# naming the key in from-object doesn't work
each v, k4 from-object source
  _into[k4] = v
```

```
###
The interpolation fails to parse, which then means it becomes part of the string!

This is another example of a "hard-fail" parse. We need a way for partially-matched
sub-patterns to hard-fail (all parsing fails - well, I guess not all, but the parent
string shouldn't succeed). In this case, it should be something like:
  could-match-interpolation OR continue matching WITHOUT interpolation-start

In this case, there's another thing going on which is weird. It looks like this
shoudl parse just fine and the "b" should NOT be in the interpolation block, but
since the interpolation block starts indented, it isn't obvious that PARSING
is going to start back at the STRING-BLOCK's indention level - which means PARSING
sees the "b" as indented relative to the interpolation-block.

All of which means... we need some rule that makes more sense here. Options:

a) if the interpolation is indented with white-space, the block must be further indented
  Example:

  a
    #{} foo
      This would be in
    This would be out

b) interpolation body-block must ALWAYS be more indented than the #{}, regardless of
  what characters came before the "#{}". Example:

  a
    this is nice #{} foo
                  This would be in

    this is nice #{} foo
                 This would be out


c) #{} can always be used as a "to-the-end-of-line", but it can only consume following lines
   if all chars before it were whitespace. (extreme version of options-a)

   Example:

  a
    #{} foo
      This would be in

    this is nice #{} foo
                     Even this would be out

GUT: I'm liking option-c.

###
"""
  a
    #{} "this should be in an interpolation"
    b

```

```
1,2,3
(1,2,3)
# should be the same
```

```
a = (1;2;3)
# javascript: a = (1,2,3);
```

```
# should be an ERROR
"" invited you to join #{} getTopicTitle @topic.
# however, it becomes: "invited you to join getTopicTitle @topic."
```
```
# doesn't properly let the temp var

while inverseBlocks.pop() extract? text

# also, but slightly different - still doesn't properly 'let'
while a extract? b

```
```
find {}
# should probably return undefined...
# Why? well, we'd like to distinguish between finding and not finding:
find a in b when a == null
```
```
# IDEA: this:
if find v, k in record when allowedFields[k]
  object v, k in record when allowedFields[k]

# could be:
object-if-find v, k in record when allowedFields[k]

# array-version:
array-if-find v, k in record when allowedFields[k]

# I don't quite like that syntax, but the idea is:
# For either 'object' or 'array', return null instead of
# an empty {} or [] - if empty it would be.
# This is an optional mode; most the time I want
# that empty {} or [] so other things don't break.

# OOPS - and interesting. THIS is actually correct:
if (find  v, k in record when v? && allowedFields[k])?
  object v, k in record when allowedFields[k]
# If when we find the first k in allowedFields, and v == 0,
# the if will be false; ack! In fact, I'd like to have even v == null be OK
# I really like the idea of object-if-find now. It would be just like object,
# except it would vivify the return-object upon the first key it finds that
# passes 'when'.
```

```
# IDEA alias opportunity: found == find
# It's nice when combined with 'if'
if found v in records when v.foo?
  ...

# hey, that'z nize!
if found records with .foo?
  ...

# or if we do the object-if syntax:
object-if-found records with allowedFields[..] # .. == second param which is the key

# I kinda like it since it's more declarative-feeling vs imparative.
```
# SHOULD COMPILE
if !response.isRootRequest ||
    response.requestProps.prefetch == false ||
    response.requestProps.include == false || # DEPRICATED
    response.type == :delete

  response
```

```
# IDEA:
b = {} = a
# could be:
b = object a
# OK, so not a big savings there, but what I want is this:

{}
  {} = a
  foo: bar
  # ...

# The ability to merge "a" into the new object we are also
# merging other things into.
# Example 2:

{}
  {} = a
  {} = b
# i.e.: merge a, b
# OR equiv:
{}
  object a
  object b

# None look terribly "obvious" to me, but they are useful,
# and currently illegal...
# REALWORLD EXAMPLE: Art.Ery/Ery.caf

[]
  &Filters
  {}
    config
    pipelines
    &Session.session
    # ...

# could be:
{}
  {} = &Filters
  config
  pipelines
  &Session.session

# I like "{} = foo" best, it's consistent with what I know-i-want:
{}
  {a, b} = foo
  c: 123
# IE:
a: foo.a
b: foo.b
c: 123
```

```
# ANOTHER COOL IDEA:
c = {-a} = b
# equals
c = object v, k in b when k != :a

AND, how about this one:
c = {/^a.*/} = b
# equals
c = object v, k in b when /^a.*/.test k

# mix-and-match: (?)
c = {/^a/, -a} = b
# since that could just be this, maybe we only allow one regexp:
c = {/^a.+/} = b
# in fact, I almost think {/ /} is a special thing, since you
# can express any possible selector that way, adding special logic
# w.r.t. how separate selectors combine (is it AND or is it OR?)
# is just messy.

# NOTE, I have no idea what this means:
{/^a/i} = b # This has no side-effects and if the return is ignored...
# Probably: cpu burner
# Could be ILLEGAL, but I like to minimize what's ILLEGAL.

############################
# Another, realworld example:
# THIS
# 7 tokens
merge
  objectWithout responseProps, :dataUpdates
  {} data
# OR, only creates 1 obj, 12 tokens
out = objectWithout responseProps, :dataUpdates
out.data = data
out

# COULD BE THIS:
# NOTE: this would only create 1 object instead of 3!
# 8 tokens
{}
  {-dataUpdates} = responseProps
  data

# Here is another, current option, that only creates 1 object:
# 18 tokens
object v, k in responseProps into {} data when k != :dataUpdates && k != :data
```


```
# Should this be legal?
1 /2
# right now you have two spacing options:
1 / 2
1/2
# I just made it illegal when I fixed this:
# "1 -2" == "[1, -2]" and "a 1 -2" == "a(1, -2)"
```















# Improvements


```coffeescript
# TODO:
{}
  baz
  {foo, fun} = bar
# should be: {baz: baz, foo: bar.foo, fun: bar.fun}
# also sets: foo and bar as expected
{}
  baz
  bar extract foo, fun
# should be: {baz: baz, fun: bar.fun}
# also sets: foo and fun as expected
```

```coffeescript
# TODO: - word-string-interpolation:
:foo#{bar}
# should be: `foo${bar}`
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

-----

```coffeescript
# let's do this soon:
{@foo} = bar
bar extract @foo
```
---

```coffeescript
# regex needs interpolation blocks:
///
  hi #{}
    myString + "foo"
```

---

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

---

`break` & `return` for comprehensions























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















# Generates invalid javascript:


```coffeescript
# compiler ERROR
chapterPost?.postsInChapter++
```




















# SHOULD COMPILE

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
# compile ERROR
each from a til 3
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
###
  directory structure:
    thisFile.caf
    .DotSubdir/index.js

###
&DotSubdir
# Should generate: require('./.DotSubdir')
```


```coffeescript
# bad regexp detect
rect a.left, a.top, a.w/2, a.h/2
```


```coffeescript
array a in things when a &&
  true

# AHEM. That should NOT be:
# > Caf.array(things, null, a => a) && true
# It should either be an error, or it should be what I was wanting:
# > array a in things when a && true

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
(a || b)
  c

# should be:
(a || b)(c);
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

```
foo extract
  foo
  bar
# this should mean:
foo1 = foo
foo = foo1.foo
bar = foo1.bar
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
# TODO: "UnaryOperator not allowed when structuring an object" should reveal a line-number:
log {} "#{message}": bitmap.clone(), size: bitmap.size, testArea

###
ERROR in ./test/tests/Art.Engine/Core/CoreHelper.caf
Module build failed (from ../caffeine-mc/webpack-loader.js):
Error: UnaryOperator not allowed when structuring an object. Legal examples: foo.accessors, &requires and identifiers.
###
```

```
# should show <here> right before &&&, not at start of line
"before#{&&&}after"
```















# Should Be Legal

```coffeescript
# should be legal:
A
+
  B
```












# Ideas

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
# I feel like that should be illegal;
# hanging prepositions feel bad :)

```


















# Major Plans

### Fix Comprehension Scoping

```coffeescript
# when should share scope with the with-clause (and with-key) clause
# I think we can rework iterators JavaScript code to use
# only one funciton instead of two, even when there is a when
# or with-key clause.
array a in b when c = a.foo
  c
```

### Extract

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

### Improve While Scoping


```coffeescript
# This SHOULD 'let p' in the while-test, not in the body, assuming
# javascript lets us do that.
while p = @nextPoint
  {x, y} = p

# What about this? Should also let-p in the while-test, but trickier.
while someFun p = @nextPoint
  {x, y} = p
```

### New IF-Block

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



# Quandaries


```coffeescript
# If Foo has its own Function object, global.Function will NOT
# be used! Huh.
import Foo
a is Function
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
# We should support this:
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
# hmm, ES6 is so dumb
assert.eq
  (a = d) -> a
  .length
  1 # but ES6 says its 0
# we could just move all defaults inside the body,
# as it should be. Adding defaults should not change the external API! WTF?!?
# This is a problem for my fastBind function which needs to know the number of args a function has
```


```
class Foo
  b = []
  constructor: (a = b) ->
```
