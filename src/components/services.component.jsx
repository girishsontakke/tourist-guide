import { Grid, makeStyles } from "@material-ui/core";
import { ReactComponent as CityTravel } from "../assets/city_travel.svg";
import DATA from "./data";
const Services = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.heading}> OUR SERVICES </h2>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={4} xs={12}>
          <CityTravel className={classes.svg} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <h6 className={classes.subheading}>CITY TOUR</h6>
          {<p className={classes.description}>{DATA.content}</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "rgba(219,22,47)",
    textAlign: "center",
    fontWeight: "1800",
    fontSize: "4rem",
    fontFamily: "system-ui",
  },
  svg: {
    maxWidth: "100%",
    maxHeight: "300px",
  },
  subheading: {
    textAlign: "center",
    fontWeight: "2000",
    fontSize: "2.3rem",
    fontFamily: "system-ui",
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.2rem",
    padding: "5px 10px",
  },
}));
