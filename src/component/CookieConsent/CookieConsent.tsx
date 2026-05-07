import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCookieConsent } from "../../hooks/useCookieConsent";

const CookieConsent = () => {
  const { t } = useTranslation();
  const { consent, accept, decline } = useCookieConsent();

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed z-50 bottom-0 left-0 right-0 bg-zinc-900 text-slate-50 px-4 py-4 lg:px-8 shadow-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between">
            <p className="text-sm lg:text-base text-center lg:text-left">
              {t("cookies.message")}
            </p>
            <div className="flex flex-row gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 rounded-md border border-slate-50/40 hover:bg-slate-50/10 transition-colors duration-300"
              >
                {t("cookies.decline")}
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 rounded-md bg-[#326da8] hover:bg-[#274f7a] transition-colors duration-300 font-semibold"
              >
                {t("cookies.accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
