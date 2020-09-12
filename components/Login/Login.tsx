import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import { MdVisibility as Visibility } from "react-icons/md";
import { MdVisibilityOff as VisibilityOff } from "react-icons/md";
import InputLabel from "@material-ui/core/InputLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Container, Row, Col } from "react-grid-system";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { FaTwitterSquare as Twitter } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { useLocale } from "contexts/language/language.provider";
import { useStyles } from "./style";
import {
  FORGOT_PASSWORD_PAGE,
  REGISTER_PAGE,
  HOME_PAGE,
} from "store/navigation";
import { useAuthenticationStore } from "contexts/auth/authentication";
import { error } from "console";
import { Loader } from "components/Loader/circular";
import { setLocalState } from "helper/localStorage";
import { localStorageCommands } from "helper/localStorageCommands";
import { useRouter } from "next/router";
import {
  Link,
  FormHelperText,
  CircularProgress,
  Checkbox,
} from "@material-ui/core";

// interface State {
//   password: string;
//   showPassword: boolean;
//   email : string
// }

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginForm: React.FC<any> = () => {
  const classes = useStyles();
  const router = useRouter();

  const { locale, changeLanguage, isRtl, messages } = useLocale();

  const [authentication, setAuthentication] = useAuthenticationStore();
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
    email: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  //   React.useEffect(() => {
  //     if (touched.email) {
  //       setErrors({...errors, email : !validateEmail_Helper(values.email)})
  //     }

  //   }, [values.email, touched.email])

  React.useEffect(() => {
    if (touched.password) {
      if (values.password) {
        setErrors({ ...errors, password: false });
      } else {
        setErrors({ ...errors, password: true });
      }
    }
  }, [values.password, touched.password]);

  React.useEffect(() => {
    if (
      touched.email &&
      touched.password &&
      !errors.email &&
      !errors.password
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [touched, errors, values]);

  const keyPress = (e: any) => {
    if (e.key === "Enter") {
      if (canSubmit) {
        if (!loading) {
          login();
        }
      }
    }
  };

  const login = async () => {
    // setLoading(true);
    // Auth_API.Login(values.email, values.password)
    // .then(response => {
    //   setLoading(false);
    //   if (response) {
    //     if (response.isValid) {
    //       setLocalState(localStorageCommands.token, response.data.accessToken)
    //       setLocalState(localStorageCommands.user , response.data.user)
    //       setLocalState(localStorageCommands.authenticated , true)
    //       setUser(response.data.user);
    //       setAuthentication(true);
    //       InfoAlert(messages.alerts.signedIn);
    //       window.location.href = HOME_PAGE;
    //     }
    //     else
    //     {
    //       response?.data?.messages.forEach((messageObj) => {
    //         ErrorAlert(messageObj.message);
    //       })
    //     }
    //   }
    //   else
    //   {
    //     ErrorAlert(messages.serverErrors.ERROR_CONNECTION);
    //   }
    // })
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper id="login" elevation={3} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        // aria-label="simple tabs example"
        indicatorColor="primary"
        textColor="primary"
        // style={{borderBottom:"none !important"}}
      >
        <Tab className={classes.tab} label="login" {...a11yProps(0)} />
        <Tab className={classes.tab} label="register" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <form action="/action_page.php" className={classes.form}>
          <label className={classes.label} for="fname">
            Email
          </label>
          <input
            className={classes.input}
            type="text"
            id="fname"
            name="firstname"
          />

          <label className={classes.label} for="lname">
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            id="lname"
            name="lastname"
          />
          <div className={classes.forgotPassword_box}>
            <a
              href={FORGOT_PASSWORD_PAGE}
              style={{ display: "block" }}
              className={classes.forgotPassword}
            >
              forgotPassword ?
            </a>
          </div>

          <div className={classes.rememberMe_box}>
            <Checkbox
              //   checked={agreement}
              color="primary"
              //   onChange={() => setAgreement(!agreement)}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography className={classes.agree_text}>
              remember login next tome
            </Typography>
          </div>
          <div className={classes.loginBox}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              // onClick={goToStepTwo}
            >
              login
            </Button>
          </div>
        </form>

        <div className={classes.footer}>
          <Facebook
            style={{ fill: "#3b5998" }}
            className={classes.socialIcon}
          />
          <Twitter style={{ fill: "#1da1f2" }} className={classes.socialIcon} />
          <Linkedin
            style={{ fill: "#007bb5" }}
            className={classes.socialIcon}
          />
        </div>
        <div className={classes.edge}></div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        man
      </TabPanel>
    </Paper>
  );
};

export { LoginForm };
