import { languageOptions } from "./language.config";

export const toggleCurrentLocale = (locale) => {
    return locale === languageOptions.ar ? languageOptions.en : languageOptions.ar;
}