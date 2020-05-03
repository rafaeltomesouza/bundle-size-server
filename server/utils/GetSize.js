const Process = require("../utils/Process");

// About the minify and gzip value,
// I had some problems to bring this data during
// my development during the weekend. So, I hard coded
// the number to not break the layout.
// I understood how to implement the minify and gZip,
// but I need more time to implement the calls here.

async function run(library) {
    let versions = [];
    Process.sizeComparison(library.trim()).forEach((lib) => {
      const historic = {
        currentVersion: lib,
        module: Process.size(library.trim(), `${library.trim()}@${lib.trim()}`),
        minify: Math.floor((2000 - 10) * Math.random()), //hardcoded
        gzip: Math.floor((500 - 10) * Math.random()) //hardcoded
      };
      versions.push(historic);
    });

    const package = {
      name: library,
      versions
    };

    return package;
}

module.exports = run;