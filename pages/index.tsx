import React from "react";
import { NextPage } from "next";
import { SEO } from "components/SEO/seo";
import { useLocale } from "contexts/language/language.provider";
import { Header } from "components/Header/Header";
import { Feature } from "components/Feature/Feature";
import { Review } from "components/Review/Review";
import { Footer } from "components/Footer/Footer";
import { RtlFeature } from "components/RtlFeature/RtlFeature";
// import classes from "*.module.css";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "1rem 2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 2rem 0",
    },
  },
  feature: {
    marginTop: "2rem",
  },
}));

const HomePage: NextPage<Props> = ({ deviceType }) => {
  console.log(deviceType);
  const { messages } = useLocale();
  const bookingMessages = messages.howToBook;
  const classes = useStyles();
  return (
    <>
      <SEO title={`Home | ${messages.appName}`} description="" />
      <Header />
      <div className={classes.main}>
        <section>
          <Review />
        </section>
        <section className={classes.feature}>
          {deviceType.mobile ? (
            <RtlFeature
              title={messages.learnQuranWordByWord}
              paragraph={messages.learnQuranWordByWord_Pararaph}
              image="assets/imam.jpg"
            />
          ) : (
            <Feature
              title={messages.learnQuranWordByWord}
              paragraph={messages.learnQuranWordByWord_Pararaph}
              image="assets/imam.jpg"
            />
          )}
        </section>
        <section className={classes.feature}>
          <Review />
        </section>
        <section className={classes.feature}>
          <RtlFeature
            title={messages.CompeteInGoodDeeds}
            paragraph={messages.CompeteInGoodDeeds_Paragraph}
            image="assets/imam_2.jpg"
          />
        </section>
        <section className={classes.feature}>
          {deviceType.mobile ? (
            <RtlFeature
              title={messages.startYourJourneyLearningWithImam}
              paragraph={messages.startYourJourneyLearningWithImam_paragraph}
              image="assets/imam_7.jpg"
            />
          ) : (
            <Feature
              title={messages.startYourJourneyLearningWithImam}
              paragraph={messages.startYourJourneyLearningWithImam_paragraph}
              image="assets/imam_7.jpg"
            />
          )}
        </section>
        <section className={classes.feature}></section>
        <section className={classes.feature}>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default HomePage;
