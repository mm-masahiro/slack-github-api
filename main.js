import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const issue = await octokit.rest.issues.get({
  owner: 'mm-masahiro',
  repo: 'profile-portfolio',
  issue_number: 135
}).then(response => {
  console.log(JSON.stringify(response.data.title))
})

