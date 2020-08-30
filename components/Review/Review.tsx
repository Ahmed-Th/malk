import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { MdStar as StarIcon } from "react-icons/md";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import { useLocale } from "contexts/language/language.provider";
import { useRouter } from "next/router";
import Rating from "@material-ui/lab/Rating";
import { Container, Row, Col } from "react-grid-system";
import Paper from "@material-ui/core/Paper";

const Review: React.FC<any> = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { messages } = useLocale();

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.content}>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
          size="large"
        />
        <Typography className={classes.review_text}>
          "What amazing app which makes learning Quran easy .. and helps arab
          and non arab people to learn and get the meaning of the words of Quran
          .. it is useful for every one"
        </Typography>
        <Typography className={classes.review_owner}>
          5-star from Ahmed Tharwat on the App store
        </Typography>
        <Button
          variant="contained"
          className={classes.btn}
          size="large"
          color="primary"
          href="https://play.google.com/store/apps/details?id=com.imam&showAllReviews=true"
        >
          {messages.readAllReviews}
        </Button>
      </div>
    </Paper>
  );
};

export { Review };
