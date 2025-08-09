import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/index.json';
import id from './locales/id/index.json';

const savedLang = localStorage.getItem('lang') || 'en'

const resources = {
    en: { translation: en },
    id: { translation: id }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
            skipOnVariables: false
        },
    });

export default i18n;
