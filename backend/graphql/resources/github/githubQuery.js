'use strict'

const github = require('../../../models/github');
const GithubType = require('./githubSchema');

const fetchRepositioriesData = () => {
  return github().then((response) => {
    const parsedResponse = JSON.parse(response);
    const sourceRepositories = parsedResponse.filter((el) => el.fork === false);
    const byLang = parsedResponse.map((el) => el.language)
      .filter((el, i, arr) => arr.indexOf(el) === i && el !== null);

    return {
      username: 'tradziej',
      url: 'https://github.com/tradziej',
      repositories_count: parsedResponse.length,
      source_repositories_count: sourceRepositories.length,
      source_repositories_url: 'https://github.com/tradziej?utf8=%E2%9C%93&tab=repositories&type=source',
      repositories_languages_count: byLang.length,
    }
  }, (error) => {
    console.log(error);
  })
}

const twitterQuery = {
  type: GithubType,
  resolve: () => fetchRepositioriesData()
}

module.exports = twitterQuery;