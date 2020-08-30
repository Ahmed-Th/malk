import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing:"border-box",
    padding:"4rem 8rem",
    width:"100%",
    backgroundColor:"#fff",
    [theme.breakpoints.down("xs")]: {
      padding:"4rem",
    },
  },
  logoBox:{
    display:"flex",
    marginBottom:"2rem",
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
    },
  },
  logo:{
    marginRight:".3rem"
  },
  app_name:{
    fontWeight:700,
    fontSize:"1.5rem"
  },
  contactBox:{
    [theme.breakpoints.down("xs")]: {
      display:"flex",
      justifyContent:"center",
      marginBottom:"1.8rem"
    },
  },
  copyRightBox:{
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
    },
  },
  copyRight:{
    opacity:".5",
    marginRight:"1rem"
  },
  socialIcon: {
    marginRight: ".6rem",
    fontSize: "1.6rem",
    cursor:"pointer"
  },
}));
