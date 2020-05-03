const fs = require("fs");
const CONSTANTS = require("../utils/constants");
const { onExit } = require('@rauschma/stringio');
const { spawn } = require('child_process');
const Process = require("./Process");

async function instalNpm(library, version) {
  console.log(`install ${library}@${version}`);
  const childProcess = spawn('npm',
    ['install',
      '--prefix',
      `./plugin_packages/${library}@${version}`,
      `${library}@${version}`],
    { stdio: [process.stdin, process.stdout, process.stderr] });

  await onExit(childProcess);
  return 'executed'
}

async function main(library) {
  await Promise.all(Process.sizeComparison(library).map((version) => {
    return instalNpm(library.trim(), version.trim());
  })).then((data) => console.log(data));
  return 'executed';
}

module.exports = main;