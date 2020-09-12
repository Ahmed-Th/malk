import React from 'react';
import App from 'next/app';
import { useDeviceType } from 'helper/useDeviceType';
import { parseCookies } from 'helper/parseCookies';
import { LanguageProvider, useLocale } from 'contexts/language/language.provider';
import localEn from 'store/translation/en.json';
import localAr from 'store/translation/ar.json';
// styles
import { ThemeProvider } from '@material-ui/core';
import { responsiveTheme, responsiveThemeAR } from 'theme/material';
import { ApplicationLayout } from 'components/AppLayout/layout';
import AuthenticationStore, { useAuthenticationStore } from 'contexts/auth/authentication';

import 'rc-drawer/assets/index.css';
import 'styles/global.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import 'bootstrap/dist/css/bootstrap.min.css';
import { RTL } from 'contexts/RTL/RTL';


const messages = {
    en: localEn,
    ar: localAr    
};  

export default function ExtendedApp({
    Component,
    pageProps,
    userAgent,
    locale
}) {

  const deviceType = useDeviceType(userAgent);
  const [authenticated] = useAuthenticationStore();

  // App JSX   
  return (
      <React.StrictMode>
        <ThemeProvider theme={locale == "ar" ? responsiveThemeAR : responsiveTheme}>
            <RTL>
                <LanguageProvider messages={messages} initLocale={locale}>
                <AuthenticationStore>
                        <ApplicationLayout deviceType={deviceType} className="outline-none">
                            <Component {...pageProps} deviceType={deviceType} />
                        </ApplicationLayout>
                </AuthenticationStore>
                </LanguageProvider>
            </RTL>
        </ThemeProvider>
      </React.StrictMode>
  )
}

ExtendedApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const { req, query } = appContext.ctx;
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const { locale } = parseCookies(req);
    return { ...appProps, userAgent, query, locale };
};
  