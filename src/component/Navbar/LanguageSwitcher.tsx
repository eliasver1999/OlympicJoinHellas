import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "el";
  const next = current === "en" ? "el" : "en";
  const label = next === "en" ? "EN" : "ΕΛ";

  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      aria-label={`Switch language to ${label}`}
      className="fixed z-40 lg:top-9 top-7 right-[88px] bg-[#326da8] text-slate-50 font-semibold tracking-wider px-3 py-2 rounded-md hover:bg-[#274f7a] transition-colors duration-300"
    >
      {label}
    </button>
  );
};

export default LanguageSwitcher;
