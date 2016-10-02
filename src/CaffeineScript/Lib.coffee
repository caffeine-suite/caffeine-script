{defineModule} = require 'art-foundation'

defineModule module,

  escapeNewLines: (string) -> string.replace /\n/g, "\\n"

  escapeUnEscapedQuotes: (string, quote = '"') ->
    string.replace ///
    (
      [^#{quote}\\]*
      (?:
        \\.[^#{quote}\\]*
      )*
    )#{quote}
    ///g, "$1#{quote}"
