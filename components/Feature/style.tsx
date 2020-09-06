// import { makeStyles } from "@material-ui/core/styles";
// import { colors } from "theme/colors";

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     boxSizing: "border-box",
//     padding: "2rem 0 0 0",
//     width: "100%",
//     backgroundColor: "#fff",
//     // [theme.breakpoints.down("xs")]: {
//     //   padding: "4rem 2rem 0 2rem",
//     // },
//     [theme.breakpoints.down("md")]: {
//       padding: "2rem 6rem",
//     },
//     [theme.breakpoints.down("sm")]: {
//       padding: "2rem 0rem 0 1rem",
//     },
//     [theme.breakpoints.down("xs")]: {
//       padding: "2rem 2rem",
//     },
//   },
//   info: {
//     marginTop: "8rem",
//     [theme.breakpoints.down("xs")]: {
//       marginTop: "0",
//     },
//   },
//   title: {
//     fontSize: "2.1rem ",
//     fontWeight: 700,
//     marginBottom: ".5rem",
//     [theme.breakpoints.down("xs")]: {
//       fontSize: "1.8rem ",
//     },
//   },
//   paragraph: {
//     marginBottom: "1.2rem",
//     fontSize: "1.4rem",
//   },
//   img_box:{
//     display:"flex",
//     justifyContent:"flex-start",
//     [theme.breakpoints.down("xs")]: {
//       justifyContent:"center",
//     },
//   },
//   img: {
//     width: "20rem",
//     height: "92%",
//     borderRadius: "2rem",
//     [theme.breakpoints.down("xs")]: {
//       width: "100%",
//       height: "93%",
//     },
//   },
//   btn: {
//     padding: ".7rem 2rem",
//     width: "100%",
//     textTransform:"capitalize",
//     fontWeight:700
//   },
// }));


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
      padding: "2rem 6rem 0 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 2rem",
    },
  },
  general_info_box:{
    padding:"0 0 0 10rem !important",
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      padding:"0 0 0 5rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding:"0 0 0 5rem !important",
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
      fontSize: "1.8rem ",
      textAlign:"center"
    },
  },
  paragraph: {
    marginBottom: "2rem",
    fontSize: "1.4rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom:"2rem",
      textAlign:"center",
    },
  },
  img_box:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      justifyContent:"flex-start",
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
      boxShadow:".7rem .7rem 2rem 0rem #808080",
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
