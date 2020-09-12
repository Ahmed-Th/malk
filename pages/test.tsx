import React, { useState } from "react";
import { NextPage } from "next";
import { SEO } from "components/SEO/seo";
import { useLocale } from "contexts/language/language.provider";
import { Header } from "components/Header/Header";
import { Feature } from "components/Feature/Feature";
import { Review } from "components/Review/Review";
import { Footer } from "components/Footer/Footer";
import { RtlFeature } from "components/RtlFeature/RtlFeature";
import { WhyWaiting } from "components/WhyWaiting/WhyWating";
import { LoginForm } from "components/Login/Login";
// import classes from "*.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";
//import Carousel from 'react-bootstrap/Carousel'
type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0 2rem 1rem 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 1.5rem 0",
    },
  },
  section: {
    marginTop: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.2rem",
    },
  },
}));

const HomePage: NextPage<Props> = ({ deviceType }) => {
  console.log(deviceType);
  const { messages } = useLocale();
  const bookingMessages = messages.howToBook;
  const classes = useStyles();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <SEO title={`Home | ${messages.appName}`} description="" />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
      <LoginForm />

      </div>
    </>
  );
};

export default HomePage;
