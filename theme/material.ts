import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction :  "ltr",
  palette: {
    primary: {
      main: "#478d73"
    },
    secondary: {
      main: "#FFF"
    },
    success: {
      main: "#2ECC71"
    },
    warning: {
      main: "#e67e22"
    },
    error: {
      main: "#E74C3C"
    },
    text: {
      primary: "#222222",
      secondary: "#383838"
    },
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'Roboto',
      '"Helvetica Neue"',
      "Almarai",
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
  
});


const responsiveTheme = responsiveFontSizes(theme);


const themeAR = createMuiTheme({
  direction : "rtl",
  palette: {
    primary: {
      main: "#478d73"
    },
    secondary: {
      main: "#FFF"
    },
    success: {
      main: "#2ECC71"
    },
    warning: {
      main: "#e67e22"
    },
    error: {
      main: "#E74C3C"
    },
    text: {
      primary: "#222222",
      secondary: "#383838"
    },
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'Roboto',
      '"Helvetica Neue"',
      "Almarai",
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
  
});


const responsiveThemeAR = responsiveFontSizes(themeAR);


export { responsiveTheme, responsiveThemeAR }