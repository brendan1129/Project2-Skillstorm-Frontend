
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// npm install react-i18next i18next --save
// the translations
// You can move these to a separate JSON file and import them as well.
  const resources = {
    en: {
        translation: {
          "Form1099Table": {
            "Form Type": "Form Type",
            "Employer": "Employer",
            "Employer Tax ID": "Employer Tax ID",
            "Amount Earned": "Amount Earned",
            "Amount Withheld": "Amount Withheld",
            "Remove": "Remove"
          },
          "Results": {
            "Taxes Owed to the IRS": "Taxes Owed to the IRS",
            "Tax Refund": "Tax Refund",
            "Tax Results": "Tax Results",
            "Filing Year 2022": "Filing Year 2022",
            "Total Earned": "Total Earned",
            "Total Withheld": "Total Withheld",
            "Back": "Back"
          },
          "EditIncome": {
            "Employer Identification Number (EIN)": "Employer Identification Number (EIN)",
            "Please enter an EIN in the format XX-XXXXXX": "Please enter an EIN in the format XX-XXXXXX",
            "Amount Earned": "Amount Earned",
            "The amount entered in the earned field must be between 0 and 1,000,000,000": "The amount entered in the earned field must be between 0 and 1,000,000,000",
            "Amount Withheld": "Amount Withheld",
            "The amount entered in the withheld field must be between 0 and 1,000,000,000": "The amount entered in the withheld field must be between 0 and 1,000,000,000",
            "Employer Information": "Employer Information",
            "Employer Name": "Employer Name",
            "Employer Address": "Employer Address",
            "Street Primary": "Street Primary",
            "Street Secondary": "Street Secondary",
            "City": "City",
            "State": "State",
            "Please enter a valid business state abbreviation": "Please enter a valid business state abbreviation",
            "Zip Code": "Zip Code",
            "Payer's TIN": "Payer's TIN",
            "Submitted Forms": "Sumitted Forms",
            "Add Forms": "Add Forms",
            "Income Type": "Income Type",
            "Select": "- Select -",
            "W2": "W2",
            "1099": "1099",
            "Calculate Results": "Calculate Results"
          },
          "Home":{
            "Welcome": "Welcome",
            "Log In": "Log In"
          },
          "Nav": {
            "Home": "Home",
            "Profile": "Profile",
            "File Taxes": "File Taxes",
            "Results" : "Results"
          },
          "EditAccount": {
            "Edit Account Information": "Edit Account Information",
            "General": "General",
            "First Name": "First Name",
            "Please enter a valid first name": "Please enter a valid first name.",
            "Last Name": "Last Name",
            "Please enter a valid last name": "Please enter a valid last name.",
            "E-mail": "E-mail",
            "Date of Birth": "Date of Birth",
            "Social Security Number": "Social Security Number",
            "Please enter a valid SSN": "Please enter a valid SSN.",
            "Address": "Address",
            "Street Primary": "Street Primary",
            "Street Secondary": "Street Secondary",
            "City": "City",
            "State": "State",
            "Please enter a valid state abbreviation": "Please enter a valid state abbreviation",
            "Zip Code": "Zip Code",
            "Filing Status": "Filing Status",
            "Select": "- Select -",
            "Single": "Single",
            "Married Filing Jointly": "Married Filing Jointly",
            "Married Filing Separately": "Married Filing Separately",
            "Head Of Household": "Head Of Household",
            "Save": "Save"
          },
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
          "Form1099Table": {
            "Form Type": "Tipo de Formulario",
            "Employer": "Empleadora",
            "Employer Tax ID": "Identificación Fiscal del Empleador",
            "Amount Earned": "Cantidad Ganada",
            "Amount Withheld": "Cantidad Retenida",
            "Remove": "Eliminar"
          },
          "Results": {
            "Taxes Owed to the IRS": "Impuestos Adeudados al IRS",
            "Tax Refund": "Devolución de Impuestos",
            "Tax Results": "Resultados Fiscales",
            "Filing Year 2022": "Año de Presentación 2022",
            "Total Earned": "Total Ganada",
            "Total Withheld": "Total Retenida",
            "Back": "Regresa"
          },
          "Home":{
            "Welcome": "Bienvenida",
            "Log In": "Acceso"
          },
          "EditIncome": {
            "Employer Identification Number (EIN)": "Número de Identificación del Empleador (EIN)",
            "Please enter an EIN in the format XX-XXXXXX": "Ingrese un EIN en el formato XX-XXXXXX",
            "Amount Earned": "Cantidad Ganada",
            "The amount entered in the earned field must be between 0 and 1,000,000,000": "La cantidad ingresada en el campo ganado debe estar entre 0 y 1,000,000,000",
            "Amount Withheld": "Cantidad Retenida",
            "The amount entered in the withheld field must be between 0 and 1,000,000,000": "El monto ingresado en el campo retenido debe estar entre 0 y 1,000,000,000",
            "Employer Information": "Informacion del Empleador",
            "Employer Name": "Nombre del Empleador",
            "Employer Address": "Dirección del Empleado",
            "Street Primary": "Calle Primaria",
            "Street Secondary": "Calle Secundaria",
            "City": "Ciudad",
            "State": "Estado",
            "Please enter a valid business state abbreviation": "Ingrese una abreviatura de estado comercial válida",
            "Zip Code": "Código Postal",
            "Payer's TIN": "TIN del Pagador",
            "Submitted Forms": "Formularios Enviados",
            "Income Type": "Tipo de Ingresos",
            "Add Forms": "Agregar Formularios",
            "Select": "- Seleccionar -",
            "W2": "W2",
            "1099": "1099",
            "Calculate Results": "Calcular Resultados"
          },
          "Nav": {
            "Home": "Hogar",
            "Profile": "Perfil",
            "File Taxes": "Archivo de Impuestos",
            "Results" : "Resultados"
          },
          "EditAccount": {
            "Edit Account Information": "Editar Información de la Cuenta",
            "General": "General",
            "First Name": "Primer Nombre",
            "Please enter a valid first name": "Por favor, ingrese un nombre válido.",
            "Last Name": "Apellido",
            "Please enter a valid last name": "Por favor, ingrese un apellido válido.",
            "E-mail": "E-mail",
            "Date of Birth": "Fecha de Nacimiento",
            "Social Security Number": "Número de Seguro Social",
            "Please enter a valid SSN": "Por favor, ingrese un SSN válido.",
            "Address": "Dirección",
            "Street Primary": "Calle Primaria",
            "Street Secondary": "Calle Secundaria",
            "City": "Ciudad",
            "State": "Estado",
            "Please enter a valid state abbreviation": "Ingrese una abreviatura de estado válida.",
            "Zip Code": "Código Postal",
            "Filing Status": "Estado Civil",
            "Select": "- Seleccionar -",
            "Single": "Soltera",
            "Married Filing Jointly": "Casado que Presenta una Declaración Conjunta",
            "Married Filing Separately": "Casado que Presenta una Declaración por Separado",
            "Head Of Household": "Jefe de Hogar",
            "Save": "Ahorrar"
          },
          "Login": {
            "Title": "Sistema de Procesamiento de Impuestos",
            "Enter Login Info": "Información para Ingresar:",
            "Create an Account": "Crear una Cuenta",
            "Full Name": "Nombre Completo",
            "Email": "Email",
            "Password": "Contraseña",
            "Create": "Crear",
            "Retype": "Vuelva a Escribir la Contraseña",
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