import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import portuguese from "./locales/pt.json";
import english from "./locales/en.json";

export const applyTranslation = () => {
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: english,
      },
      pt: {
        translation: portuguese,
      },
    },
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  return i18next;
};
