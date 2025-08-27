import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
    
    resources: {
      en: {
        translation: {}
      },
      'zh-TW': {
        translation: {}
      },
      'zh-CN': {
        translation: {}
      },
      es: {
        translation: {}
      },
      fr: {
        translation: {}
      },
      de: {
        translation: {}
      },
      ja: {
        translation: {}
      },
      ko: {
        translation: {}
      },
      pt: {
        translation: {}
      },
      it: {
        translation: {}
      },
      ar: {
        translation: {}
      }
    }
  });

// Load translations dynamically
const loadTranslations = async () => {
  const languages = ['en', 'zh-TW', 'zh-CN', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'it', 'ar'];
  
  for (const lang of languages) {
    try {
      const response = await fetch(`/locales/${lang}/translation.json`);
      const translations = await response.json();
      i18n.addResourceBundle(lang, 'translation', translations);
    } catch (error) {
      console.warn(`Failed to load translations for ${lang}:`, error);
    }
  }
};

loadTranslations();

export default i18n;