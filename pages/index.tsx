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
// import classes from "*.module.css";
import { makeStyles } from "@material-ui/core/styles";
//import { Carousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";

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
      <Header />
      <div className={classes.main}>
        <section className={classes.section}>
          <Carousel animation="fade">
            <div>
              <Review
                text="Very nice app, questions they have for the last part are very nice as well, alot of muslims keep reading these short Suraa's without knowing their meaning because we just used to read it to memorize its words. May Allah bless you and accept your work for his sake."
                name="Shrief Salama"
              />
            </div>
            <div>
              <Review
                text="فكرة جميلة وهادفة جدا ، استمتعت جدا بجزء الاسئلة واتعلمت منها كتير ، فرصة انك تتقن القراءة ومخارج الالفاظ من خلال البرنامج عاليه جدا ، عجبتنى فكرة عرض آيه بتفسيرها كل يوم ، ربنا ينفع بيه وبالناس اللى شغاله على الفكرة"
                name="eman herawy"
              />
            </div>
            <div>
              {/* <Review
                text="السلام علیکم ورحمۃ اللہ و برکاتہ. بہت ہی زبردست ایپ ہے ماشاءاللہ. امید ہے کہ اس پر آپ خوب محنت کر کے اس کو اپنی فیلڈ کی منفرد ایپ بنا دیں گے. یہ آئیڈیا بہت زبردست ہے کہ یوزر قرآن مجید کی تصحیح اس ایپ کے ذریعے کر سکتا ہے. اس کے تمام فیچرز بہت ہی اعلی ہیں. بہت سے فیچرز ابھی آپ نے لانچ کرنے ہیں، ان کا شدت سے انتظار ہے. یقیناً یہ ایپ ان شاءاللہ آپ کے لئے دنیا و آخرت کی تمام کامیابیوں اور بھلائیوں کا ذریعہ بن جائے گی. میں امید کرتا ہوں کہ آپ جلد از جلد اس ایپ کے تمام فیچرز کو چلا دیں گے. جذاک اللہ"
                name="FAVOURITE TEXTILES"
              /> */}
              {deviceType.mobile ? (
                <Review
                  text="السلام علیکم ورحمۃ اللہ و برکاتہ. بہت ہی زبردست ایپ ہے ماشاءاللہ. امید ہے کہ اس پر آپ خوب محنت کر کے اس کو اپنی فیلڈ کی منفرد ایپ بنا دیں گے. یہ آئیڈیا بہت زبردست ہے کہ یوزر قرآن مجید کی تصحیح اس ایپ کے ذریعے کر سکتا ہے. اس کے تمام فیچرز بہت ہی اعلی ہیں. بہت سے فیچرز ابھی آپ نے لانچ کرنے ہیں، ان کا شدت سے انتظار ہے. یقیناً یہ ایپ ان شاءاللہ "
                  name="FAVOURITE TEXTILES"
                />
              ) : (
                <Review
                  text="السلام علیکم ورحمۃ اللہ و برکاتہ. بہت ہی زبردست ایپ ہے ماشاءاللہ. امید ہے کہ اس پر آپ خوب محنت کر کے اس کو اپنی فیلڈ کی منفرد ایپ بنا دیں گے. یہ آئیڈیا بہت زبردست ہے کہ یوزر قرآن مجید کی تصحیح اس ایپ کے ذریعے کر سکتا ہے. اس کے تمام فیچرز بہت ہی اعلی ہیں. بہت سے فیچرز ابھی آپ نے لانچ کرنے ہیں، ان کا شدت سے انتظار ہے. یقیناً یہ ایپ ان شاءاللہ آپ کے لئے دنیا و آخرت کی تمام کامیابیوں اور بھلائیوں کا ذریعہ بن جائے گی. میں امید کرتا ہوں کہ آپ جلد از جلد اس ایپ کے تمام فیچرز کو چلا دیں گے. جذاک اللہ"
                  name="FAVOURITE TEXTILES"
                />
              )}
            </div>
          </Carousel>
          {/* <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <Review
              text="Very nice app, questions they have for the last part are very nice as well, alot of muslims keep reading these short Suraa's without knowing their meaning because we just used to read it to memorize its words. May Allah bless you and accept your work for his sake."
              name="Shrief Salama"
            />
            </Carousel.Item>
            <Carousel.Item>
            <Review
              text="فكرة جميلة وهادفة جدا ، استمتعت جدا بجزء الاسئلة واتعلمت منها كتير ، فرصة انك تتقن القراءة ومخارج الالفاظ من خلال البرنامج عاليه جدا ، عجبتنى فكرة عرض آيه بتفسيرها كل يوم ، ربنا ينفع بيه وبالناس اللى شغاله على الفكرة"
              name="eman herawy"
            />
            </Carousel.Item>
            <Carousel.Item>
            <Review
            text="السلام علیکم ورحمۃ اللہ و برکاتہ. بہت ہی زبردست ایپ ہے ماشاءاللہ. امید ہے کہ اس پر آپ خوب محنت کر کے اس کو اپنی فیلڈ کی منفرد ایپ بنا دیں گے. یہ آئیڈیا بہت زبردست ہے کہ یوزر قرآن مجید کی تصحیح اس ایپ کے ذریعے کر سکتا ہے. اس کے تمام فیچرز بہت ہی اعلی ہیں. بہت سے فیچرز ابھی آپ نے لانچ کرنے ہیں، ان کا شدت سے انتظار ہے. یقیناً یہ ایپ ان شاءاللہ آپ کے لئے دنیا و آخرت کی تمام کامیابیوں اور بھلائیوں کا ذریعہ بن جائے گی. میں امید کرتا ہوں کہ آپ جلد از جلد اس ایپ کے تمام فیچرز کو چلا دیں گے. جذاک اللہ"
            name="FAVOURITE TEXTILES"
          />
            </Carousel.Item>
          </Carousel> */}
        </section>
        <section className={classes.section}>
          {deviceType.mobile ? (
            <RtlFeature
              title={messages.startYourJourneyLearningWithImam}
              paragraph={messages.startYourJourneyLearningWithImam_paragraph}
              paragraph_2={messages.learnQuranWordByWord_Pararaph}
              image="assets/imam_7.jpg"
            />
          ) : (
            <Feature
              title={messages.startYourJourneyLearningWithImam}
              paragraph={messages.startYourJourneyLearningWithImam_paragraph}
              paragraph_2={messages.learnQuranWordByWord_Pararaph}
              image="assets/imam_7.jpg"
            />
          )}
        </section>
        {/* <section className={classes.section}>
          <Review
            text="فكرة جميلة وهادفة جدا ، استمتعت جدا بجزء الاسئلة واتعلمت منها كتير ، فرصة انك تتقن القراءة ومخارج الالفاظ من خلال البرنامج عاليه جدا ، عجبتنى فكرة عرض آيه بتفسيرها كل يوم ، ربنا ينفع بيه وبالناس اللى شغاله على الفكرة"
            name="eman herawy"
          />
        </section> */}
        <section className={classes.section}>
          <RtlFeature
            title={messages.CompeteInGoodDeeds}
            paragraph={messages.CompeteInGoodDeeds_Paragraph}
            paragraph_2={messages.GetMoreBadges_paragraph}
            image="assets/imam_2.jpg"
          />
        </section>
        {/* <section className={classes.section}>
          <Review
            text="السلام علیکم ورحمۃ اللہ و برکاتہ. بہت ہی زبردست ایپ ہے ماشاءاللہ. امید ہے کہ اس پر آپ خوب محنت کر کے اس کو اپنی فیلڈ کی منفرد ایپ بنا دیں گے. یہ آئیڈیا بہت زبردست ہے کہ یوزر قرآن مجید کی تصحیح اس ایپ کے ذریعے کر سکتا ہے. اس کے تمام فیچرز بہت ہی اعلی ہیں. بہت سے فیچرز ابھی آپ نے لانچ کرنے ہیں، ان کا شدت سے انتظار ہے. یقیناً یہ ایپ ان شاءاللہ آپ کے لئے دنیا و آخرت کی تمام کامیابیوں اور بھلائیوں کا ذریعہ بن جائے گی. میں امید کرتا ہوں کہ آپ جلد از جلد اس ایپ کے تمام فیچرز کو چلا دیں گے. جذاک اللہ"
            name="FAVOURITE TEXTILES"
          />
        </section> */}
        {/* <section className={classes.section}>
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
        </section> */}
        {/* <section className={classes.section}>
        <RtlFeature
              title={messages.FollowYourRecitation}
              paragraph={messages.FollowYourRecitation_paragraph}
              image="assets/imam_3.jpg"
            />
        </section> */}
        {/* <section className={classes.section}>
          {deviceType.mobile ? (
            <RtlFeature
              title={messages.GetMoreBadges}
              paragraph={messages.GetMoreBadges_paragraph}
              image="assets/imam.jpg"
            />
          ) : (
            <Feature
              title={messages.GetMoreBadges}
              paragraph={messages.GetMoreBadges_paragraph}
              image="assets/imam.jpg"
            />
          )}
        </section> */}
        {/* <section className={classes.section}>
        <RtlFeature
              title={messages.LearnthemeaningsoftheHolyQura}
              paragraph={messages.LearnthemeaningsoftheHolyQura_paragraph}
              paragraph_2={messages.FollowYourRecitation_paragraph}
              image="assets/imam_9.jpg"
            />
        </section> */}
        <section className={classes.section}>
          {deviceType.mobile ? (
            <RtlFeature
              title={messages.LearnthemeaningsoftheHolyQura}
              paragraph={messages.LearnthemeaningsoftheHolyQura_paragraph}
              paragraph_2={messages.FollowYourRecitation_paragraph}
              image="assets/imam_7.jpg"
            />
          ) : (
            <Feature
              title={messages.LearnthemeaningsoftheHolyQura}
              paragraph={messages.LearnthemeaningsoftheHolyQura_paragraph}
              paragraph_2={messages.FollowYourRecitation_paragraph}
              image="assets/imam_7.jpg"
            />
          )}
        </section>
        <section className={classes.section}>
          <WhyWaiting />
        </section>
        <section className={classes.section}>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default HomePage;
