import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config = {
  title: 'NebulaGraph Database Manual',
  tagline: 'Documentation for NebulaGraph Database',
  favicon: 'https://docs-cdn.nebula-graph.com.cn/figures/favicon.ico',
  url: 'https://chrischen2023.github.io',
  baseUrl: '/doc-test/',

  organizationName: 'ChrisChen2023',
  projectName: 'doc-test',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: { label: 'English' },
      zh: { label: '中文' }
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/vesoft-inc/nebula-docs/edit/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.10.0',
              path: '3.10.0',
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-7YZEG0W61R',
          anonymizeIP: true,
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig: {
    image: 'https://docs-cdn.nebula-graph.com.cn/figures/vesoft-nebula-logo-white22-12-21.png',
    navbar: {
      title: 'NebulaGraph',
      logo: {
        alt: 'NebulaGraph Logo',
        src: 'https://docs-cdn.nebula-graph.com.cn/figures/vesoft-nebula-logo-white22-12-21.png',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Manual' },
        { type: 'docsVersionDropdown', position: 'right' }, 
        { type: 'localeDropdown', position: 'right' },      
        { href: 'https://github.com/vesoft-inc/nebula', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2018 - ${new Date().getFullYear()} NebulaGraph - <a href="#__consent">Change cookie settings</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;