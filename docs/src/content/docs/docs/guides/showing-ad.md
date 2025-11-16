---
title: Showing an Ad
description: Learn how to add promotional content to your Starlight documentation site.
lastUpdated: 2025-11-16
---

You can add promotional content that displays below the table of contents on desktop and at the end of the page content on mobile.

## How to show an ad

Use the `ad` option inside the plugin configuration:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
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

## Placement

The ad appears in different locations depending on screen size:

- **Desktop**: Below the table of contents in the right sidebar
- **Mobile**: At the end of the page content, before the footer (when the table of contents is hidden)

## Internationalization

Ad content can be internationalized. See the [Internationalization guide](/docs/guides/internationalization) for more details.

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
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
          ad: {
            image: "/ad-image.png",
            title: "Try Our New Product",
            description: "Boost your productivity with our latest tool.",
            buttonLabel: "Learn More",
            buttonHref: "https://example.com/product",
          },
          locales: {
            es: {
              ad: {
                image: "/ad-image-es.png",
                title: "Prueba Nuestro Nuevo Producto",
                description:
                  "Aumenta tu productividad con nuestra última herramienta.",
                buttonLabel: "Saber Más",
                buttonHref: "https://example.com/es/producto",
              },
            },
          },
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```
