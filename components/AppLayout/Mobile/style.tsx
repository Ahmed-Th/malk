import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 2.5rem 0px 3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "82vh",
    alignItems: "flex-start",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  active: {
    color: `${colors.primary}`,
    fontSize: "3rem !important",
  },

  divider: {
    margin: "1.1rem 0",
  },
  logIn: {
    fontSize: "1.4rem !important",
    fontWeight: 700,
    cursor: "pointer",
    textTransform: "capitalize",
  },

  registerButton: {
    fontSize: "1.1rem !important",
    textTransform: "capitalize",
    padding: "0 3.2rem",
  },
  lang_icon: {
    fontSize: "2rem",
  },
}));
