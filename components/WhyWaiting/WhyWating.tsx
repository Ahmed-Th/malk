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
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { FaTwitterSquare as Twitter } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const WhyWaiting: React.FC<any> = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { messages } = useLocale();

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography className={classes.title}>{messages.whatAreYouWaitingFor}</Typography>
      <Typography className={classes.sub_title}>{messages.joinAlotOfHappyUsers}</Typography>
      <Button
        variant="contained"
        className={classes.btn}
        size="large"
        color="primary"
        href="https://play.google.com/store/apps/details?id=com.imam"
      >
        {messages.download} {messages.appName}
      </Button>
    </Paper>
  );
};

export { WhyWaiting };
