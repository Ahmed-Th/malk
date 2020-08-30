import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';
import { colors } from 'theme/colors';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
         <Head>
         <meta 
              name='viewport' 
              content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
          />
                            
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

          <meta name="HandheldFriendly" content="true" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="description" content="Description"/>
          <meta name="keywords" content="Keywords"/>

          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet"/>

          {/* PWA */}
          <meta name="theme-color" content={colors.primary}/>
          <meta name="mobile-web-app-capable" content="yes"/>

          <meta name="apple-mobile-web-app-title" content="Online therapy"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content={colors.primary}/>


          <meta name="msapplication-navbutton-color" content={colors.primary}/>
          <meta name="msapplication-TileColor" content={colors.primary}/>
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
          <meta name="msapplication-config" content="browserconfig.xml"/>


          <meta name="application-name" content="Online therapy"/>
          <meta name="msapplication-tooltip" content="Online therapy"/>
          <meta name="msapplication-starturl" content="/"/>


          <meta name="msapplication-tap-highlight" content="no"/>

          <meta name="full-screen" content="yes"/>
          <meta name="browsermode" content="application"/>

          <meta name="nightmode" content="enable/disable"/>

          <meta name="viewport" content="uc-fitscreen=yes"/>

          <meta name="layoutmode" content="fitscreen/standard"/>

          <meta name="imagemode" content="force"/>

          <meta name="screen-orientation" content="portrait"/>
         {/* All document public head goes here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument