---
title: Internationalization
description: Learn how to translate Starlight UI Tweaks content into multiple languages.
lastUpdated: 2025-11-16
---

Starlight UI Tweaks supports internationalization for all customizable content, allowing you to provide translations for different locales.

## How it works

When you configure locales in Starlight, you can provide translated versions of your UI Tweaks content using the `locales` option inside the plugin configuration.

The root locale (typically English) uses the default content defined at the top level of the plugin configuration. For additional locales, you provide translations under the `locales` option, where each key must match the locale keys defined in your Starlight configuration.

You only need to translate the features you're actually using since each locale override is optional. URLs in `href` properties can remain the same across locales or point to localized versions of your pages, depending on your site structure.

## Basic setup

First, configure your locales in Starlight:

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
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      plugins: [
        starlightUITweaks({
          // Default content (root locale)
          navbarLinks: [{ label: "Documentation", href: "/docs" }],
          // Translations
          locales: {
            es: {
              navbarLinks: [{ label: "Documentación", href: "/docs" }],
            },
            fr: {
              navbarLinks: [{ label: "Documentation", href: "/docs" }],
            },
          },
        }),
      ],
      title: "My Docs",
    }),
  ],
});
```

## Translating navigation links

Provide translated labels for your navbar links:

```js
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
});
```

## Translating ads

Translate all text content in your ad, including the title, description, and button label:

```js
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
        description: "Aumenta tu productividad con nuestra última herramienta.",
        buttonLabel: "Saber Más",
        buttonHref: "https://example.com/es/producto",
      },
    },
  },
});
```

## Translating the footer

Translate the copyright text, column titles, and all links in your footer:

```js
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
});
```
