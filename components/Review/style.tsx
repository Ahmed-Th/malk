import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing:"border-box",
    padding:"8rem 0",
    backgroundColor:"#fff",
    [theme.breakpoints.down("xs")]: {
      padding:"4rem 0",
    },
  },
  content:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    margin:"auto",
    [theme.breakpoints.down("xs")]: {
      width:"90%",
    },
  },
  review_text:{
    textAlign:"center",
    marginTop:"1.5rem",
    fontSize:"1.3rem",
    marginBottom:"2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize:"1.6rem",
    },
  },
  review_owner:{
    marginBottom:"1rem",
    opacity:".6"
  },
  btn:{
    padding:".6rem 2rem",
    minWidth:"10rem",
    marginTop:"1rem",
    textTransform:"none",
    fontWeight:700,
    [theme.breakpoints.down("xs")]: {
      marginTop:"7rem",
    },
  }
}));
