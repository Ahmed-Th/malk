import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import Cookie from "js-cookie";
import { isRTL } from "./language.utils";
import { setLocalState } from "helper/localStorage";
import { localStorageCommands } from "helper/localStorageCommands";

const LanguageContext = React.createContext({} as any);

let firstTimeChange = 0;
export const LanguageProvider = ({ children, messages, initLocale }) => {
  const [locale, setLocale] = React.useState(initLocale ?? "en");

  useEffect(() => {
    if (locale === "ar") {
      document.querySelector("body").dir = "rtl";
      document.querySelector("body").className = "";
      document.querySelector("body").classList.add("ar");      
    } else {
      document.querySelector("body").dir = "ltr";
      document.querySelector("body").className = "";
      document.querySelector("body").classList.add("en");      
    }

    // set new cookie value
    Cookie.set("locale", locale);
    setLocalState(localStorageCommands.language , locale);
  }, [locale]);

  const changeLanguage = (newLocale): void => {
    setLocale(newLocale);    
    setLocalState(localStorageCommands.language , locale);
    Cookie.set("locale", newLocale);
    window.location.reload();
  };

  let isRtl = isRTL(locale);

  return (
    <LanguageContext.Provider
      value={{ locale, changeLanguage, isRtl, messages: messages[locale] }}
    >
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLocale = () => React.useContext(LanguageContext);
