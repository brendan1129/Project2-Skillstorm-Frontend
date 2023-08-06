
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// npm install react-i18next i18next --save
// the translations
// You can move these to a separate JSON file and import them as well.
const resources = {
  en: {
    translation: {
      "Title": "Tax Processing System",
      "Enter Login Info": "Enter login Information:"
    }
  },
  sp: {
    translation: {
      "Title": "Sistema de Procesamiento de Impuestos",
      "Enter Login Info": "información para ingresar:"
    }
  }
};
i18n
  .use(initReactI18next) // Adding middleware: passes i18n down to react-i18next
  // This middle ware is going to integrate i18n instance with React application
  .init({
    resources,
    lng: "sp", // language to use
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;