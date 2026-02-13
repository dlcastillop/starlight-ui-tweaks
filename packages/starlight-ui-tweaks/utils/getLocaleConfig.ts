import type { UiTweaksConfig } from "../index";

export function getLocaleConfig<T extends keyof Omit<UiTweaksConfig, "locales">>(
  config: UiTweaksConfig,
  locale: string | undefined,
  key: T,
): UiTweaksConfig[T] {
  if (locale && config.locales?.[locale]?.[key]) {
    return config.locales[locale][key];
  }

  return config[key];
}
