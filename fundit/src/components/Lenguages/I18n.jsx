import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../locales/en/translation.json';
import translationES from '../../locales/es/translation.json';



const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources,
    lng: "es", // idioma inicial
    keySeparator: false, // no usamos claves en forma de mensajes.welcome
    interpolation: {
      escapeValue: false // no es necesario escapar de xss
    }
  });

export default i18n;
