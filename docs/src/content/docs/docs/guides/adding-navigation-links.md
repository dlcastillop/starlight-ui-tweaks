---
title: Adding Navigation Links
description: Learn how to add custom navigation links to the navbar in your Starlight documentation site.
lastUpdated: 2025-11-16
---

You can add custom navigation links to the navbar.

## How to add navigation links

Use the `navbarLinks` option inside the plugin configuration:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUITweaks from "starlight-ui-tweaks";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightUITweaks({
          navbarLinks: [
            { label: "Documentation", href: "/docs" },
            { label: "API Reference", href: "/api" },
          ],
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```

## Internationalization

Navigation link labels can be internationalized. See the [Internationalization guide](/docs/guides/internationalization) for more details.

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
          navbarLinks: [
            { label: "Documentation", href: "/docs" },
            { label: "API Reference", href: "/api" },
          ],
          locales: {
            es: {
              navbarLinks: [
                { label: "Documentación", href: "/docs" },
                { label: "Referencia de la API", href: "/api" },
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
