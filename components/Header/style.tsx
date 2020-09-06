import { makeStyles } from "@material-ui/core/styles";
import { colors } from "theme/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "2rem 15rem",
    // height:"100rem",
    // width: "100%",
    // backgroundSize: "cover",

    //backgroundImage: "url('data:image/jpeg;base64,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')",
    //backgroundImage: "url('https://us.123rf.com/450wm/nataliakuprova/nataliakuprova1707/nataliakuprova170700006/81433361-stock-vector-ramadan-kareem-black-and-white-seamless-pattern-vector-arabic-ornate-geometric-islamic-background.jpg?ver=6')",
    //backgroundImage: "url('https://us.123rf.com/450wm/nataliakuprova/nataliakuprova1707/nataliakuprova170700006/81433361-stock-vector-ramadan-kareem-black-and-white-seamless-pattern-vector-arabic-ornate-geometric-islamic-background.jpg?ver=6')",
    //backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXVOKMSWEQg0AFEpdJmwyUJiH4bCX3K2dRFQ&usqp=CAU')",
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgWyHd_Vy01cDrG_iMKvhFD_ysvmjs2AxDdQ&usqp=CAU')",
    // backgroundBlendMode: 'hard-light',
    [theme.breakpoints.down("md")]: {
      padding: "2rem 6rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 2rem",
    },
  },
  general_info_box:{
    padding:"0 8rem 0 0 !important",
    [theme.breakpoints.down("md")]: {
      padding:"0 5rem  0 0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding:"0 1.4rem  0 0 !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding:"0 .9rem !important",
    },
  },
  general_info: {
    marginTop: "12rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5rem",
    },
  },
  title: {
    fontSize: "2.4rem ",
    fontWeight: 700,
    marginBottom: ".5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem ",
    },
  },
  paragraph: {
    marginBottom: "1.2rem",
    fontSize: "1.4rem",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.7rem",
    },
  },
  img_box:{
    display:"flex",
    justifyContent:"flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent:"flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent:"center",
    },
  },
  img: {
    width: "20rem",
    height: "95%",
    borderRadius: "2rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "90%",
    },
  },
  btn: {
    padding: ".6rem 2rem",
    minWidth: "11rem",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginBottom:"4rem",
      fontSize:"1.2rem"
    },
  },
}));
