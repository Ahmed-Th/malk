import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // backgroundColor: "#e7cfaa",
    //backgroundColor: "#CDCDCD",
    backgroundColor: "#00494f",
    // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDwGC_Z9Ame6_KQWY0ApbIWm9dJD756QJehg&usqp=CAU')",
    color: `${colors.white}`,
    padding: "0 10rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 0rem 0 0",
    },
  },
  app_name: {
    flexGrow: 1,
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  logo: {
    width: "3rem",
    height: "3rem",
    marginRight: "1rem",
  },
  languageButton: {
    marginRight: ".36rem !important",
    marginLeft: ".36rem !important",
    textTransform: "capitalize",
  },
  languageIcon: {
    marginRight: ".36rem",
    marginLeft: ".36rem",
  },

  languageName: {
    fontSize: "1.07rem !important",
    fontWeight: 500,
  },
  android_icon: {
    fontSize: "1.5rem",
    marginRight: ".5rem",
    marginBottom: ".2rem",
    fontWeight: 300,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      marginRight: ".4rem",
    },
  },
  btn: {
    color:"#fff",
    [theme.breakpoints.down("xs")]: {
      // padding: ".4rem .5rem",
      fontSize: ".8rem",
      fontWeight:100
    },
  },
}));
