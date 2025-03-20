import type { MarkdownImage } from '@/markdown.js'
import type { Spider as SpiderConfig } from '../schema/spider.schema.js'
import path from 'node:path'
import { extractImages } from '@/markdown.js'
import { render } from 'art-template'
import fs from 'fs-extra'
import { minimatch } from 'minimatch'
import spiderConfig from './config.json'
import Request from './request.js'
import languageTpl from './tpl.md?raw'

interface SpiderOptions {
  request: Request
  config: SpiderConfig
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
    const images = readme ? extractImages(readme) : []
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
    const DO_NOT_EDIT = '<!-- 这是由脚本自动生成的文件，请勿直接修改此文件！ -->\n\n'
    fs.outputFileSync(path.join(distPath, `${languageRepo.language}.md`), DO_NOT_EDIT + languageMarkdown)
  }

  private async handleLanguages() {
    const languagePath = path.join(this.options.config.outDir, 'languages')
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
      console.log('Spider repo:', r)
      const repoInfo = await this.getRepoInfo({ owner, repo })
      languageRepo.repoInfos.push(repoInfo)
      this.spiderResult.repoInfos.push(repoInfo)
      this.spiderResult.imageCount += repoInfo.images.length
      this.spiderResult.repoCount += 1
    }
    this.saveLanguageRepo(languageRepo, this.options.config.outDir)
  }

  private saveSpiderResult() {
    const jsonFilePath = path.join(this.options.config.outDir, 'result.json')
    fs.writeFileSync(jsonFilePath, JSON.stringify(this.spiderResult, null, 2))
  }

  public async start() {
    console.log('Start spider.')

    this.initSpiderResult()
    this.spiderResult.startTime = new Date().toLocaleString()
    fs.removeSync(this.options.config.outDir)

    await this.handleLanguages()
    await this.handleRepos()

    this.spiderResult.endTime = new Date().toLocaleString()
    this.saveSpiderResult()

    console.log('Spider done.')
  }
}

const request = new Request({ auth: import.meta.env.VITE_GITHUB_TOKEN })
const spider = new Spider({ request, config: spiderConfig, languageTpl })

spider.start().catch(console.error)