import type { BadgeTree } from '@readme-widget-hub/badge'
import type { Locale } from '@readme-widget-hub/meta'
import type { DefaultTheme, LocaleConfig, UserConfig } from 'vitepress'
import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { path2Url } from '@readme-widget-hub/utils'
// @ts-expect-error ignore export default warning
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import { defineConfig } from 'vite'
import pkg from '../package.json'
import { loadEnv } from './env'
import { watchFiles } from './plugin/watch-files'

const rootDir = path.resolve(__dirname, '../../../')

export default defineConfig(() => {
  const env = loadEnv(rootDir)
  const manager = new Manager({
    defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
    absBadgesDir: path.join(rootDir, env.VITE_BADGES_DIR),
    absMetaFilePath: path.join(rootDir, env.VITE_META_FILE_PATH),
  })

  function badgeTree2Sidebar(badgeTrees: BadgeTree[], locale: Locale): DefaultTheme.SidebarItem[] {
    const sidebar: DefaultTheme.SidebarItem[] = []
    for (const badge of badgeTrees) {
      if (badge.type === 'badge') {
        const link = path2Url(path.relative(rootDir, badge.path)).slice(0, -5)

        sidebar.push({
          text: badge.title,
          link: manager.isDefaultLocale(locale)
            ? link
            : `${locale.code}/${link}`,
        })
      }
      else {
        sidebar.push({
          text: badge.title,
          items: badgeTree2Sidebar(badge.items, locale),
        })
      }
    }

    return sidebar
  }

  function locale2DocLocale(locale: Locale): LocaleConfig<DefaultTheme.Config>[string] {
    const { doc, name } = manager.getMeta(locale)
    return {
      lang: locale.code,
      label: locale.name,
      themeConfig: {
        sidebar: badgeTree2Sidebar(manager.getBadgeTrees(locale), locale),
        sidebarMenuLabel: doc.sidebarMenuLabel,
        editLink: {
          text: doc.docBadge.editLinkText,
          pattern: ({ params }) => {
            return `https://github.com/xiaohuohumax/readme-widget-hub/blob/main/${params?.doc}.json`
          },
        },
        notFound: {
          title: doc.notFoundTitle,
          linkText: doc.notFoundLinkText,
          quote: doc.notFoundQuote,
        },
        darkModeSwitchLabel: doc.darkModeSwitchLabel,
        outline: {
          label: doc.docBadge.outlineLabel,
        },
        footer: {
          message: `${name} (v${pkg.version}) ${pkg.license} Licensed`,
          copyright: 'Copyright © 2025 xiaohuohumax',
        },
      },
    }
  }

  const locales: UserConfig<DefaultTheme.Config>['locales'] = {
    root: locale2DocLocale(manager.defaultLocale),
  }

  for (const locale of manager.getLocales()) {
    if (!manager.isDefaultLocale(locale)) {
      locales[locale.code] = locale2DocLocale(locale)
    }
  }

  const meta = manager.getMeta()

  const config: UserConfig<DefaultTheme.Config> = {
    title: meta.name,
    description: meta.title,
    outDir: path.join(rootDir, 'dist/docs'),
    locales,
    base: env.VITE_DOCS_BASE_URL,
    cleanUrls: true,
    markdown: {
      config(md) {
        md.use(MarkdownItGitHubAlerts)
      },
    },
    head: [
      ['link', {
        rel: 'icon',
        href: path2Url(path.join(env.VITE_DOCS_BASE_URL, '/logo.svg')),
      }],
    ],
    vite: {
      server: {
        port: Number.parseInt(env.VITE_DOCS_SERVER_PORT),
      },
      plugins: [
        watchFiles([
          path.join(rootDir, 'badges'),
          path.join(rootDir, 'meta.json'),
          path.join(rootDir, 'packages/render/templates'),
        ]),
      ],
    },
    themeConfig: {
      logo: '/logo.svg',
      // todo: 通过 paths 动态生成上下页
      docFooter: {
        prev: false,
        next: false,
      },
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/xiaohuohumax/readme-widget-hub',
        },
      ],
    },
  }

  return config
})
