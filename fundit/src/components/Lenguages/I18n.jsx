import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



const resources = {
  en: {
    translation: {
      welcome: "Flyer Events",
      filter: "Filter"
    }
  },
  es: {
    translation: {
      welcome: "Cartelera Folletos",
      filter: "Filtro"
    }
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
