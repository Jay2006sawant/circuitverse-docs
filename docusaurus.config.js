// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CircuitVerse Documentation',
  tagline: 'Explore Digital Circuits Online',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://docs.circuitverse.org',
  // Path under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'CircuitVerse', // GitHub organization or user name
  projectName: 'CircuitVerseDocs', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Path to your sidebars configuration
          editUrl:
            'https://github.com/CircuitVerse/CircuitVerseDocs/edit/main/docs/',
          routeBasePath: '/', // Serve documentation at the site's root
        },
        blog: false, // Disable blog functionality as it's not needed for this project
        theme: {
          customCss: [
            require.resolve('./src/css/theme.css'),
            require.resolve('./src/css/darkTheme.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/cvlogo.svg', // Social sharing image
      navbar: {
        title: 'CircuitVerse Docs',
        logo: {
          alt: 'CircuitVerse Logo',
          src: 'img/cvlogo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction', // ID of the main document
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://circuitverse.org',
            label: 'CircuitVerse Home',
            position: 'left',
          },
          {
            href: 'https://github.com/CircuitVerse/CircuitVerseDocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/introduction',
              },
              {
                label: 'Getting Started',
                to: '/chapter2/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CircuitVerse Forum',
                href: 'https://circuitverse.org/forum',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/CircuitVerse/CircuitVerseDocs/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CircuitVerse',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCAK48dCPc_QON6Y5QqqRLOg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CircuitVerse. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['javascript', 'python', 'html'], // Add any other languages as needed
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, // Allow users to toggle between light and dark modes
        respectPrefersColorScheme: true, // Automatically use system preference
      },
      algolia: {
        apiKey: 'YOUR_ALGOLIA_API_KEY', // Replace with your Algolia API key
        indexName: 'YOUR_INDEX_NAME', // Replace with your Algolia index name
        appId: 'YOUR_APP_ID', // Optional: Replace with your Algolia app ID if provided
      },
    }),
};

export default config;
