const core = require("@actions/core");
const { getOctokit } = require("@actions/github");
const exec = require("@actions/exec");
// refer to: https://www.github.com/actions/toolkit

async function run() {
  const inputBranch = core.getInput("branch", { required: true });
  const inputRepo = core.getInput("repository", { required: true });
  const inputToken = core.getInput("auth_token", { required: true });
  const [repo_owner, repo_name] = inputRepo.split("/");
  const octokit = getOctokit(inputToken);

  try {
    await octokit.git.deleteRef({
      owner: repo_owner,
      repo: repo_name,
      ref: `heads/${inputBranch}`,
    });

    console.log(`Branch "${inputBranch}" deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting branch: ${error.message}`);
  }
}

run();
