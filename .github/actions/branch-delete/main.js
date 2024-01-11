const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  const env = exec.exec("env");
  core.notice(`env: ${env}`);
}

run();
