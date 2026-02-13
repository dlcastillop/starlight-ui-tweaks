import type { StarlightPlugin } from "@astrojs/starlight/types";
import virtual from "vite-plugin-virtual";

interface Link {
  label: string;
  href: string;
}

interface Column {
  title: string;
  links: Link[];
}

interface Ad {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

interface Footer {
  copyright: string;
  firstColumn: Column;
  secondColumn: Column;
  thirdColumn: Column;
  fourthColumn: Column;
  showSocialIcons?: boolean;
}

interface LocaleConfig {
  navbarLinks?: Link[];
  ad?: Ad;
  footer?: Footer;
}

export interface UiTweaksConfig {
  navbarLinks?: Link[];
  ad?: Ad;
  footer?: Footer;
  locales?: Record<string, LocaleConfig>;
}

/**
 * Starlight plugin that extends and customizes core UI components.
 *
 * This plugin:
 * - Replaces the theme toggle with an icon-based selector
 * - Adds navigation links to the navbar
 * - Enables ads in the table of contents
 * - Provides a customizable four-column footer
 *
 * @param {UiTweaksConfig} [userConfig] - Configuration options for the plugin.
 * @param {Link[]} [userConfig.navbarLinks] - Add custom navigation links to the navbar.
 * @param {Ad} [userConfig.ad] - Display promotional content.
 * @param {Footer} [userConfig.footer] - Add a marketing-style footer with four columns.
 * @param {Record<string, LocaleConfig>} [userConfig.locales] - Provide translations for UI Tweaks content in different languages.
 *
 * @see {@link https://starlight-ui-tweaks.dlcastillop.com/docs/reference/configuration|Configuration Reference}
 *
 * @example
 * ```javascript
 * // astro.config.mjs
 * import { defineConfig } from "astro/config";
 * import starlight from "@astrojs/starlight";
 * import starlightUITweaks from "starlight-ui-tweaks";
 *
 * export default defineConfig({
 *   integrations: [
 *     starlight({
 *       plugins: [
 *         starlightUITweaks({
 *           navbarLinks: [
 *             { label: "Documentation", href: "/docs" },
 *             { label: "API Reference", href: "/api" },
 *           ],
 *           ad: {
 *             image: "/ad-image.png",
 *             title: "Try Our New Product",
 *             description: "Boost your productivity with our latest tool.",
 *             buttonLabel: "Learn More",
 *             buttonHref: "https://example.com/product",
 *           },
 *           footer: {
 *             copyright: "My Company. All rights reserved.",
 *             firstColumn: {
 *               title: "Product",
 *               links: [
 *                 { label: "Features", href: "/features" },
 *                 { label: "Pricing", href: "/pricing" },
 *               ],
 *             },
 *             secondColumn: {
 *               title: "Resources",
 *               links: [
 *                 { label: "Documentation", href: "/docs" },
 *                 { label: "Guides", href: "/guides" },
 *               ],
 *             },
 *             thirdColumn: {
 *               title: "Support",
 *               links: [
 *                 { label: "Help Center", href: "/help" },
 *                 { label: "Community", href: "/community" },
 *               ],
 *             },
 *             fourthColumn: {
 *               title: "Company",
 *               links: [
 *                 { label: "About", href: "/about" },
 *                 { label: "Blog", href: "/blog" },
 *               ],
 *             },
 *           },
 *         }),
 *       ],
 *       title: "My Docs",
 *     }),
 *   ],
 * });
 * ```
 */
export default function starlightUiTweaks(
  userConfig?: UiTweaksConfig
): StarlightPlugin {
  const config = {
    navbarLinks: [],
    locales: {},
    ...userConfig,
  };

  return {
    name: "starlight-ui-tweaks",
    hooks: {
      "config:setup"({
        addIntegration,
        updateConfig,
        config: starlightConfig,
      }) {
        addIntegration({
          name: "starlight-ui-tweaks-integration",
          hooks: {
            "astro:config:setup": ({ updateConfig }) => {
              updateConfig({
                vite: {
                  plugins: [
                    virtual({
                      "virtual:module": `export default ${JSON.stringify(config)}`,
                      "virtual:starlight-ui-tweaks": config,
                    }),
                  ],
                },
              });
            },
          },
        });

        updateConfig({
          components: {
            ThemeSelect: "starlight-ui-tweaks/overrides/ThemeSelect.astro",
            SocialIcons: "starlight-ui-tweaks/overrides/SocialIcons.astro",
            TableOfContents:
              "starlight-ui-tweaks/overrides/TableOfContents.astro",
            MarkdownContent:
              "starlight-ui-tweaks/overrides/MarkdownContent.astro",
            Footer: "starlight-ui-tweaks/overrides/Footer.astro",
            ...starlightConfig.components,
          },
        });
      },
    },
  };
}
