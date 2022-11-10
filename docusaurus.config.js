// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const rlc = require("remark-link-card");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WIZnet Cloud Docs",
  tagline: "Guides and Docs for wizcloud.io", // 나중에 도메인 변경
  // url: "https://wiznet-open-cloud.github.io", // docs 도메인으로 변경
  url: "https://docs.wizcloud.io",
  // baseUrl: "/aws-wiznet-cloud-docs/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/wizfavicon.ico",
  organizationName: "Wiznet-Open-Cloud", // Usually your GitHub org/user name. 변경
  projectName: "aws-wiznet-cloud-docs", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko-kr"],
    path: "i18n",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [rlc],
          // Please change this to your repo.
          editUrl:
            "https://github.com/Wiznet-Open-Cloud/aws-wiznet-cloud-docs/tree/main",
          routeBasePath: "/",
          editLocalizedFiles: true, // 다국어 처리
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "WIZ Cloud Docs",
          src: "img/wiznet_logo_white.png",
        },
        items: [
          {
            to: "/",
            position: "left",
            label: "Documentation",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://maker.wiznet.io/",
            label: "Maker",
            position: "right",
          },
          {
            href: "https://app.wizcloud.io", // 변경
            label: "Cloud",
            position: "right",
          },
          {
            type: "dropdown",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/WiznetTeam",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/wiznettechnology",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/wiznet/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/wiznet_technology/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCAxgCSp_xA2aQ1KA2Eknvqg",
              },
            ],
            label: "Community",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          src: "img/wiznet_logo_white.png",
          alt: "WIZnet Logo",
          href: "https://wiznet.io",
          width: "100vw",
          // height: 33,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                type: "doc",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/WiznetTeam",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/wiznettechnology",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/wiznet/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/wiznet_technology/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCAxgCSp_xA2aQ1KA2Eknvqg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/wiznet",
              },
              {
                label: "Maker",
                href: "https://maker.wiznet.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WIZnet, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "groovy", "java"],
      },
      algolia: {
        apiKey: "0664a9795ced4a4b187cd8b010ec9f5d",
        indexName: "appcircle",
        appId: "MLYVQZS3BY",
        contextualSearch: false,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-40954643-12",
        anonymizeIP: true,
      },
    ],
    "docusaurus-plugin-sass",
  ],
};

module.exports = config;
