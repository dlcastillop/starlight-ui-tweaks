---
title: Types Reference
description: The full reference documentation for Starlight UI Tweaks plugin types.
lastUpdated: 2025-11-16
---

## Link

Properties:

- `label` (`string`, **required**): The text displayed for the link
- `href` (`string`, **required**): The URL the announcement links to

## `Ad`

Properties:

- `image` (`string`, **required**): Path to the ad image
- `title` (`string`, **required**): The ad headline
- `description` (`string`, **required**): Supporting text for the ad
- `buttonLabel` (`string`, **required**): Text displayed on the call-to-action button
- `buttonHref`(`string`, **required**): URL the button links to

## `Footer`

Properties:

- `copyright` (`string`, **required**): Copyright text displayed at the bottom
- `firstColumn` (`Column`, **required**): Configuration for the first footer column
- `secondColumn` (`Column`, **required**): Configuration for the second footer column
- `thirdColumn` (`Column`, **required**): Configuration for the third footer column
- `fourthColumn` (`Column`, **required**): Configuration for the fourth footer column

## `Column`

Properties:

- `title` (`string`, **required**): The column title
- `links` (`Link[]`, **required**): An array of links in the column

## `LocaleConfig`

Properties:

- `navbarLinks` (`Link[]`): An array of links for the navigation bar
- `ad` (`Ad`): Configuration for the advertisement section
- `footer` (`Footer`): Configuration for the footer section
