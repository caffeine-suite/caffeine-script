# BIG PROBLEMS

Comment Preprocessing has to go:

This:

```coffeescript
"""
  abc
## comment
```
Currently compiles to: 

```coffeescript
"abc\n## comment"
```

The comment should not be in the string!

OH NOES!

Also,

```coffeescript
"""
  abc
    ## comment
```

Currently compiles to: 

```coffeescript
"abc\n## comment"
```

The comment SHOULD be in the string, but it should have 2 spaces first.

I tried just stripping comments in the preprocessor, but that breaks the
second example above.

The real solution looks like this: Every block sub-parsed, other than literals
like string-blocks or comment-blocks themselves, needs something akin to the
current preprocess step: Any under-indented comments should be up-indented to
the base of the sub-block. I -think- that'll solve it.

# SEMANTIC TODO

```coffeescript
a = 10
while a > 0
  b = a
  a--
```

This should have "let a" outside the while, but should have "let b" inside, like
all the comprehensions.

---------
```
result extract colorInfo extract colorMap
```

SHOULD extract colorInfo. Notes:

1. ```> result extract colorInfo, colorInfo extract colorMap```
  is just weird
2. ```> (a extract b) ->```
  That sets 'a' even though it is an intermediate value.

However, I'm OK with the following not setting 'b':

```
> a extract b.c
```

# SHOULD COMPILE

I think the problem is the trailing comments:

```coffeescript
switch subject
  when :mailbox     then true   # the mailbox is unavailable
  when :mailSystem  then true   # the mail system is unvailable
  when :addressing  then true   # the address is bad (i.e. there is no mailbox)
  when :security    then false  # could just be that the server doesn't like our IP
  when :network     then false  # by definition, temporary failure, probably should never be a clientFailure
  when :protocol    then false  # means the server thinks WE broke protocol
  when :content     then false  # means the server doesn't like our content - since we weren't really sending any, something weird happend
  else false                    # something weird happened
```


---

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

  {}
    a
    b
  = myObject
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

# SHOULD NOT COMPILE

```coffeescript
a = private: 1
{private} = a
console.log private
```
---
I need to test all assigns to ensure they aren't in &javaScriptReservedWords.

```coffeescript
foo (a)->
  .bar

testUpdatesAfterBillsAndAlicesMessages = =>
  @testCreateBillsMessage()
  .then @testCreateAlicesMessage
  .then (message) =>
    .then @setup

```

---
```coffeescript
App extends FluxComponent
```


# WRONG COMPILE

```coffeescript
# THIS: 
-a**2

# SHOULD BE: 
-(a**2)
```
---
```coffeescript
if i == cats.length - 1 then Promise.then -> action event, props else {}
# "action event, props" should be inside the .then funciton
```
---
Should just become: -1 (-01 is illegal in JavaScript)

```coffeescript
-01
```


---
```coffeescript
array item in list.sort (a, b) -> b - a when item

# Should NOT be:
Caf.array(list.sort(function(a, b) {})(b - a), null, item => item);

# Should be:
Caf.array(list.sort(function(a, b) {return b - a}), null, item => item);
```