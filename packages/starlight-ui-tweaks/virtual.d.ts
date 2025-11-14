// env.d.ts
declare module "virtual:starlight-ui-tweaks/config" {
  export interface UiTweaksConfig {
    navbarLinks?: {
      label: string;
      href: string;
    }[];
    ad?: {
      image: string;
      title: string;
      description: string;
      buttonLabel: string;
      buttonHref: string;
    };
  }

  const config: UiTweaksConfig;
  export default config;
}
