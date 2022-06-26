import i18next from "i18next"
import Backend from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "ja",
    defaultNS: "common",
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18next
