import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing:"border-box",
    padding:"4rem 8rem",
    width:"100%",
    backgroundColor:"#fff",
    [theme.breakpoints.down("xs")]: {
      padding:"3rem",
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
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
      marginBottom:"1.8rem"
    },
  },
  contact:{
    fontSize:"1.3rem",
    marginRight: ".4rem",
  },
  copyRightBox:{
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    [theme.breakpoints.down("xs")]: {
      // justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    },
  },
  copyRight:{
    opacity:".6",
    marginRight:"1rem",
    marginBottom:".4rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom:"2rem"
    },
  },
  socialIcon: {
    fontSize: "2rem",
    cursor:"pointer"
  },
  about:{
    opacity:".7"
  }
}));
