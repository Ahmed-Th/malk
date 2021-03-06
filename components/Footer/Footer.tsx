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

const Footer: React.FC<any> = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { messages } = useLocale();

  return (
    <div className={classes.root}>
      <Row justify="center">
        <Col md={6}>
          <div className={classes.logoBox}>
            <Avatar
              className={classes.logo}
              alt="I m a m"
              src="assets/imam_avatar.png"
            />
            <Typography className={classes.app_name}>
              {messages.appName}
            </Typography>
          </div>
          <div className={classes.contactBox}>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              href="https://www.facebook.com/www.imam.world"
            >
              <Typography className={classes.contact}>{messages.contact}</Typography>
              <Facebook
                style={{ fill: "#3b5998" }}
                className={classes.socialIcon}
              />
            </Button>
          </div>
        </Col>
        <Col md={6} className={classes.copyRightBox}>
          <Typography className={classes.copyRight}>
            {messages.copyRight} © 2020 {messages.appName} .
          </Typography>
          <Button
            variant="outlined"
            className={classes.about}
            color="inherit"
            href=""
          >
            {messages.about}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export { Footer };
