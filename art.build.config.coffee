module.exports =
  npm:
    description:        "caffeine-script demo project"
    dependencies:
      "art-foundation":           "^1.0.0"
      "caffeine-mc":              "^1.0.0"
      "babel-bridge":             "^1.0.0"
      "caffeine-script-runtime":  "^1.0.0"

    scripts:
      test:     "nn -s;mocha -u tdd --compilers coffee:coffee-script/register"
      perf:     "nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf"

  webpack:
    common:
      target: "node"

      # for buildling caf files:
      resolve: extensions: [".caf", ".caffeine"]
      module: rules: [test: /\.caf(feine)?$/, loader: "caffeine-mc/webpack-loader"]
