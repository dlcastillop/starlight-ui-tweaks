// env.d.ts
declare module "virtual:starlight-ui-tweaks/config" {
  export interface UiTweaksConfig {
    navbarLinks?: {
      label: string;
      href: string;
    }[];
  }

  const config: UiTweaksConfig;
  export default config;
}
