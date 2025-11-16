---
title: Adding a Footer
description: Learn how to add a marketing-style footer with multiple columns to your Starlight documentation site.
lastUpdated: 2025-11-16
---

You can add a marketing-style footer with four customizable columns to your splash pages.

## How to add a footer

Use the `footer` option inside the plugin configuration:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
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
                { label: "Changelog", href: "/changelog" },
              ],
            },
            secondColumn: {
              title: "Resources",
              links: [
                { label: "Documentation", href: "/docs" },
                { label: "Guides", href: "/guides" },
                { label: "API Reference", href: "/api" },
              ],
            },
            thirdColumn: {
              title: "Support",
              links: [
                { label: "Help Center", href: "/help" },
                { label: "Community", href: "/community" },
                { label: "Contact", href: "/contact" },
              ],
            },
            fourthColumn: {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
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

## Placement

The footer only appears on pages using Starlight's [splash template](https://starlight.astro.build/reference/frontmatter/#template). It will not be displayed on regular documentation pages.

## Internationalization

Footer content can be internationalized. See the [Internationalization guide](/docs/guides/internationalization) for more details.

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
          locales: {
            es: {
              footer: {
                copyright: "Mi Empresa. Todos los derechos reservados.",
                firstColumn: {
                  title: "Producto",
                  links: [
                    { label: "Características", href: "/features" },
                    { label: "Precios", href: "/pricing" },
                  ],
                },
                secondColumn: {
                  title: "Recursos",
                  links: [
                    { label: "Documentación", href: "/docs" },
                    { label: "Guías", href: "/guides" },
                  ],
                },
                thirdColumn: {
                  title: "Soporte",
                  links: [
                    { label: "Centro de Ayuda", href: "/help" },
                    { label: "Comunidad", href: "/community" },
                  ],
                },
                fourthColumn: {
                  title: "Empresa",
                  links: [
                    { label: "Acerca de", href: "/about" },
                    { label: "Blog", href: "/blog" },
                  ],
                },
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
