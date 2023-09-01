"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import arTranslation from "../locales/ar.json";
import frTranslation from "../locales/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: frTranslation },
    ar: { translation: arTranslation },
  },
  lng: "fr", // Default language
  fallbackLng: "fr", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
