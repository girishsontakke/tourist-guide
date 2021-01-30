import { Grid, makeStyles } from "@material-ui/core";

const ServiceSection = ({ DATA }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={4} xs={12}>
          <img src={DATA.imageUrl} alt="logo" className={classes.svg} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <h6 className={classes.subheading}>{DATA.heading}</h6>
          <p className={classes.description}>{DATA.content}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceSection;

const useStyles = makeStyles({
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
});
