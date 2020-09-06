import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { MdStar as StarIcon } from "react-icons/md";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import { useLocale } from "contexts/language/language.provider";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-grid-system";

const Header: React.FC<any> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { messages } = useLocale();

  return (
    <div className={classes.root}>
      <Row justify="center">
        <Col md={7} className={classes.general_info_box}>
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
              {messages.download}
            </Button>
          </div>
        </Col>
        <Col md={5} className={classes.img_box} >
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
