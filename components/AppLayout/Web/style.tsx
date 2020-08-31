import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // backgroundColor: "#e7cfaa",
    backgroundColor: "#CDCDCD",
    // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDwGC_Z9Ame6_KQWY0ApbIWm9dJD756QJehg&usqp=CAU')",
    color: `${colors.textColor}`,
    padding: "0 10rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5rem",
    },
  },
  app_name:{
    flexGrow:1,
    fontWeight:700,
    fontSize:"1.5rem"
  },
  logo: {
    width: "3rem",
    height: "3rem",
    marginRight:"1rem"
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
}));
