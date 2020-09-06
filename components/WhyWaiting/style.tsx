import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    boxSizing:"border-box",
    padding:"8rem 0",
    // backgroundColor:"#fff",
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgWyHd_Vy01cDrG_iMKvhFD_ysvmjs2AxDdQ&usqp=CAU')",
    [theme.breakpoints.down("xs")]: {
      padding:"6rem 0",
    },
  },
  title:{
    fontSize:"3rem",
    fontWeight:700,
    marginBottom:".5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize:"1.5rem",
    },
  },
  sub_title:{
    fontSize:"1rem",
    fontWeight:700,
    marginBottom:"1.3rem"
  },
  btn: {
    padding: ".6rem 2rem",
    textTransform:"capitalize",
    minWidth: "11rem",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      fontSize:"1.2rem"
    },
  },
}));
