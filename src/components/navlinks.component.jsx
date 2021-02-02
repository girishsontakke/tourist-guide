import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const classes = useStyles();
  return (
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
  );
};

export default NavLinks;

const useStyles = makeStyles({
  link: {
    color: "inherit",
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
});
