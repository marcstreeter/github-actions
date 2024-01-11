const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");
// refer to: https://www.github.com/actions/toolkit

function run() {
  const env = exec.exec("env");
  core.notice(`env: ${env}`);
}

run();
