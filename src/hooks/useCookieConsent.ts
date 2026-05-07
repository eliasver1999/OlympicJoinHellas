import React from "react";

const STORAGE_KEY = "cookie-consent";

export type ConsentValue = "accepted" | "declined" | null;

const read = (): ConsentValue => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
};

export const useCookieConsent = () => {
  const [consent, setConsent] = React.useState<ConsentValue>(() => read());

  React.useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setConsent(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const accept = React.useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setConsent("accepted");
  }, []);

  const decline = React.useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {}
    setConsent("declined");
  }, []);

  return { consent, accept, decline };
};
