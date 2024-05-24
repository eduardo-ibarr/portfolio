import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import main_en from "./locales/en/main.json";
import experiences_en from "./locales/en/experiences.json";
import skills_en from "./locales/en/skills.json";
import educations_en from "./locales/en/educations.json";

import main_pt from "./locales/pt/main.json";
import experiences_pt from "./locales/pt/experiences.json";
import skills_pt from "./locales/pt/skills.json";
import educations_pt from "./locales/pt/educations.json";

export const applyTranslation = () => {
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: Object.assign(main_en, {
          experiences: experiences_en,
          skills: skills_en,
          educations: educations_en,
        }),
      },
      pt: {
        translation: Object.assign(main_pt, {
          experiences: experiences_pt,
          skills: skills_pt,
          educations: educations_pt,
        }),
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
