import i18n from 'i18next';
import httpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/translation.json';
import pt from '../../public/locales/pt/translation.json';

i18n.use(httpApi)
    .use(initReactI18next)
    .init({
        supportedLngs: ['pt', 'en'],
        fallbackLng: 'pt',
        react: {
            useSuspense: false
        }
    });

i18n.addResourceBundle('pt', 'translation', pt);
i18n.addResourceBundle('en', 'translation', en);

export default i18n;
