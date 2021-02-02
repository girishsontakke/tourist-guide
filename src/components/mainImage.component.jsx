import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  main_image: {
    display: "flex",
    justifyContent: "center",
  },
});

const MainImage = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.main_image}>
          <img
            src={require("../assets/img1.png").default}
            alt="main"
            style={{ maxWidth: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainImage;
