'use strict';

const request = require('request-promise');

const githubPersonalAccessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const githubUserReposUrl = 'https://api.github.com/user/repos';

module.exports = () => {
  return request.get({
    url: githubUserReposUrl,
    qs: {
      per_page: 100,
    },
    headers: {
      'User-Agent': 'API for tomasz.xyz',
      Authorization: `token ${githubPersonalAccessToken}`,
    },
  });
};
