import { Buffer } from 'node:buffer'
import { Octokit } from 'octokit'

export interface RequestOptions {
  auth?: string
}

export default class Request {
  private octokit

  constructor(options: RequestOptions) {
    this.octokit = new Octokit({
      auth: options.auth,
    })
  }

  public async searchRepos(language: string, count: number = 10) {
    const { data: { items } } = await this.octokit.rest.search.repos({
      q: `language:${language}`,
      sort: 'stars',
      order: 'desc',
      per_page: count,
    })
    return items
  }

  public async getRepoReadme(owner: string, repo: string) {
    try {
      const { data: { content, encoding } } = await this.octokit.rest.repos.getReadme({
        owner,
        repo,
      })
      return Buffer.from(content, encoding as BufferEncoding).toString()
    }
    catch {
      return null
    }
  }

  public async getRepoInfo(owner: string, repo: string) {
    try {
      const { data } = await this.octokit.rest.repos.get({ owner, repo })
      return data
    }
    catch {
      return null
    }
  }
}
