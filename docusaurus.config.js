// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Institute for Procedural Integrity', // Ваше название
  tagline: 'Deterministic Assurance for Critical Communications',
  favicon: 'img/favicon.ico',

  // Настройки для GitHub Pages
  url: 'https://aigilreh-dbt.github.io', // ЗАМЕНИТЕ на ваш URL
  baseUrl: '/Procedural-Integrity-Research-Labs/',           // ЗАМЕНИТЕ на имя репозитория
  organizationName: 'aigilreh-dbt',      // ЗАМЕНИТЕ на ваш GitHub ник
  projectName: 'Procedural-Integrity-Research-Labs',         // ЗАМЕНИТЕ на имя репо
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Можно добавить 'ru', если нужен билингвальный сайт
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Поддержка математических формул (LaTeX)
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Procedural Integrity Lab',
        logo: {
          alt: 'Lab Logo',
          src: 'img/logo.svg', // Замените логотип позже
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar',
            position: 'left',
            label: 'Research',
          },
          {
            type: 'docSidebar',
            sidebarId: 'solutionsSidebar',
            position: 'left',
            label: 'Solutions',
          },
          {
            href: 'https://github.com/your-username/my-research-lab',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Research',
            items: [
              { label: 'Track A: Semantics', to: '/docs/research/track-a-structure' },
              { label: 'Track B: Energy', to: '/docs/research/track-b-energy' },
            ],
          },
          {
            title: 'Applied Solutions',
            items: [
              { label: 'Legal Tech', to: '/docs/solutions/legal-audit' },
              { label: 'Defense & C2', to: '/docs/solutions/military-c2' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Procedural Integrity Lab. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
