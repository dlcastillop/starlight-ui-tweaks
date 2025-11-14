import type { StarlightPlugin } from "@astrojs/starlight/types";

export interface PageActionsConfig {
  prompt?: string;
  baseUrl?: string;
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
  userConfig?: PageActionsConfig
): StarlightPlugin {
  const config: PageActionsConfig = {
    prompt: "Read {url}. I want to ask questions about it.",
    ...userConfig,
  };

  return {
    name: "starlight-ui-tweaks",
    hooks: {
      "config:setup"({ updateConfig, config: starlightConfig }) {
        updateConfig({
          components: {
            ThemeSelect: "starlight-ui-tweaks/overrides/ThemeSelect.astro",
            ...starlightConfig.components,
          },
        });
      },
    },
  };
}
