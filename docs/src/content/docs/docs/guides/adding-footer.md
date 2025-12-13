---
title: Adding a Footer
description: Learn how to add a marketing-style footer with multiple columns to your Starlight documentation site.
lastUpdated: 2025-12-13
---

You can add a marketing-style footer with four customizable columns to your splash pages.

## How to add a footer

Use the `footer` option inside the plugin configuration:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUiTweaks from "starlight-ui-tweaks";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightUiTweaks({
          footer: {
            showSocialIcons: true,
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

## Social icons

The footer configuration supports an optional `showSocialIcons` boolean property.

- If `showSocialIcons` is set to `true`, social icons will be displayed in the footer and **will not appear in the navbar**. This is the recommended setup, as it frees up space in the navbar for the additional navigation links added by the plugin.
- If `showSocialIcons` is not specified (default behavior) or is set to `false`, social icons will be displayed in the navbar and **will not appear in the footer**.

```js
starlightUiTweaks({
  footer: {
    showSocialIcons: true,
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
});
```

## Internationalization

Footer content can be internationalized. See the [Internationalization guide](/docs/guides/internationalization) for more details.

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUiTweaks from "starlight-ui-tweaks";

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
        starlightUiTweaks({
          footer: {
            showSocialIcons: true,
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
