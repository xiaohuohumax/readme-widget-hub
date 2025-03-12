import type { MarkdownImage } from './markdown.js'
import type { SpiderConfig } from './schema.js'
import path from 'node:path'
import { render } from 'art-template'
import fs from 'fs-extra'
import { minimatch } from 'minimatch'
import { extractImages4Markdown } from './markdown.js'
import Request from './request.js'

interface SpiderOptions {
  request: Request
  config: SpiderConfig
  distPath: string
  languageTpl: string
}

interface OwnerRepo {
  owner: string
  repo: string
}

interface RepoInfo {
  ownerRepo: OwnerRepo
  images: MarkdownImage[]
}

interface LanguageRepo {
  language: string
  repoInfos: RepoInfo[]
}

interface SpiderResult {
  startTime: string
  endTime: string
  imageCount: number
  repoCount: number
  languageRepos: LanguageRepo[]
  repoInfos: RepoInfo[]
}

class Spider {
  private spiderResult: SpiderResult = null!
  constructor(private options: SpiderOptions) {
    this.initSpiderResult()
  }

  private initSpiderResult() {
    this.spiderResult = {
      startTime: '',
      endTime: '',
      imageCount: 0,
      repoCount: 0,
      languageRepos: [],
      repoInfos: [],
    }
  }

  private matchImages(images: MarkdownImage[]): MarkdownImage[] {
    return this.options.config.imagePatterns.reduce((acc, rule) => {
      return acc.filter(image => minimatch(image.src, rule))
    }, images)
      .filter((image, index, arr) => {
        return arr.findIndex(item => item.src === image.src) === index
      })
  }

  private async getRepoInfo(ownerRepo: OwnerRepo): Promise<RepoInfo> {
    const readme = await this.options.request.getRepoReadme(ownerRepo.owner, ownerRepo.repo)
    const images = readme ? extractImages4Markdown(readme) : []
    return {
      ownerRepo,
      images: this.matchImages(images),
    }
  }

  private async spiderLanguageRepos(language: string, count: number): Promise<LanguageRepo> {
    const repos = await this.options.request.searchRepos(language, count)
    return {
      language,
      repoInfos: await Promise.all(repos.map(async ({ full_name }) => {
        console.log('Spider repo:', full_name)
        const [owner, repo] = full_name.split('/')
        return await this.getRepoInfo({ owner, repo })
      })),
    }
  }

  private saveLanguageRepo(languageRepo: LanguageRepo, distPath: string) {
    const languageMarkdown = render(this.options.languageTpl, languageRepo)
      .replaceAll(/\n{3,}/g, () => '\n\n')
    fs.outputFileSync(path.join(distPath, `${languageRepo.language}.md`), languageMarkdown)
  }

  private async handleLanguages() {
    const languagePath = path.join(this.options.distPath, 'languages')
    fs.mkdirSync(languagePath, { recursive: true })

    for (const language of this.options.config.languages) {
      console.log('Spider language:', language)

      const languageRepo = await this.spiderLanguageRepos(language, this.options.config.languageReposCount)
      this.spiderResult.languageRepos.push(languageRepo)

      this.spiderResult.imageCount += languageRepo.repoInfos.reduce((acc, { images }) => {
        return acc + images.length
      }, 0)
      this.spiderResult.repoCount += languageRepo.repoInfos.length

      this.saveLanguageRepo(languageRepo, languagePath)
      console.log('Language:', language, 'Done.')
    }
  }

  private async handleRepos() {
    if (this.options.config.repos.length === 0) {
      return
    }
    const languageRepo: LanguageRepo = {
      language: 'repos',
      repoInfos: [],
    }
    for (const r of this.options.config.repos) {
      const [owner, repo] = r.split('/')
      console.log('Spider repo:', owner, repo)
      const repoInfo = await this.getRepoInfo({ owner, repo })
      languageRepo.repoInfos.push(repoInfo)
      this.spiderResult.repoInfos.push(repoInfo)
      this.spiderResult.imageCount += repoInfo.images.length
      this.spiderResult.repoCount += 1
    }
    this.saveLanguageRepo(languageRepo, this.options.distPath)
  }

  private saveSpiderResult() {
    const jsonFilePath = path.join(this.options.distPath, 'spider-result.json')
    fs.writeFileSync(jsonFilePath, JSON.stringify(this.spiderResult, null, 2))
  }

  public async start() {
    console.log('Start spider.')

    this.initSpiderResult()
    this.spiderResult.startTime = new Date().toLocaleString()
    fs.removeSync(this.options.distPath)

    await this.handleLanguages()
    await this.handleRepos()

    this.spiderResult.endTime = new Date().toLocaleString()
    this.saveSpiderResult()

    console.log('Spider done.')
  }
}

const request = new Request({ auth: import.meta.env.VITE_GITHUB_TOKEN })
const spider = new Spider({
  request,
  config: fs.readJsonSync('./spider-config.json'),
  distPath: './dist',
  languageTpl: fs.readFileSync(path.resolve(__dirname, './template.md'), 'utf-8'),
})

spider.start().catch(console.error)