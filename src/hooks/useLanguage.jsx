import { createContext, useContext, useState } from "react";
import { ko } from "../i18n/ko";
import { en } from "../i18n/en";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ko");
  const t = lang === "ko" ? ko : en;
  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}