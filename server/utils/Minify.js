const Process = require("../utils/Process");

// About the minify and gzip value,
// I had some problems to bring this data during
// my development during the weekend. So, I hard coded
// the number to not break the layout.
// I understood how to implement the minify and gZip,
// but I need more time to implement the calls here.

async function run(library) {
  const webpack = require('webpack');
  const CONSTANTS = require("./constants");
  const path = require('path');
  let configMinified = [];

  function runWebPack(library, version) {
    configMinified.push({
      entry: `./${CONSTANTS.DIRECTORY}/${library}@${version}/${library}`,
      output: {
        filename: `${library}@${version}.js`,
        path: path.resolve(__dirname, 'dist')
      }
    });
  }

  Process.sizeComparison(library).forEach((lib) => {
    runWebPack(library.trim(), lib.trim());
  });

  const compiler = webpack(configMinified)
  compiler.run();

  return 'executed';
}

module.exports = run;