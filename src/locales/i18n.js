import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationJP from "./jp/translation.json";
import translationKO from "./ko/translation.json";

const resources = {
  jp: {
    translation: translationJP,
  },
  ko: {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
  fallbackLng: "jp", // 번역 파일에서 찾을 수 없는 경우 기본 언어
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
