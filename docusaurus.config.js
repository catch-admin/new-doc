// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Catchadmin 后台管理框架',
  tagline: '人生苦短 我选择 Catch',
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
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
      async: true
    }
  ],
  clientModules: [require.resolve('./globalClientModule.ts')],
  plugins: [
    async function tailwindcssPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        }
      }
    },
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.js')
        // ... other options
      }
    ]
  ],
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
          editUrl: 'https://github.com/catch-admin/new-doc/tree/master',

          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            '3.0': {
              label: '3.0',
              path: '3.0',
              banner: 'none',
              badge: true
            },
            current: {
              label: '2.6.1',
              banner: 'none',
              badge: true
            }
          },
          onlyIncludeVersions: ['3.0', 'current']
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
        id: 'pro',
        content: '<a rel="noopener noreferrer" href="/docs/3.0/pro/intro">🔥专业版本发布,开业优惠,将会在下个版本功能发布后恢复原价,欢迎购买👏</a> ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true
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
            label: '🔖文档'
          },
          { to: 'blog', label: '📖博客', position: 'left' },
          { href: 'https://bbs.catchadmin.com', label: '🤝社区', position: 'left' },
          { to: '/api/intro', label: '🏆接口文档', position: 'left' },
          { to: 'disclaimer', label: '🙅‍♂️免责声明', position: 'left' },
          { to: 'https://license.catchadmin.com', label: '专业版🔥', position: 'right' },
          { to: 'cooperate', label: '技术支持💪', position: 'right' },
          { to: 'donate', label: '赞助🙏', position: 'right' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: 'versions', label: '所有版本' }],
            dropdownActiveClassDisabled: true
          },
          // { href: 'https://spark.pfecms.com', label: 'SparkShop', position: 'right' },
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
            title: '官网',
            items: [
              {
                label: '文档',
                to: 'docs/2.6.1/intro'
              },
              {
                label: '论坛',
                href: 'https://bbs.catchadmin.com'
              }
            ]
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'SparkShop 开源商城',
                href: 'https://spark.pfecms.com'
              },
              {
                label: '竖豆科技',
                href: 'https://www.ishudou.cn/'
              },
              {
                label: '美业管家',
                href: 'https://www.meiyeguanjia.com/'
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      }
    })
}

module.exports = config
