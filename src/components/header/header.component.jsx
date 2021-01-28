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
const useStyle = makeStyles((theme) => ({
  header: {
    color: "#4a4a4a",
    fontSize: "1.2em",
    backgroundColor: "white",
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

const Header = () => {
  const [display, setDisplay] = useState(false);
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:600px)");
  const handleDisplay = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };
  return (
    <AppBar position="static" color="default" className={classes.header}>
      <Toolbar>
        <Grid container>
          <Grid item className={classes.link}>
            <Link to="/">
              <Typography variant="h5" component="h2">
                Brand Logo
              </Typography>
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
                <Typography component="span">Home</Typography>
              </Link>
              <Link to="/signin" className={classes.link}>
                <Typography component="span">SignIn</Typography>
              </Link>
              <Link to="/signup" className={classes.link}>
                <Typography component="span">SignUp</Typography>
              </Link>
            </Grid>
          )}
        </Grid>
      </Toolbar>
      {matches && display ? (
        <Toolbar>
          <Grid item className={classes.rightsm}>
            <Link to="/" className={classes.link} style={{ width: "100vw" }}>
              <Typography component="span">Home</Typography>
            </Link>
            <Link
              to="/signin"
              className={classes.link}
              style={{ width: "100vw" }}
            >
              <Typography component="span">SignIn</Typography>
            </Link>
            <Link
              to="/signup"
              className={classes.link}
              style={{ width: "100vw" }}
            >
              <Typography component="span">SignUp</Typography>
            </Link>
          </Grid>
        </Toolbar>
      ) : null}
    </AppBar>
  );
};

export default Header;
