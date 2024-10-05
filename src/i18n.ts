import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerEN from './layout/Header/locales/en.json';
import headerRU from './layout/Header/locales/ru.json';
import bannerEN from './layout/Banner/locales/en.json';
import bannerRU from './layout/Banner/locales/ru.json';
import gutendexInfoEN from './layout/GutendexInfo/locales/en.json';
import gutendexInfoRU from './layout/GutendexInfo/locales/ru.json';
import gutendexPopularCategoryEN from './layout/PopularCategory/locales/en.json';
import gutendexPopularCategoryRU from './layout/PopularCategory/locales/ru.json';
import saveAuthorsUIEN from './layout/saveAuthorsUI/locales/en.json';
import saveAuthorsUIRU from './layout/saveAuthorsUI/locales/ru.json';
const resources = {
  en: {
    header: headerEN,
    banner: bannerEN,
    gutendexInfo: gutendexInfoEN,
    gutendexPopularCategory: gutendexPopularCategoryEN,
    saveAuthorsUI: saveAuthorsUIEN,
  },
  ru: {
    header: headerRU,
    banner: bannerRU,
    gutendexInfo: gutendexInfoRU,
    gutendexPopularCategory: gutendexPopularCategoryRU,
    saveAuthorsUI: saveAuthorsUIRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Язык по умолчанию
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
