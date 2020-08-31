import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "2rem 0 0 0",
    width: "100%",
    backgroundColor: "#fff",
    [theme.breakpoints.down("xs")]: {
      padding: "4rem 2rem 0 2rem",
    },
  },
  info: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
    },
  },
  title: {
    fontSize: "2.1rem ",
    fontWeight: 700,
    marginBottom: ".5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem ",
      textAlign:"center"
    },
  },
  paragraph: {
    marginBottom: "1.2rem",
    fontSize: "1.4rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom:"2rem",
      textAlign:"center",
    },
  },
  img_box:{
    display:"flex",
    justifyContent:"flex-start",
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
    },
  },
  img: {
    width: "20rem",
    height: "92%",
    borderRadius: "2rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "93%",
    },
  },
  btn: {
    padding: ".7rem 2rem",
    width: "100%",
    textTransform:"capitalize",
    fontWeight:700,
    [theme.breakpoints.down("xs")]: {
      marginBottom:"4rem"
    },
  },
}));
