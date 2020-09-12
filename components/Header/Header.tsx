import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import { useLocale } from "contexts/language/language.provider";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-grid-system";
import {AiFillAndroid} from "react-icons/ai"
const Header: React.FC<any> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { messages , isRtl } = useLocale();

  return (
    <div className={isRtl ?  classes.ar_root : classes.root}>
      <Row justify="center">
        <Col md={7.7} className={classes.general_info_box}>
          <div className={classes.general_info}>
            <Typography className={classes.title}>
              {messages.getStartWithImam}
            </Typography>
            <Typography className={classes.paragraph}>
              {messages.headerParagraph}
            </Typography>
            <Button
              variant="contained"
              className={classes.btn}
              size="large"
              color="primary"
              href="https://play.google.com/store/apps/details?id=com.imam"
            >
            <AiFillAndroid className={classes.android_icon}/>
              {messages.download}
            </Button>
          </div>
        </Col>
        <Col md={4.3} className={classes.img_box} >
          <img
            className={classes.img}
            src="assets/imam_4.jpg"
            alt="let's learn quran"
          />
        </Col>
      </Row>
    </div>
  );
};

export { Header };
