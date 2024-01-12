const core = require("@actions/core");
const github = require("@actions/github");
// refer to: https://www.github.com/actions/toolkit

async function run() {
  const inputBranch = core.getInput("branch", { required: true });
  const inputRepo = core.getInput("repository", { required: true });
  const inputToken = core.getInput("auth_token", { required: true });
  const [repo_owner, repo_name] = inputRepo.split("/");
  const octokit = github.getOctokit(inputToken);

  try {
    // per ref: https://github.com/actions/toolkit/blob/main/packages/github/README.md
    // per ref: https://github.com/octokit/octokit.js?tab=readme-ov-file#octokitrequest
    // per ref: https://github.com/octokit/octokit.js?tab=readme-ov-file#octokitrest-endpoint-methods (not using but may want to change it to this)
    await octokit.request("DELETE /repos/{owner}/{repo}/git/refs/{ref}", {
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
