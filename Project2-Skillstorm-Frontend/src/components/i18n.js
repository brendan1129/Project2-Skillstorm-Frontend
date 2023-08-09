
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// npm install react-i18next i18next --save
// the translations
// You can move these to a separate JSON file and import them as well.
  const resources = {
    en: {
        translation: {
          "Login": {
            "Title": "Tax Processing System",
            "Enter Login Info": "Enter login Information:",
            "Create an Account": "Create an Account",
            "Full Name": "Full Name",
            "Email": "Email",
            "Password": "Password",
            "Create": "Create",
            "Retype": "Retype Password",
            "Login Button": "Login"
          }
       }
    },
    sp: {
        translation: {
          "Login": {
          "Title": "Sistema de Procesamiento de Impuestos",
          "Enter Login Info": "Información para Ingresar:",
          "Create an Account": "Crear una Cuenta",
          "Full Name": "Nombre Completo",
          "Email": "Email",
          "Password": "Contraseña",
          "Create": "Crear",
          "Retype": "Vuelva a escribir la contraseña",
          "Login Button": "Acceso"
        }
      }
  }
};
i18n
  .use(initReactI18next) // Adding middleware: passes i18n down to react-i18next
  // This middle ware is going to integrate i18n instance with React application
  .init({
    resources,
    lng: "en", // language to use
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;