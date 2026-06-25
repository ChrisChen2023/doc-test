import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// ==================== 1. NebulaGraph 全量组件宏矩阵定义 ====================
const mkdocsMacros = {
  nebula: { release: '3.10.0', nightly: 'nightly', master: 'master', base20: '2.0', base200: '2.0.0', branch: 'release-3.10', tag: 'v3.10.0', name: 'NebulaGraph' },
  studio: { base111b: '1.1.1-beta', base220: '2.2.1', base300: '3.0.0', release: '3.10.0', tag: 'v3.10.0' },
  exchange: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  importer: { release: '4.1.0', branch: 'release-4.1', tag: 'v4.1.0' },
  algorithm: { release: '3.2.0', branch: 'v3.2.0', tag: 'v3.2.0' },
  sparkconnector: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  flinkconnector: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  dockercompose: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  dashboard: { release: '3.4.0', tag: 'v3.4.0', base100: '1.0.0', branch: 'release-3.4' },
  console: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  br: { release: '3.6.0', branch: 'release-3.6', tag: 'v3.6.0' },
  agent: { release: '3.7.1', tag: 'v3.7.1' },
  cpp: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  java: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  python: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  go: { release: '3.8.0', branch: 'release-3.8', tag: 'v3.8.0' },
  bench: { release: '1.2.0', branch: 'release-1.2', tag: 'v1.2.0' },
  operator: { release: '1.8.0', tag: 'v1.8.0', branch: 'release-1.8', upgrade_from: '3.5.0', upgrade_to: '3.6.0' },
  exporter: { release: '3.3.0', branch: 'release-3.3', tag: 'v3.3.0' },
  gateway: { release: '3.4.0', branch: 'release-3.4', tag: 'v3.4.0' },
  cloud: { azureRelease: '3.1.1', aliyunRelease: '3.1.1', azureLatestRelease: '3.1.0', aliyunLatestRelease: '3.1.0' }
};

// ==================== 2. 自动递归扁平化替换规则生成器 ====================
function generateMultipleReplacements(macros) {
  const multiple = [];
  for (const [component, tokens] of Object.entries(macros)) {
    for (const [key, val] of Object.entries(tokens)) {
      multiple.push({
        search: `{{${component}.${key}}}`, // 精准锁定类似 {{nebula.release}} 结构的 MkDocs 宏
        replace: String(val),              // 智能转为字符串，全量替换为对应的物理版本号
        flags: 'g'                         // 开启全局修饰符以替换页面中的所有匹配项
      });
    }
  }
  return multiple;
}

const replacementRules = generateMultipleReplacements(mkdocsMacros);

// ==================== 3. Docusaurus 主配置核心对象 ====================
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

  // ==================== 4. 注入编译时文本替换拦截插件 ====================
  plugins: [
    function docusaurusMacrosPlugin(context, options) {
      return {
        name: 'docusaurus-macros-plugin',
        configureWebpack(config, isServer) {
          return {
            module: {
              rules: [
                {
                  test: /\.mdx?$/, // 仅针对所有 .md 和 .mdx 文档进行 Webpack 预处理拦截
                  loader: 'string-replace-loader',
                  options: {
                    multiple: replacementRules // 将上方生成的全量版本映射数组一次性注入
                  },
                  include: [
                    /docs/, // 只处理基础英文包
                    /i18n/  // 以及中文等国际化多语言包，最大化提升本地开发与编译时速度
                  ],
                }
              ]
            }
          };
        },
      };
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