const sync = require("child_process").spawnSync;
const CONSTANTS = require("./constants");

const Process = {
  version: function (library) {
    const version = sync("npm", ["view", library, "version"]).stdout.toString("utf8").replace("\n", "");
    return version;
  },
  // should return the size in the KB - default unit
  size: function (library, libraryWithVersion) {
    const figureout = sync("du", ["-h", `${CONSTANTS.DIRECTORY}/${libraryWithVersion}/${library}/node_modules`]).stdout
      .toString("utf8")
      .replace(/\t/g, "--");
    if (figureout) {
      const result = figureout.split("\n");
      const totalModule = result[result.length - 2].split("--")[0];

      // convert to KB - default unity
      if (totalModule.indexOf('B') > 0) {
        let conversion = totalModule
          .substring(0, totalModule.indexOf('B'));
        return conversion/1000;
      }

      // remove the K symbol
      if (totalModule.indexOf('K') > 0) {
        let conversion = totalModule
          .substring(0, totalModule.indexOf('K'))*1;
        return conversion;
      }

      // set the same unity = unity pattern is KB.
      // MB to KX = multiply per 1100.
      if (totalModule.indexOf('M') > 0) {
        let conversion = totalModule
          .substring(0, totalModule.indexOf('M'))
          .replace(',', '.') * 1100;
        return conversion;
      }
    }
    return 0;
  },
  sizeComparison: function (library) {
    const versions = sync("npm", ["view", library, "versions", "--json"])
      .stdout.toString("utf8")
      .trim()
      .replace(/\n/g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "")
      .replace(/'/g, "")
      .replace(/"/g, "")
      .split(",");

    // check if exists more than 3 versions.
    const comparison = versions.length >= 3 ?
      versions.slice(versions.length - 3, versions.length) :
      versions;

    // catch the first of the 3 versions to find the
    // previous version.
    const first = comparison[0].trim().substr(0, 1);
    let previous = [];

    let i = versions.length;
    while (i >= 0) {
      if (versions[i]) {
        if (versions[i].trim().substring(0, 1) < first) {
          previous.push(versions[i].trim());
          i = -1;
        }
      }
      i--;
    }
    return previous.concat(comparison);
  }
}

module.exports = Process;