import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightUiTweaks from "starlight-ui-tweaks";
import starlightPageActions from "starlight-page-actions";

export default defineConfig({
  site: "https://starlight-ui-tweaks.dlcastillop.com",
  integrations: [
    starlight({
      title: "Starlight UI Tweaks",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      sidebar: [
        {
          label: "Overview",
          items: [
            {
              label: "Getting Started",
              link: "docs/getting-started",
            },
            {
              label: "Changelog",
              link: "docs/changelog",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Adding Navigation Links",
              link: "docs/guides/adding-navigation-links",
            },
            {
              label: "Showing an Ad",
              link: "docs/guides/showing-ad",
            },
            {
              label: "Adding a Footer",
              link: "docs/guides/adding-footer",
            },
            {
              label: "Internationalization",
              link: "docs/guides/internationalization",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Configuration Reference",
              link: "docs/configuration-reference",
            },
          ],
        },
      ],
      social: [
        {
          icon: "email",
          href: "mailto:daniel@dlcastillop.com",
          label: "Email",
        },
        {
          icon: "github",
          href: "https://github.com/dlcastillop/starlight-ui-tweaks",
          label: "Github repo",
        },
        {
          icon: "linkedin",
          href: "https://linkedin.com/dlcastillop",
          label: "LinkedIn account",
        },
        {
          icon: "threads",
          href: "https://threads.com/@dlcastillop",
          label: "Threads account",
        },
      ],
      plugins: [
        starlightUiTweaks({
          footer: {
            copyright: "Daniel Castillo. All rights reserved.",
            firstColumn: {
              title: "Developer Tools",
              links: [
                {
                  label: "SEO in Next.js",
                  href: "https://seo-in-nextjs.dlcastillop.com/",
                },
                {
                  label: "SEO in Astro",
                  href: "https://seo-in-astro.dlcastillop.com/",
                },
                {
                  label: "Nova.js",
                  href: "https://novajs.dev/",
                },
                {
                  label: "Starlight Page Actions",
                  href: "https://starlight-page-actions.dlcastillop.com/",
                },
                {
                  label: "Hook Crafter",
                  href: "https://hookcrafter.dev/",
                },
              ],
            },
            secondColumn: {
              title: "Resources",
              links: [
                {
                  label: "Guides",
                  href: "/docs/guides/adding-navigation-links",
                },
                {
                  label: "References",
                  href: "/references",
                },
              ],
            },
            thirdColumn: {
              title: "Support",
              links: [
                {
                  label: "Issues",
                  href: "https://github.com/dlcastillop/starlight-ui-tweaks/issues",
                },
                {
                  label: "Discussions",
                  href: "https://github.com/dlcastillop/starlight-ui-tweaks/discussions",
                },
              ],
            },
            fourthColumn: {
              title: "More",
              links: [
                {
                  label: "Contact",
                  href: "mailto:daniel@dlcastillop.com",
                },
                {
                  label: "Changelog",
                  href: "/docs/changelog",
                },
              ],
            },
          },
        }),
        starlightPageActions({
          baseUrl: "https://starlight-ui-tweaks.dlcastillop.com",
        }),
      ],
    }),
  ],
});
