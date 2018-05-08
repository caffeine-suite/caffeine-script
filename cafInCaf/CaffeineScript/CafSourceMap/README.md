### Based on

- source-map npm: https://github.com/mozilla/source-map
- SourceMap Spec: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k

### Why rewrite `source-map npm `?

- `source-map npm`'s generator isn't very performance-optimized. It creates at least 3 objects per sourcemap segment generated.
- As a single-file compiler, we can dramatically simplify the API.
- CaffeineScript generates a structure of nested arrays. Using source-map, I have to compactFlatten them first, which means creating more objects and iterating over the contents twice. Instead, `CafSourceMap.SourceNode` allows `@children` to be a string, a single SourceNode instance, or an arbitrarily nested array-structure of the two. It also allows nulls in the arrays, which are ignored.
- If a SourceNode is JUST a string, no need to create an array.
- Consistency: both column AND LINE are 0-based. I had so many off-by-one bugs with `source-map npm`!
- Simplicity: We can work in sourceIndex space most the time. Code-generation doesn't have to think about lines and columns. Only CafSourceMap needs to actually worry about lines and columns. If we don't actually generate a sourceMap, we never have to compute the lines and columns.