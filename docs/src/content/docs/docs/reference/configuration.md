---
title: Configuration Reference
description: The full reference documentation for Starlight UI Tweaks plugin options.
lastUpdated: 2025-11-16
---

Starlight UI Tweaks exposes several options to customize your documentation site's UI components.

## Configure the plugin

### `navbarLinks`

**type:** [`Link[]`](/docs/reference/types#link)

Add custom navigation links to the navbar.

```js
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightUITweaks from "starlight-ui-tweaks";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightUITweaks({
          navbarLinks: [
            { label: "Documentation", href: "/docs" },
            { label: "API Reference", href: "/api" },
            { label: "GitHub", href: "https://github.com/user/repo" },
          ],
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```

### `ad`

**type:** [`Ad`](/docs/reference/types#ad)

Display promotional content below the table of contents on desktop, or at the end of page content on mobile.

```js
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightUITweaks from "starlight-ui-tweaks";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightUITweaks({
          ad: {
            image: "/ad-image.png",
            title: "Try Our New Product",
            description: "Boost your productivity with our latest tool.",
            buttonLabel: "Learn More",
            buttonHref: "https://example.com/product",
          },
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```

### `footer`

**type:** [`Footer`](/docs/reference/types#footer)

Add a marketing-style footer with four columns to pages using the splash template.

```js
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightUITweaks from "starlight-ui-tweaks";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightUITweaks({
          footer: {
            copyright: "My Company. All rights reserved.",
            firstColumn: {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
              ],
            },
            secondColumn: {
              title: "Resources",
              links: [
                { label: "Documentation", href: "/docs" },
                { label: "Guides", href: "/guides" },
              ],
            },
            thirdColumn: {
              title: "Support",
              links: [
                { label: "Help Center", href: "/help" },
                { label: "Community", href: "/community" },
              ],
            },
            fourthColumn: {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
              ],
            },
          },
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```

### `locales`

**type:** [`Record<string, LocaleConfig>`](/docs/reference/types#localeconfig)

Provide translations for UI Tweaks content in different languages.

Each locale key must match the locale keys defined in your Starlight configuration. You can translate `navbarLinks`, `ad`, and `footer` for each locale.

```js
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightUITweaks from "starlight-ui-tweaks";

export default defineConfig({
  integrations: [
    starlight({
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
          lang: "es",
        },
      },
      plugins: [
        starlightUITweaks({
          navbarLinks: [{ label: "Documentation", href: "/docs" }],
          locales: {
            es: {
              navbarLinks: [{ label: "Documentación", href: "/docs" }],
            },
          },
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```

See the [Internationalization guide](/docs/guides/internationalization) for more details.
