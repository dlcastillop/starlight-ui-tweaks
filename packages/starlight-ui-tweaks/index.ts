import type { StarlightPlugin } from "@astrojs/starlight/types";

interface Link {
  label: string;
  href: string;
}

interface Column {
  title: string;
  links: Link[];
}

export interface UiTweaksConfig {
  navbarLinks?: Link[];
  ad?: {
    image: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  footer?: {
    copyright: string;
    firstColumn: Column;
    secondColumn: Column;
    thirdColumn: Column;
    fourthColumn: Column;
  };
}

/**
 * Starlight plugin that adds page action buttons to your documentation.
 *
 * This plugin adds:
 * - A "Copy Markdown" button to copy the raw markdown content
 * - An "Open" dropdown menu with options to open the page in AI chat services (ChatGPT, Claude, etc.)
 * - Automatic generation of the `llms.txt` file with all documentation URLs during build
 *
 * @param {PageActionsConfig} [userConfig] - Configuration options for the plugin.
 * @param {string} [userConfig.prompt] - The prompt template for AI chat services. Use `{url}` as placeholder for the markdown URL.
 * @param {string} [userConfig.baseUrl] - The base URL of your site, required for generating the `llms.txt` file.
 *
 * @example
 * ```javascript
 * // astro.config.mjs
 * import starlight from '@astrojs/starlight';
 * import starlightPageActions from 'starlight-page-actions';
 *
 * export default defineConfig({
 *   integrations: [
 *     starlight({
 *       plugins: [
 *         starlightPageActions({
 *           prompt: "Read {url} and explain its main points briefly.",
 *           baseUrl: "https://mydocs.example.com"
 *         })
 *       ]
 *     })
 *   ]
 * });
 * ```
 *
 */
export default function starlightUiTweaks(
  userConfig?: UiTweaksConfig
): StarlightPlugin {
  const config = {
    navbarLinks: [],
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
                    {
                      name: "starlight-ui-tweaks-config",
                      resolveId(id) {
                        if (id === "virtual:starlight-ui-tweaks/config") {
                          return "\0" + id;
                        }
                      },
                      load(id) {
                        if (id === "\0virtual:starlight-ui-tweaks/config") {
                          return `export default ${JSON.stringify(config)}`;
                        }
                      },
                    },
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
