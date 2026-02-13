// env.d.ts
declare module "virtual:starlight-ui-tweaks" {
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
      showSocialIcons?: boolean;
    };
  }

  const config: UiTweaksConfig;
  export default config;
}
