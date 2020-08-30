import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { MdLanguage as LanguageOutlinedIcon } from "react-icons/md";
import Badge from "@material-ui/core/Badge";
import {
  FiBell as Bell,
  FiSearch as Search,
  FiChevronDown as ChevronDown,
} from "react-icons/fi";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./style";
import { useLocale } from "contexts/language/language.provider";
import Avatar from "@material-ui/core/Avatar";
import { toggleCurrentLocale } from "contexts/language/language.helper";
import Divider from "@material-ui/core/Divider";
import { useAuthenticationStore } from "contexts/auth/authentication";
import { useRouter } from "next/router";
import {
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  RESERVATIONS_PAGE,
} from "store/navigation";
const WebAppBar = () => {
  const classes = useStyles();
  // global contexts
  const [authenticated] = useAuthenticationStore();
  const { locale, changeLanguage, isRtl, messages } = useLocale();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };
  return (
    <AppBar
      id="navBar"
      position="sticky"
      className={classes.appBar}
      color="default"
      elevation={3}
    >
      <Toolbar>
        <div >
          <Avatar
            className={classes.logo}
            alt="I m a m"
            src="assets/imam_avatar.png"
          />
        </div>
        <Typography className={classes.app_name}>
            {messages.appName}
        </Typography>

        <Button
          color="inherit"
          aria-label="menu"
          className={classes.languageButton}
          onClick={() => changeLanguage(toggleCurrentLocale(locale))}
        >
          <LanguageOutlinedIcon
            style={{ fontSize: "1rem" }}
            className={classes.languageIcon}
          />
          <Typography className={classes.languageName}>
            {messages.app_language}
          </Typography>
        </Button>

        <Button variant="outlined" color="secondary" href="">
          {messages.appStore}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default WebAppBar;
