// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Catchadmin 后台管理框架',
  tagline: '人生苦短 我选择 catch🤪',
  url: 'https://catchadmin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          includeCurrentVersion: true,
          lastVersion: undefined,
          versions: {
            current: {
              label: '2.6.1',
              path: '2.6.1',
              banner: 'none',
              badge: true
            },
            '3.0': {
              label: '3.0',
              path: '3.0',
              banner: 'unreleased',
              badge: true
            },
          },
          onlyIncludeVersions: ['current', '3.0'],  
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogTitle: 'Catchadmin 博客',
          blogDescription: 'catchadmin 博客用来记录 catchadmin 相关的文章以及开发技巧',
          postsPerPage: 20,
          blogSidebarTitle: '文章列表'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ]
        },
      }),
      
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'catchadmin',
        logo: {
          alt: 'My Site Logo',
          src: 'img/catchadmin.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {href: 'https://bbs.catchadmin.com', label: '社区', position: 'left'},
          {to: '/donate', label: '赞助', position: 'right'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: '所有版本'}],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: '/docs/2.6.1/intro',
              },
            ],
          },
          {
            title: 'Discuss',
            items: [
              {
                label: '论坛',
                href: 'https://bbs.catchadmin.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jaguarjack/catchadmin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} catchadmin 后台管理框架 ｜ <a href="http://beian.miit.gov.cn/">苏ICP备19073956号-1</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      },
    }),
};

module.exports = config;
