import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../locales/en/translation.json";
import French from "../locales/fr/translation.json";
import Portuguese from "../locales/pt/translation.json";
import Spanish from "../locales/es/translation.json";

const resources = {
  en: { translation: English },
  pt: { translation: Portuguese },
  fr: { translation: French },
  es: { translation: Spanish },
};

i18n.use(initReactI18next).init({
  lng: "pt",

  fallbackLng: "pt",

  debug: true,

  interpolation: {
    escapeValue: false,
  },

  resources,
});
export default i18n;
