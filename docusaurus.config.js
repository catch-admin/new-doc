// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Catchadmin 后台管理框架',
  tagline: '人生苦短 我选择 Catch🤪',
  url: 'https://catchadmin.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'catchadmin', // Usually your GitHub org/user name.
  projectName: 'catchadmin', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-ETX73YSQ1V',
          anonymizeIP: true
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.6.1',
              banner: 'none',
              badge: true
            },
            '3.0': {
              label: '3.0',
              path: '3.0',
              banner: 'none',
              badge: true
            }
          },
          onlyIncludeVersions: ['current', '3.0']
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogTitle: 'Catchadmin 博客',
          blogDescription: 'catchadmin 博客用来记录 catchadmin 相关的文章以及开发技巧',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'BLOG 列表',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} CatchAdmin, Inc.`
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        pages: {
          path: 'src/pages',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**']
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content: '<a target="_blank" rel="noopener noreferrer" href="https://www.kancloud.cn/akasishikelu/thinkphp6">thinkphp 6.0 企业级后台管理开发&源码分析</a> 有兴趣的可以购买👉',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false
      },
      navbar: {
        title: 'catchadmin',
        logo: {
          alt: 'catchadmin logo',
          src: 'img/catchadmin.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档'
          },
          { to: 'blog', label: '博客', position: 'left' },
          { href: 'https://bbs.catchadmin.com', label: '社区', position: 'left' },
          { to: 'donate', label: '赞助', position: 'right' },
          { to: 'customize', label: '技术支持', position: 'right' },

          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: 'versions', label: '所有版本' }],
            dropdownActiveClassDisabled: true
          },
          {
            type: 'search',
            position: 'right'
          }
        ]
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: 'Z82AVC6OQ9',

        //  公开 API 密钥：提交它没有危险
        apiKey: '3418e43d03b752b8354c9fa5295e4547',

        indexName: 'catchadmin',

        // 可选：见下文
        contextualSearch: true,

        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        // externalUrlRegex: 'catchadmin\\.com',

        // 可选：Algolia 搜索参数
        searchParameters: {},

        // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
        searchPagePath: 'search'

        // ……其他 Algolia 参数
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: 'docs/2.6.1/intro'
              }
            ]
          },
          {
            title: 'Discuss',
            items: [
              {
                label: '论坛',
                href: 'https://bbs.catchadmin.com'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: 'blog'
              },
              {
                label: '订阅',
                href: 'https://catchadmin.com/blog/rss.xml'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jaguarjack/catchadmin'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} catchadmin 后台管理框架 ｜ <a href="http://beian.miit.gov.cn/">苏ICP备19073956号-1</a>`
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      }
    })
}

module.exports = config
