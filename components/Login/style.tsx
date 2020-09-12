import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "30rem",
    minHeight: "30vh",
    padding: "0",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      minHeight: "60vh",
    },
  },
  tab: {
    // textTransform: "none",
    width:"50%",
    backgroundColor:"#F0F0F0",
  },
  form:{
    padding:"2rem"
  },
  input:{
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: 'none',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor:"#F0F0F0"
  },
  label:{
    marginLeft:"1rem"
  },
  forgotPassword_box:{
    display:"flex",
    justifyContent:"flex-end",
  },
  forgotPassword: {
    marginBottom: "1.4rem",
    color: "black",
    marginRight:"1.4rem",
    fontWeight: 700,
    "&:hover": {
      color: `${colors.primary}`,
    },
  },
  rememberMe_box: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    marginLeft : ".7rem"
  },
  agree_text: {
    fontSize: ".9rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
    },
  },
  loginBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtn: {
    marginTop:"1.5rem",
    fontSize: "1rem",
    width: "40%",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
    },
  },
  footer:{
    backgroundColor:"#F0F0F0",
    display:"flex",
    justifyContent:"center",
    padding:"1.5rem 0"
  },
  socialIcon: {
    marginRight: ".6rem",
    fontSize: "2.5rem",
  },
  edge:{
    height:".5rem",
    backgroundColor:"#00008b"
  }
}));
