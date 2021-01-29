import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/voyage-scoutt.jpg";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:600px)");
  const handleDisplay = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };
  return (
    <>
      <AppBar position="static" color="default" className={classes.header}>
        <Toolbar>
          <Grid container>
            <Grid item sm={3}>
              <Link to="/">
                <div className={classes.logo__container}>
                  <img src={Logo} alt="logo" className={classes.logo} />
                </div>
              </Link>
            </Grid>
            <Grid item xs />
            {matches ? (
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDisplay}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            ) : (
              <Grid item className={classes.right} sm={8}>
                <Link to="/" className={classes.link}>
                  <Typography component="h6" variant="h6">
                    Home
                  </Typography>
                </Link>
                <Link to="/signin" className={classes.link}>
                  <Typography component="h6" variant="h6">
                    SignIn
                  </Typography>
                </Link>
                <Link to="/signup" className={classes.link}>
                  <Typography component="h6" variant="h6">
                    SignUp
                  </Typography>
                </Link>
              </Grid>
            )}
          </Grid>
        </Toolbar>
        {matches && display ? (
          <Toolbar>
            <Grid item className={classes.rightsm}>
              <Link to="/" className={classes.link} style={{ width: "100vw" }}>
                <Typography component="h6" variant="h6">
                  Home
                </Typography>
              </Link>
              <Link
                to="/signin"
                className={classes.link}
                style={{ width: "100vw" }}
              >
                <Typography component="h6" variant="h6">
                  SignIn
                </Typography>
              </Link>
              <Link
                to="/signup"
                className={classes.link}
                style={{ width: "100vw" }}
              >
                <Typography component="h6" variant="h6">
                  SignUp
                </Typography>
              </Link>
            </Grid>
          </Toolbar>
        ) : null}
      </AppBar>
    </>
  );
};

export default Header;
const useStyle = makeStyles((theme) => ({
  menuButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#4a4a4a",
    fontSize: "1.6em",
    fontWeight: "800",
    backgroundColor: "white",
    marginBottom: "20px",
  },
  logo__container: {
    height: "50px",
    width: "80px",
    margin: "0 auto",
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    fontSize: "14px",
  },
  link: {
    transition: "transform ease-in-out",
    marginRight: "20px",
    "&:hover": {
      transform: "scale(1.02)",
      color: "black",
    },
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rightsm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: "10px",
    paddingLeft: "30px",
  },
}));
