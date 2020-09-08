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
import { BsCollection } from "react-icons/bs";
import { Container, Row, Col } from "react-grid-system";

const Feature: React.FC<any> = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { messages } = useLocale();

  return (
    <Paper elevation={3} className={classes.root}>
      <Row justify="center" gutterWidth={100}>
        <Col md={5} className={classes.img_box}>
          <img
            className={classes.img}
            src={props.image}
            alt="let's learn quran"
          />
        </Col>
        {/* style={{backgroundColor:"yellow"}} */}
        <Col md={7} className={classes.general_info_box}>
          <div className={classes.info}>
            <Typography className={classes.title}>{props.title}</Typography>
            <div className={classes.paragraph_box}>
              <BsCollection className={classes.paragraph_icon} />
              <Typography className={classes.paragraph}>
                {props.paragraph}
              </Typography>
            </div>
            <div className={classes.paragraph_box}>
              <BsCollection className={classes.paragraph_icon} />
              <Typography className={classes.paragraph}>
                {props.paragraph_2}
              </Typography>
            </div>
            <Button
              variant="contained"
              className={classes.btn}
              size="large"
              color="primary"
              href="https://play.google.com/store/apps/details?id=com.imam"
            >
              {messages.viewInAppStore}
            </Button>
          </div>
        </Col>
      </Row>
    </Paper>
  );
};

export { Feature };
