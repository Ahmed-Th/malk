import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "2rem 15rem",
    width: "100%",
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 6rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem 0 3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3.5rem 2rem 2rem 2rem",
    },
  },
  general_info_box:{
    padding:"0 13rem 0 0 !important",
    display:"flex",
    alignItems:"center",

    [theme.breakpoints.down("md")]: {
      padding:"0 5rem  0 0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding:"0 3rem  0 0 !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding:"0 .9rem !important",
    },
  },
  info: {
    // marginTop: "8rem",
    // paddingRight:"2rem",
    // [theme.breakpoints.down("xs")]: {
    //   marginTop: "0",
    //   paddingRight:"0",
    // },
  },
  title: {
    fontSize: "2.1rem ",
    fontWeight: 700,
    marginBottom: ".5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.2rem",
      fontSize: "1.6rem ",
      marginLeft:"2.2rem"
      // textAlign:"center"
    },
  },
  paragraph_box:{
    display:"flex",
    marginLeft:"-2.7rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft:"-1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft:"0",
    },
  },
  paragraph_icon:{
    fontSize:"2.5em",
    marginTop:"-.4rem",
    marginRight:"1.5rem",
    padding:"0"
  },
  paragraph: {
    marginBottom: "2rem",
    fontSize: "1.1rem",
    opacity:".8",
    [theme.breakpoints.down("xs")]: {
      marginBottom:"2rem",
      // textAlign:"center",
    },
  },
  img_box:{
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      justifyContent:"flex-end",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
    },
  },
  img: {
    width: "20rem",
    height: "92%",
    borderRadius: "2rem",
    boxShadow:"1rem 1rem 2rem 0rem #808080",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "93%",
      boxShadow:".7rem .7rem 2rem 0rem #808080",
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
