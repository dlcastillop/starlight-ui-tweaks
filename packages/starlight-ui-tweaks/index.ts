import type { StarlightPlugin } from "@astrojs/starlight/types";

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
