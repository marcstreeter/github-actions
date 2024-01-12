const core = require("@actions/core");
//const { context, getOctokit } = require('@actions/github');
const exec = require("@actions/exec");
// refer to: https://www.github.com/actions/toolkit

async function run() {
  const inputBranch = core.getInput("branch", { required: true });
  const inputRepo = core.getInput("repository", { required: true });
  const inputToken = core.getInput("auth_token", { required: true });
  const [repo_owner, repo_name] = inputRepo.split("/");
  core.notice(`deleting branch: ${inputBranch}`);
  core.notice(`using repo: ${inputRepo}`);
  core.notice(`using token: ${inputToken}`);
  core.notice(`using repo owner: ${repo_owner}`);
  core.notice(`using repo name: ${repo_name}`);
  // const token = process.env.GITHUB_TOKEN; // Make sure to set up a personal access token with appropriate permissions and add it as a secret in your GitHub repository
  // const sourceBranch = process.
  // const octokit = getOctokit(token);

  // const branchToDelete = 'pages';

  // try {
  //   await octokit.git.deleteRef({
  //     owner: context.repo.owner,
  //     repo: context.repo.repo,
  //     ref: `heads/${branchToDelete}`
  //   });

  //   console.log(`Branch "${branchToDelete}" deleted successfully.`);
  // } catch (error) {
  //   console.error(`Error deleting branch: ${error.message}`);
  // }
}

run();
