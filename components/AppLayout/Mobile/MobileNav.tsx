import React from "react";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { MdLanguage as LanguageOutlinedIcon } from "react-icons/md";
import Button from "@material-ui/core/Button";
import { useLocale } from "contexts/language/language.provider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useStyles } from "./style";
import { toggleCurrentLocale } from "contexts/language/language.helper";
import { useAuthenticationStore } from "contexts/auth/authentication";
import { useRouter } from "next/router";
import { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE } from "store/navigation";

const MobileNav = ({closeDrawer}) => {
  const classes = useStyles();
  // global contexts 
  const { locale, changeLanguage, isRtl, messages } = useLocale();
  const [authenticated] = useAuthenticationStore();
  const router = useRouter();

  return (
    <div
      className={classes.root}
      id="listmMenuMobilenavigation"
    >
      <List component="nav">
            <Link href="/">
              <ListItem button disableGutters onClick={closeDrawer}>
                <ListItemText primary={messages.dashboard} className={router.pathname == HOME_PAGE ? classes.active : ''} />
              </ListItem>
            </Link>
            <ListItem button disableGutters onClick={closeDrawer}>
              <ListItemText primary={messages.therapists} />
            </ListItem>
            <ListItem button disableGutters onClick={closeDrawer}>
              <ListItemText primary={messages.reviews} />
            </ListItem>
            <ListItem button disableGutters onClick={closeDrawer}>
              <ListItemText primary={messages.topRated} />
            </ListItem>
            <Divider className={classes.divider} variant="middle" />

            <ListItem
              button
              disableGutters
              onClick={() => changeLanguage(toggleCurrentLocale(locale))}
            >
              <ListItemIcon>
                <LanguageOutlinedIcon
                  // style={{ fontSize: "2rem" }}
                  className={classes.lang_icon}
                />
              </ListItemIcon>
              <ListItemText
                primary={isRtl ? `${messages.english}` : `${messages.arabic}`}
              />
            </ListItem>
      </List>
      
      {authenticated ? null : (
        <div className={classes.footer}>
          <Link href={LOGIN_PAGE}>
            <Button className={classes.logIn} onClick={closeDrawer}>{messages.login}</Button>
          </Link>         
        </div>
      )}
    </div>
  );
};

export default MobileNav;
